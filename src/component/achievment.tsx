import { useState, useEffect } from "react";
import data from "../data.json"
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react';
import Showcase from "./showCase";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();  // Inisialisasi AOS di luar komponen jika hanya perlu sekali

interface Sertifikat {
    img: string;
    title: string;
    date: string;
    company: string;
}

const Achievment = () => {
    const [gambar, setGambar] = useState<Sertifikat[]>([]);
    const navigate = useNavigate();
    // useEffect untuk section Sertifikat
    useEffect(() => {
        const dataGambar = data[0]?.Sertifikat || [];
        setGambar(dataGambar);
    }, [])
    const handleAchievment = () => {
        navigate("/achievment");
    }
    return (
        <section>
            <div className="relative bg-cover bg-center h-auto opacity-black-2 w-full overflow-hidden" >
                <div className="bg-gradient-to-br from-black  to-blue-300 pb-10 mr-10 ml-10 rounded-lg">

                    <div className='card-container mt-16 gap-20 pt-20 h-auto'>
                        <div className='w-full flex justify-center gap-5 items-center pt-30'>
                            <div className="w-1/5">
                                <hr className='border-t-2 ml-16 border-sky-300' />
                                <hr className='border-t-2 border-sky-300 mt-1' />
                            </div>                        <h1 className='text-center align-middle text-4xl text-sky-300 cursor-pointer hover:shadow-sky-300 overflow-hidden px-16 py-3  transition duration-1000 flex hover:scale-105 gap-5'>
                                My Sertificate
                            </h1>
                            <div className="w-1/5">
                                <hr className='border-t-2 mr-16 border-sky-300' />
                                <hr className='border-t-2 border-sky-300 mt-1' />
                            </div>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="1000" className='flex flex-wrap mt-10 gap-20 pt-20 rounded-lg mx-20 items-center justify-evenly mb-12 pb-12'>
                            {gambar.map((item, index) => (
                                <div key={index} className='data-aos= bg-gradient-to-br from-black  to-gray-400 rounded-md text-white font-bold overflow-hidden  cursor-pointer shadow-gray-800 shadow-md'>
                                    <img src={item.img} alt="" className='h-72 w-96 hover:scale-105 transition duration-1000' />
                                    <div className='text-center h-20 flex items-center justify-center'>
                                        <div>
                                            <h2>{item.title}</h2>
                                            <small className='text-xs  text-gray-300'>from</small>
                                            <p>{item.company}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='bg-gray-700 flex justify-between py-2'>
                                        <small className='text-end pl-2 text-gray-100 '>{item.date}</small>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='justify-center mt-1 flex'>
                        <button onClick={handleAchievment} className='z-20 text-center flex items-center text-xl bg-black gap-3 cursor-pointer text-sky-300 shadow-sky-500 shadow-md border-sky-400 border-2 px-8 pb-2 pt-1 w-100 rounded-lg  transition duration-1000 hover:scale-105'> See More<ArrowRight className='mt-2' /> </button >
                    </div>
                </div>

                <Showcase />


                )
}
                export default Achievment;ś