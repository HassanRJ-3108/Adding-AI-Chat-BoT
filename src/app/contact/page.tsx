'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [bgColor, setBgColor] = useState('#f9fafb');
    const [formData, setFormData] = useState({ name: '', email: '', feedback: '' });
    const [message, setMessage] = useState('');

    // Lighter color palette
    const colors = ['#DFFFD6', '#D6EAF8', '#F2F3F4', '#EADCF8', '#F8D6E8', '#FFF9C4', '#EEDAC2'];

    const handleMouseMove = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBgColor(randomColor);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage('Thank you for contacting us. 😊');
        setFormData({ name: '', email: '', feedback: '' });
    };

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen px-4 py-6 transition-colors duration-300"
            style={{ backgroundColor: bgColor }}
            onMouseMove={handleMouseMove}
        >
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm md:max-w-md text-center border-4 border-blue-300">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-500 mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your Name"
                        className="p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your Email"
                        className="p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <textarea
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                        placeholder="Your Feedback"
                        className="p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows={4}
                        required
                    />
                    <button type="submit" className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700 transition w-full">
                        Submit
                    </button>
                </form>
                {message && (
                    <input
                        type="text"
                        value={message}
                        readOnly
                        className="mt-4 p-3 w-full rounded-md border border-green-500 text-green-600 text-center bg-green-50"
                    />
                )}
            </div>
        </div>
    );
}
