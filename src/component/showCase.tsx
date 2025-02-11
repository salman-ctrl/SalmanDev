import { useState, useEffect } from "react";
import data from "../data.json"
import { useNavigate } from 'react-router-dom'

interface Sertifikat {
    img: string;
    title: string;
    date: string;
    company: string;
}
const Showcase = () => {
    const [gambar, setGambar] = useState<Sertifikat[]>([]);
    const navigate = useNavigate();


    // useEffect untuk section Sertifikat
    useEffect(() => {
        const dataGambar = data[0]?.Sertifikat || [];
        setGambar(dataGambar);
    }, [])

    return (
        <>
            <section className="bg-gradient-to-br from-black  to-blue-300 mt-20 mx-10 rounded-lg">
                <div className="h-[140vh] w-screen">
                    <div className='w-full flex justify-center gap-5 items-center pt-32'>
                        <div className="w-1/5">
                            <hr className='border-t-2 ml-16 border-sky-300' />
                            <hr className='border-t-2 border-sky-300 mt-1' />
                        </div>                        <h1 className='text-center align-middle text-4xl text-sky-300 cursor-pointer hover:shadow-sky-300 overflow-hidden px-16 py-3  transition duration-1000 flex hover:scale-105 gap-5'>
                            My Project
                        </h1>
                        <div className="w-1/5">
                            <hr className='border-t-2 mr-16 border-sky-300' />
                            <hr className='border-t-2 border-sky-300 mt-1' />
                        </div>
                    </div>
                    <div className='flex flex-wrap mt-10 gap-20 pt-20 rounded-lg mx-10 items-center justify-evenly mb-12 pb-12 pr-16 '>
                        {gambar.map((item, index) => (
                            <div key={index} className='bg-gradient-to-br from-black  to-gray-400 rounded-md text-white font-bold overflow-hidden transition duration-1000 cursor-pointer hover:scale-105 shadow-gray-800 shadow-md'>
                                <img src={item.img} alt="" className='h-72 w-96' />
                                <div className='text-center h-20 flex items-center justify-center'>
                                    <div>
                                        <h2>{item.title}</h2>

                                        <small className='text-xs  text-gray-300'>from</small>
                                        <p>{item.company}</p>
                                    </div>

                                </div>
                                <hr />
                                <div className='bg-gray-700 py-2'>
                                    <small className='text-end pl-2 text-gray-100 '>{item.date}</small>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
            <section>

            </section>
        </>
    )
}

export default Showcase;