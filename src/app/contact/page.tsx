'use client'
import { useState } from "react";

export default function ContactPage() {
    const [bgColor, setBgColor] = useState("#f3f4f6"); // Initial background color

    const handleMouseMove = () => {
        // Generate a random color on mouse movement
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        setBgColor(randomColor);
    };

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen p-6 transition-colors duration-200"
            style={{ backgroundColor: bgColor }}
            onMouseMove={handleMouseMove}
        >
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-2">
                    <span className="font-medium">Email:</span>
                    <a href="mailto:syedqgulzarbano@gmail.com" className="text-blue-500 hover:underline ml-1">
                        syedqgulzarbano@gmail.com
                    </a>
                </p>
                <p className="text-gray-600">
                    <span className="font-medium">Phone:</span>
                    <a href="tel:+923363893198" className="text-blue-500 hover:underline ml-1">
                        +92 336 3893198
                    </a>
                </p>
            </div>
        </div>
    );
}
