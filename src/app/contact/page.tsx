'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

export default function ContactPage() {
    const [bgColor, setBgColor] = useState('#f3f4f6');
    const [formData, setFormData] = useState({ name: '', email: '', feedback: '' });

    const handleMouseMove = () => {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        setBgColor(randomColor);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Thank you for your response! 😊');
        setFormData({ name: '', email: '', feedback: '' });
    };

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen px-4 py-6 transition-colors duration-200"
            style={{ backgroundColor: bgColor }}
            onMouseMove={handleMouseMove}
        >
            <div className="bg-green-500 shadow-lg rounded-2xl p-6 w-full max-w-sm md:max-w-md text-center border-4 border-green-700">
                <h2 className="text-xl md:text-2xl font-semibold text-pink-500 mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your Name"
                        className="p-3 w-full rounded-md border focus:outline-none"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your Email"
                        className="p-3 w-full rounded-md border focus:outline-none"
                        required
                    />
                    <textarea
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                        placeholder="Your Feedback"
                        className="p-3 w-full rounded-md border focus:outline-none"
                        rows={4}
                        required
                    />
                    <button type="submit" className="bg-pink-500 text-white p-3 rounded-md hover:bg-blue-700 transition w-full">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
