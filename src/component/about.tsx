import { ShieldQuestion, UserRound, Star, Code, Heart, Users, Target, Zap, Award, Coffee } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    useEffect(() => {
        // Initialize AOS-like functionality
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        // Scroll animation observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('aos-animate');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '50px 0px -50px 0px'
            }
        );

        // Observe all elements with aos attributes
        setTimeout(() => {
            document.querySelectorAll('[data-aos]').forEach((el) => {
                observer.observe(el);
            });
        }, 100);

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, []);

    const whyMePoints = [
        {
            icon: <Heart className="w-5 h-5" />,
            title: "Passion for Learning",
            description: "Always staying updated with new technologies and tools to deliver cutting-edge solutions."
        },
        {
            icon: <Target className="w-5 h-5" />,
            title: "Attention to Detail",
            description: "From pixel-perfect designs to smooth transitions, I ensure every element is polished and well-crafted."
        },
        {
            icon: <Users className="w-5 h-5" />,
            title: "Team-Oriented",
            description: "I work well both independently and as part of a team, always open to collaboration and feedback."
        },
        {
            icon: <Code className="w-5 h-5" />,
            title: "Modern Tech Skills",
            description: "Expertise in React, Tailwind CSS, and modern development tools, ensuring clean, efficient code."
        },
        {
            icon: <Zap className="w-5 h-5" />,
            title: "User-Focused Design",
            description: "I create websites that are responsive, intuitive, and visually appealing with seamless user experiences."
        }
    ];

    const stats = [
        { number: "1+", label: "Years Experience", icon: <Coffee className="w-5 h-5" /> },
        { number: "12+", label: "Projects Built", icon: <Code className="w-5 h-5" /> },
        { number: "7+", label: "Technologies", icon: <Award className="w-5 h-5" /> }
    ];

    return (
        <section id='about' className='min-h-screen w-full py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden'>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-sky-500 opacity-5 blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-cyan-500 opacity-5 blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/3 right-1/3 w-60 h-60 rounded-full bg-sky-400 opacity-3 blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className='max-w-7xl mx-auto relative z-10'>
                {/* Header Section */}
                <div
                    className="text-center mb-16 aos-init"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div className="flex items-center justify-center gap-8 mb-8">
                        {/* Left decorative lines */}
                        <div className="hidden md:flex flex-col gap-1 w-32">
                            <div className="h-0.5 bg-gradient-to-r from-transparent to-sky-400 animate-pulse"></div>
                            <div className="h-0.5 bg-gradient-to-r from-transparent to-sky-400 animate-pulse delay-200 ml-8"></div>
                            <div className="h-0.5 bg-gradient-to-r from-transparent to-sky-400 animate-pulse delay-400 ml-16"></div>
                        </div>

                        {/* Title */}
                        <div className="flex items-center gap-4">
                            <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent'>
                                About Me
                            </h1>
                            <div className="p-3 rounded-full bg-gradient-to-br from-sky-500/20 to-cyan-500/20 backdrop-blur-sm border border-sky-400/30">
                                <UserRound className='w-8 h-8 text-sky-300' />
                            </div>
                        </div>

                        {/* Right decorative lines */}
                        <div className="hidden md:flex flex-col gap-1 w-32">
                            <div className="h-0.5 bg-gradient-to-l from-transparent to-sky-400 animate-pulse"></div>
                            <div className="h-0.5 bg-gradient-to-l from-transparent to-sky-400 animate-pulse delay-200 mr-8"></div>
                            <div className="h-0.5 bg-gradient-to-l from-transparent to-sky-400 animate-pulse delay-400 mr-16"></div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 aos-init"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-slate-800/40 backdrop-blur-lg border border-sky-300/20 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-500 hover:bg-slate-800/60 hover:border-sky-400/50"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500"></div>
                            <div className="relative">
                                <div className="flex justify-center mb-3">
                                    <div className="p-3 rounded-full bg-gradient-to-br from-sky-500/20 to-cyan-500/20 border border-sky-400/30 text-sky-300">
                                        {stat.icon}
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-sky-300 mb-2">{stat.number}</div>
                                <div className="text-gray-300">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Content Section - Now with equal heights */}
                <div className='grid md:grid-cols-2 gap-8 lg:gap-12 items-start'>
                    {/* Who I Am Card */}
                    <div
                        className="group relative h-full aos-init"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        onMouseEnter={() => setHoveredCard(0)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500 ${hoveredCard === 0 ? 'animate-pulse' : ''}`}></div>

                        {/* Card */}
                        <div className={`relative bg-slate-800/40 backdrop-blur-lg border border-sky-300/20 rounded-2xl p-8 h-full flex flex-col transform transition-all duration-500 hover:scale-105 ${hoveredCard === 0
                            ? 'bg-slate-800/60 border-sky-400/50 shadow-2xl shadow-sky-500/25'
                            : 'hover:bg-slate-800/50'
                            }`}>
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-gradient-to-br from-sky-500/20 to-cyan-500/20 border border-sky-400/30">
                                    <ShieldQuestion className='w-6 h-6 text-sky-300' />
                                </div>
                                <h2 className='text-2xl font-bold text-sky-300'>Who I Am?</h2>
                            </div>

                            {/* Content */}
                            <div className="space-y-4 flex-grow">
                                <p className='text-gray-300 leading-relaxed'>
                                    Hi, I'm <span className='text-sky-300 font-semibold'>Salman Rizky</span>, a passionate <span className='text-sky-300 font-semibold'>Fullstack Web Developer</span> and an Informatics student at Universitas Negeri Padang.
                                </p>

                                <p className='text-gray-300 leading-relaxed'>
                                    I specialize in building interactive, user-friendly web applications using technologies like HTML5, CSS3, JavaScript, React, Tailwind CSS, Express.js, Laravel, and MongoDB. I'm committed to delivering clean, efficient, and responsive solutions from front to back.
                                </p>

                                <p className='text-gray-300 leading-relaxed'>
                                    I have hands-on experience building a wide range of real-world projects as part of my personal portfolio, including full-featured CRUD systems, RESTful APIs, admin dashboards, landing pages, and interactive UI components. These projects demonstrate not only my technical proficiency, but also my ability to understand user needs and translate them into functional digital solutions.
                                </p>

                                <p className='text-gray-300 leading-relaxed'>
                                    As a student, I'm constantly exploring new tools and frameworks, and staying up to date with the latest trends in fullstack development. My goal is to combine strong technical skills with creativity to build impactful digital experiences that are both beautiful and effective.
                                </p>
                            </div>


                            {/* Bottom section */}
                            <div className="mt-6 pt-4 border-t border-sky-300/20">
                                <div className="flex items-center gap-2 text-sky-300">
                                    <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></div>
                                    <span className="text-sm">Currently learning Next.js & TypeScript</span>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            {hoveredCard === 0 && (
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <div className="w-2 h-2 bg-sky-400 rounded-full animate-ping"></div>
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-100"></div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Why Me Card */}
                    <div
                        className="group relative h-full aos-init"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="500"
                        onMouseEnter={() => setHoveredCard(1)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500 ${hoveredCard === 1 ? 'animate-pulse' : ''}`}></div>

                        {/* Card */}
                        <div className={`relative bg-slate-800/40 backdrop-blur-lg border border-sky-300/20 rounded-2xl p-8 h-full flex flex-col transform transition-all duration-500 hover:scale-105 ${hoveredCard === 1
                            ? 'bg-slate-800/60 border-sky-400/50 shadow-2xl shadow-sky-500/25'
                            : 'hover:bg-slate-800/50'
                            }`}>
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-gradient-to-br from-sky-500/20 to-cyan-500/20 border border-sky-400/30">
                                    <Star className='w-6 h-6 text-sky-300' />
                                </div>
                                <h2 className='text-2xl font-bold text-sky-300'>Why Me?</h2>
                            </div>

                            {/* Content */}
                            <div className="space-y-4 flex-grow">
                                {whyMePoints.map((point, index) => (
                                    <div
                                        key={index}
                                        className={`flex gap-4 p-4 rounded-xl bg-slate-700/20 border border-sky-300/10 hover:border-sky-400/30 transition-all duration-300 hover:bg-slate-700/30 aos-init`}
                                        data-aos="fade-up"
                                        data-aos-duration="600"
                                        data-aos-delay={600 + (index * 100)}
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="p-2 rounded-lg bg-gradient-to-br from-sky-500/20 to-cyan-500/20 border border-sky-400/30 text-sky-300">
                                                {point.icon}
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className='font-semibold text-sky-300 mb-2'>{point.title}</h3>
                                            <p className='text-sm text-gray-300 leading-relaxed'>{point.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative Elements */}
                            {hoveredCard === 1 && (
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                                    <div className="w-2 h-2 bg-sky-400 rounded-full animate-ping delay-100"></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Call-to-Action */}
                <div
                    className="text-center mt-16 aos-init"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="800"
                >
                    <div className="bg-slate-800/40 backdrop-blur-lg border border-sky-300/20 rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-sky-300 mb-4">Let's Build Something Amazing Together!</h3>
                        <p className="text-gray-300 mb-6">Ready to turn your ideas into reality? I'm here to help you create exceptional digital experiences.</p>
                        <a href="https://wa.me/6285267653061"
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            <button className="px-8 py-3 bg-gradient-to-r mx-auto gap-3 flex  from-sky-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25">
                                <FaWhatsapp className="w-5 h-5 text-green-500" />
                                Get In Touch
                            </button>
                        </a>



                    </div>
                </div>

                {/* Bottom Decorative Elements */}
                <div
                    className="flex justify-center mt-12 aos-init"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="1000"
                >
                    <div className='flex space-x-2'>
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 animate-pulse`}
                                style={{ animationDelay: `${i * 300}ms` }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* AOS-like styles */}
            <style>{`
                .aos-init {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.8s ease, transform 0.8s ease;
                }
                
                .aos-init.aos-animate {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .aos-init[data-aos="fade-right"] {
                    transform: translateX(-20px);
                }
                
                .aos-init[data-aos="fade-left"] {
                    transform: translateX(20px);
                }
                
                .aos-init[data-aos="fade-right"].aos-animate {
                    transform: translateX(0);
                }
                
                .aos-init[data-aos="fade-left"].aos-animate {
                    transform: translateX(0);
                }
            `}</style>
        </section>
    );
};

export default About;