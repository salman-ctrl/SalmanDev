import { ShieldQuestion, UserRound } from 'lucide-react';
import AOS from "aos"
import "aos/dist/aos.css";

AOS.init();  // Inisialisasi AOS di luar komponen jika hanya perlu sekali

const About = () => {
    return (
        <section id='about' className='h-auto -mt-8 '>
            <div className='h-full w-full'>
                <div className='w-full flex justify-center gap-5 items-center pt-40'>
                    <div className="w-1/5">
                        <hr className='border-t-2 ml-32 mb-1 border-sky-300' />
                        <hr className='border-t-2 ml-16 border-sky-300' />
                        <hr className='border-t-2 border-sky-300 mt-1' />
                    </div>
                    <h1 data-aos="fade-left" data-aos-delat="500" className='text-center align-middle text-4xl text-sky-300 cursor-pointer  overflow-hidden px-16 py-3  transition duration-1000 flex hover:scale-105 gap-5 hover:text-shadow'>
                        About Me
                        <UserRound className='mt-1 w-10 h-10' />
                    </h1>
                    <div className="w-1/5">
                        <hr className='border-t-2 mr-32 mb-1 border-sky-300' />
                        <hr className='border-t-2 mr-16 border-sky-300' />
                        <hr className='border-t-2 border-sky-300 mt-1' />
                    </div>                </div>

                <div className='w-full h-full pl-16 pt-16 flex gap-8  justify-center mb-10 '>
                    <div className='w-1/2 px-10 bg-black py-10 border-2 border-sky-300 hover:border-white rounded-lg transition duration-700 hover:scale-105'>
                        <div data-aos="fade-right" data-aos-delay="500" >
                            <h1 className='text-2xl py-5 text-blue-400 flex gap-2 items-center'> <ShieldQuestion className='h-7 w-7 text-blue-300' />Who I Am?</h1>
                            <p className='text-xs sm:text-xl text-fourth'>
                                Hi, I'm <span className='text-sky-300'> Salman Rizky</span> , a passionate <span className=' text-sky-300'>Front-End Web Developer</span>  and an Informatics student at Universitas Negeri Padang. I specialize in building interactive, user-friendly websites using HTML5, CSS3, JavaScript, and frameworks like React and Tailwind CSS. I’m driven by creating clean, efficient, and visually appealing web experiences that work seamlessly across devices.
                                <br /> <br />
                                As a student, I’m constantly learning new technologies and keeping up with the latest trends in web development. My goal is to combine my technical skills with my creativity to build impactful websites that users love to engage with..</p>
                        </div>
                    </div>

                    <div className='px-10 w-1/2 border-2 mr-10 bg-black border-sky-300 hover:border-white  py-10 rounded-lg transition duration-1000 hover:scale-105'>
                        <div data-aos="fade-left" data-aos-delay="500" >
                            <h1 className='text-2xl py-5 text-blue-400 flex gap-2 items-center'>
                                <ShieldQuestion className='w-7 h-7 text-blue-300' /> Why me?
                            </h1>
                            <p className='text-xl text-fourth '>
                                <ul className='custom-none'>
                                    <li> <span>Passion for Learning:</span> Always staying updated with new technologies and tools to deliver cutting-edge solutions.</li> <br />
                                    <li> <span>Attention to Detail:</span> From pixel-perfect designs to smooth transitions, I ensure every element is polished and well-crafted.</li> <br />
                                    <li> <span>Team-Oriented:</span> I work well both independently and as part of a team, always open to collaboration and feedback to improve the project.</li><br />
                                    <li><span>Modern Tech Skills: </span> Expertise in React, Tailwind CSS, and modern development tools, ensuring clean, efficient, and scalable code.</li><br />
                                    <li><span>User-Focused Design: </span> I create websites that are responsive, intuitive, and visually appealing. I focus on delivering smooth, seamless user experiences.</li>
                                </ul>
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </section >
    )
}

export default About;