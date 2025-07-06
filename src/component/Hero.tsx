import { Send, Linkedin, Github, Mail, ArrowRight, ShieldQuestion, UserRound, ShieldEllipsis } from 'lucide-react';
import { useEffect, useState } from 'react'

import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
    const headlineText = " Who Am I..?";
    const paragraphText = "I'm Salman, a Fullstack Web Developer passionate about turning ideas into stunning, functional, and user-friendly digital experiences.."

    const [headline, setHeadline] = useState("");
    const [paragraph, setParagraph] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    const typeText = (text: string, setDisplayedText: React.Dispatch<React.SetStateAction<string>>, speed: number) => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(prev => prev + text.charAt(i));
            i++;
            if (i === text.length) {
                clearInterval(interval);
            }
        }, speed);
        return () => clearInterval(interval)
    };

    // useEffect untuk animasi head dan paragraf di hero
    useEffect(() => {
        setIsVisible(true);
        const timer = setTimeout(() => {
            typeText(headlineText, setHeadline, 80);
            setTimeout(() => {
                typeText(paragraphText, setParagraph, 30);
            }, 1500);
        }, 500);

        return () => clearTimeout(timer);
    }, [])

    return (
        <div id='hero' className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            <div className="relative z-10 flex h-screen items-center">
                <div className="w-full lg:w-1/2 px-8 lg:px-16 flex flex-col justify-center">
                    {/* Floating badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 w-max border border-white/20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        Available for projects
                    </div>

                    {/* Main headline with gradient text */}
                    <h1 className={`text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                            {headline}
                        </span>
                        <span className="inline-block w-1 h-16 bg-gradient-to-b from-blue-400 to-purple-400 ml-2 animate-pulse"></span>
                    </h1>

                    {/* Paragraph with modern styling */}
                    <p className={`text-xl lg:text-2xl text-gray-300 leading-relaxed mb-12 max-w-2xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {paragraph}
                    </p>

                    {/* Modern CTA buttons */}
                    <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3 overflow-hidden">
                            <span className="relative z-10">Learn More</span>
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        </button>

                        <a
                            href="https://wa.me/6285267653061"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                        >
                            <FaWhatsapp className="w-5 h-5 text-green-500" />
                            <span>Contact Me</span>
                        </a>

                    </div>

                    {/* Social links */}
                    <div className={`flex gap-6 mt-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {[
                            { icon: Github, href: "https://github.com/salman-ctrl" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/salman-rizky-763253265/" },
                            { icon: Mail, href: "mailto:zirmanvictory@gmail.com" }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                            >
                                <social.icon className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors duration-300" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Enhanced image section */}
                <div className="hidden lg:flex w-1/2 justify-center items-center relative">
                    <div className={`relative transition-all duration-1500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {/* Glowing ring effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse scale-110"></div>

                        {/* Main image container */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                            <img
                                src="/assets/foto ku.png"
                                alt="Salman - Frontend Developer"
                                className="relative z-10 w-96 h-96 object-cover rounded-3xl border-4 border-white/20 shadow-2xl transform group-hover:scale-105 transition-all duration-700 hover:shadow-blue-500/25"
                            />

                            {/* Floating elements around image */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce delay-200"></div>
                            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full animate-bounce delay-700"></div>
                            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-bounce delay-1000"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}

export default Hero;