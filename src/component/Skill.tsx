import { useEffect, useState } from 'react'

// Mock data for demonstration - replace with your actual data
const skillsData = [
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "NodeJS" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", name: "Bootstrap" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
    {
        img: "https://static.cdnlogo.com/logos/t/34/tailwind-css.svg",
        name: "Tailwind"
    },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TypeScript" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", name: "GitHub" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", name: "Vercel" }
];

interface Skill {
    img: string;
    name: string;
}

const Skill = () => {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        // Initialize AOS
        if (typeof window !== 'undefined') {
            import('aos').then(AOS => {
                AOS.init({
                    duration: 1000,
                    easing: 'ease-in-out',
                    once: false,
                    offset: 50,
                    delay: 0,
                    anchorPlacement: 'top-bottom'
                });
            });
        }

        // Use the mock data - replace with your actual data import
        setSkills(skillsData);
    }, []);

    return (
        <section id='skill' className='min-h-screen w-full py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden'>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-sky-500 opacity-10 blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-cyan-500 opacity-10 blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-sky-400 opacity-5 blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className='max-w-7xl mx-auto relative z-10'>
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
                    <div className="inline-block" data-aos="fade-up" data-aos-delay="200">
                        <h1 className='text-6xl md:text-7xl font-bold bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent mb-4 animate-pulse'>
                            My Skills
                        </h1>
                        <div className="h-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-300 rounded-full transform scale-x-0 animate-pulse delay-500"></div>
                    </div>
                    <p className='text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed' data-aos="fade-up" data-aos-delay="400">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative transition-all duration-500"
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            data-aos-duration="1000"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Glow Effect */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 ${hoveredIndex === index ? 'animate-pulse' : ''}`}></div>

                            {/* Card */}
                            <div className={`relative bg-slate-800/40 backdrop-blur-lg border border-sky-300/20 rounded-2xl p-6 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${hoveredIndex === index
                                ? 'bg-slate-800/60 border-sky-400/50 shadow-2xl shadow-sky-500/25'
                                : 'hover:bg-slate-800/50'
                                }`}>
                                {/* Skill Icon */}
                                <div className='relative mb-4 flex justify-center'>
                                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-slate-700/40 to-slate-800/40 border border-sky-300/20 flex items-center justify-center transform transition-all duration-500 ${hoveredIndex === index ? 'rotate-6 scale-110 border-sky-400/50' : 'group-hover:rotate-3'
                                        }`}>
                                        <img
                                            src={skill.img}
                                            alt={skill.name}
                                            className='w-10 h-10 md:w-12 md:h-12 object-contain filter drop-shadow-lg'
                                        />
                                    </div>

                                    {/* Floating particles effect */}
                                    {hoveredIndex === index && (
                                        <>
                                            <div className="absolute -top-2 -right-2 w-2 h-2 bg-sky-400 rounded-full animate-ping"></div>
                                            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-100"></div>
                                            <div className="absolute -top-2 -left-2 w-1 h-1 bg-sky-300 rounded-full animate-ping delay-200"></div>
                                        </>
                                    )}
                                </div>

                                {/* Skill Name */}
                                <h3 className={`text-center font-semibold transition-all duration-300 ${hoveredIndex === index
                                    ? 'text-sky-300 text-lg'
                                    : 'text-gray-300 text-base group-hover:text-sky-300'
                                    }`}>
                                    {skill.name}
                                </h3>

                                {/* Progress Bar Animation */}
                                <div className="mt-3 w-full bg-slate-700/40 rounded-full h-1 overflow-hidden">
                                    <div className={`h-full bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full transition-all duration-1000 ${hoveredIndex === index ? 'w-full' : 'w-0'
                                        }`}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Decorative Elements */}
                <div className='flex justify-center mt-16' data-aos="fade-up" data-aos-delay="600">
                    <div className='flex space-x-2'>
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 animate-pulse`}
                                style={{ animationDelay: `${i * 200}ms` }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* AOS CSS */}
            <style >{`
                @import url('https://unpkg.com/aos@2.3.1/dist/aos.css');
            `}</style>

            {/* Floating Animation CSS */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float 3s ease-in-out infinite;
                    animation-delay: 1s;
                }
            `}</style>
        </section>
    );
};

export default Skill;