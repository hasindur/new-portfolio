import React from "react";
import Footer from "./Footer";



export default function HeroSection() {
    return (
        <section className="min-h-screen flex items-center justify-center ">

            <div className="flex flex-col items-center justify-center md:flex-row  w-full max-w-6xl py-10">

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
                    <button className=" text-amber-50 text-base bg-purple-600 px-4 py-2 rounded-3xl cursor-pointer tracking-wider transition-colors hover:text-black z-50">Download CV</button>
                </div>

                {/* Right side is free for portrait */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    {/* Your portrait image goes here */}
                    {/* Example:
          <img
            src="/your-portrait.png"
            alt="Hasindu Portrait"
            className="w-72 md:w-96 rounded-full shadow-lg"
          /> 
          */}
                </div>
            </div>

        </section>
    );
}
