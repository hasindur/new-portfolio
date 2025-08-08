import React from "react";
import 'boxicons/css/boxicons.min.css';

export default function Footer() {
    return (
        <footer className="bg-purple-600 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

                    {/* Logo / Name */}
                    <div>
                        <h1 className="text-2xl font-bold">Saviya</h1>
                        <p className="mt-2 text-purple-200 text-sm">
                            Empowering communities with knowledge and resources.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-5">
                        <div>
                            <h2 className="font-semibold text-lg">Quick Links</h2>
                            <ul className="mt-2 space-y-2 text-purple-200 text-sm">
                                <li><a href="#" className="hover:text-white">Home</a></li>
                                <li><a href="#" className="hover:text-white">About</a></li>
                                <li><a href="#" className="hover:text-white">Services</a></li>
                                <li><a href="#" className="hover:text-white">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-semibold text-lg">Social</h2>
                            <ul className="mt-2 space-y-2 text-purple-200 text-sm flex flex-col gap-2">
                                <li>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                                        <i className='bx bxl-facebook-square text-xl'></i> Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                                        <i className='bx bxl-instagram text-xl'></i> Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                                        <i className='bx bxl-linkedin-square text-xl'></i> LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                                        <i className='bx bxl-github text-xl'></i> GitHub
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-purple-400 my-6"></div>

                {/* Bottom Section */}
                <div className="text-center text-purple-200 text-sm">
                    © {new Date().getFullYear()} Saviya. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
