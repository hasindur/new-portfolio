import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function HeroSection() {
    return (
        <section className="min-h-screen flex items-center justify-center ">

            <div className="flex flex-col items-center justify-center md:flex-row w-full max-w-6xl py-10">

                {/* Left Content */}
                <div className="w-full md:w-1/2 text-white px-5">
                    <p className="text-lg text-purple-600 font-mono">Hi, I am</p>
                    <h1 className="text-4xl md:text-5xl font-mono font-bold">
                        Hasindu Ranasinghe
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-mono text-gray-300">
                        Web Developer
                    </h2>

                    <p className="text-lg font-mono text-white py-3">
                        Passionate about creating modern, user-friendly web applications
                        with clean code and innovative solutions.
                    </p>

                    {/* Buttons container */}
                    <div className="flex space-x-4 mt-4">
                        {/* Download CV button */}
                        <a
                            href="/path-to-your-cv.pdf"  // replace with actual CV file path or URL
                            download
                            className="flex items-center text-amber-50 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-3xl cursor-pointer transition-colors"
                        >
                            <i className="bi bi-file-earmark-text text-xl mr-2"></i> Download CV
                        </a>


                        {/* GitHub button */}
                        <a
                            href="https://github.com/hasindur"  // your GitHub URL here
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-amber-50 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-3xl cursor-pointer transition-colors"
                        >
                            <i className="bi bi-github text-xl mr-2"></i> GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/hasinduranasinghe"  // your LinkedIn URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-amber-50 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-3xl cursor-pointer transition-colors"
                        >
                            <i className="bi bi-linkedin text-xl mr-2"></i> LinkedIn
                        </a>

                    </div>
                </div>

                {/* Right side for portrait */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    {/* Portrait image placeholder */}
                </div>
            </div>

        </section>
    );
}
