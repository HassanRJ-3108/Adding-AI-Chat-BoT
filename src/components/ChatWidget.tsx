// Created: Floating chat widget UI (client-side)
// Purpose: Provides bottom-right circular launcher and responsive chat panel
// Behavior: Streams assistant responses from /api/assistant via fetch reader

"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, open]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || sending) return;
    setSending(true);
    setMessages((prev) => [...prev, { role: "user", content: text }, { role: "assistant", content: "" }]);
    setInput("");

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!res.body) {
        // Non-streaming fallback
        const fallback = await res.text();
        setMessages((prev) => {
          const copy = [...prev];
          // Append or replace last assistant message
          copy[copy.length - 1] = { role: "assistant", content: fallback };
          return copy;
        });
      } else {
        const reader = res.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let assistantText = "";
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          assistantText += decoder.decode(value, { stream: true });
          setMessages((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = { role: "assistant", content: assistantText };
            return copy;
          });
        }
      }
    } catch (err) {
      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = { role: "assistant", content: "Sorry, an error occurred." };
        return copy;
      });
    } finally {
      setSending(false);
    }
  }, [input, sending]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating circular launcher button */}
      <button
        aria-label="Open chat assistant"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none"
        title="Ask the portfolio AI assistant"
      >
        {/* Simple chat icon */}
        <span className="text-xl">💬</span>
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm sm:max-w-md bg-white text-black shadow-2xl rounded-xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-3 bg-blue-600 text-white rounded-t-xl">
            <div className="font-semibold">Portfolio Assistant</div>
            <button
              className="text-white/80 hover:text-white"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div ref={containerRef} className="p-3 space-y-3 overflow-y-auto max-h-80">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={
                  m.role === "user"
                    ? "flex justify-end"
                    : "flex justify-start"
                }
              >
                <div
                  className={
                    m.role === "user"
                      ? "bg-blue-600 text-white rounded-lg px-3 py-2 max-w-[80%]"
                      : "bg-gray-100 text-gray-800 rounded-lg px-3 py-2 max-w-[80%]"
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Ask about skills, projects, CV, contact..."
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={sendMessage}
              disabled={sending}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

