import Navbar from "./Navbar"
import { Mail, Clock } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

const sosmed = [
    {
        icon: faInstagram,
        link: "https://www.instagram.com/codew1thme?igsh=ajlhdXhjOWYwazYw",
        text: "Instagram"
    },
    {
        icon: faLinkedin,
        link: "https://www.linkedin.com/in/salman-rizky-763253265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        text: "LinkedIn"
    },
    {
        icon: faGithub,
        link: "https://github.com/",
        text: "Github"
    },
    {
        icon: faFacebook,
        link: "https://www.facebook.com/",
        text: "Facebook"
    },
]

AOS.init();  // Inisialisasi AOS di luar komponen jika hanya perlu sekali

const Hire = () => {

    return (
        <div className="relative bg-cover bg-center h-screen opacity-black-2 w-full overflow-hidden bg-gradient-to-br from-black  to-blue-300">
            <Navbar />
            <div className="h-full flex justify-between">
                <div className="w-1/2 pt-64 pl-16">
                    <h1 className="text-white text-5xl text-bold pb-5" data-aos="fade-up">Contact Me</h1>
                    <p className="text-2xl text-gray-200" data-aos="fade-up" data-aos-delay="200">I'm always excited to collaborate on new projects and hear fresh ideas.</p>
                    <div className="flex pt-20 gap-8" data-aos="fade-up" data-aos-delay="400">
                        <div className="gap-2 mb-4 bg-white h-40 w-80 rounded-lg cursor-pointer duration-500 hover:scale-105 shadow-2xl" >
                            <div className="flex items-center gap-2 py-2 px-4">
                                <Clock className="h-5 w-5 text-blue-500" />
                                <h1 className="text-xl font-semibold text-black">Availability</h1>
                            </div>
                            <p className="text-gray-600 px-4">
                                Currently available for freelance work and exciting opportunities.
                                <br />
                                Best time: Monday-Friday, 9 AM - 6 PM (GMT+7)
                            </p>
                        </div>
                        <div className="gap-2 mb-4 bg-white h-40 w-80 rounded-lg shadow-2xl hover:scale-[1.1] duration-500 cursor-pointer" >
                            <div className="flex items-center gap-2 py-2 px-4">
                                <Mail className="h-5 w-5 text-blue-500" />
                                <h1 className="text-xl font-semibold text-black">Quick Response</h1>
                            </div>
                            <p className="text-gray-600 px-4">
                                I typically respond within 24 hours.
                                <br />
                                Your project is important to me!
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-around items-center  mt-12 mr-24">
                        {sosmed.map((item, index) => (
                            <a className="hover:scale-105 duration-500" key={index} href={item.link} target="_blank">
                                <div className="w-15 h-15 flex flex-col justify-center items-center">
                                    <FontAwesomeIcon icon={item.icon} className="w-12 h-12 cursor-pointer duration-400" />
                                    <p>{item.text}</p>
                                </div>
                            </a>

                        ))}
                    </div>

                </div>
                <div className="h-[500px] w-[500px] mr-32 flex flex-col items-center mt-44 bg-white justify-center rounded-lg shadow-lg p-6 hover:scale-105 duration-300">
                    <form action="" className="w-full h-full">
                        <h1 className="mb-6 text-2xl font-semibold text-center text-gray-800">Contact now!</h1>
                        <div className="w-full mb-4">
                            <label htmlFor="name" className="block text-gray-700 mb-1">Nama:</label>
                            <input type="text" id="name" className="w-full py-3 px-3 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-200 mb-4" placeholder="Masukkan nama Anda" />
                            <label htmlFor="email" className="block text-gray-700 mb-1">Email:</label>
                            <input type="email" id="email" className="w-full py-3 px-3 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring-1 focus:ring-sky-200" placeholder="Masukkan email Anda" />
                        </div>
                        <label htmlFor="textarea" className="mb-1">Pesan :</label>
                        <textarea className="w-full p-2 border border-gray-200 rounded-md h-32 bg-blue-50 focus:outline-none focus:ring-2mb-4" placeholder="Tulis pesan Anda"></textarea>
                        <button className="px-6 py-2 bg-blue-500 text-white mt-7 font-semibold rounded-md hover:bg-blue-600 transition">Kirim</button>
                    </form>
                </div>


            </div>
        </div >
    )
}

export default Hire;
