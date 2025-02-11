import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../component/Navbar';
import data from "../data.json";

interface Sertifikat {
    img: string;
    title: string;
    date: string;
    company: string;
    tags?: string;
}

const Achievment = () => {
    const [gambar, setGambar] = useState<Sertifikat[]>([]);
    const [activeTag, setActiveTag] = useState("all");
    const allTags = ["javascript", "css", "all", "other", "html"];

    useEffect(() => {
        const dataGambar = data[0]?.Sertifikat || [];
        setGambar(dataGambar);
    }, []);

    const buttonHtml = (tag: string) => {
        setActiveTag(tag);
    };

    const filteredData = useMemo(() => {
        if (activeTag === "all") return gambar;
        return gambar.filter((item) => item.tags && item.tags === activeTag);
    }, [gambar, activeTag]);

    const totalItem = gambar.length;
    return (
        <div className="relative bg-cover bg-center h-auto opacity-black-2 w-full overflow-hidden bg-gradient-to-br from-black to-gray-700">
            <Navbar />
            <div className='mt-20 gap-20 pt-10 h-auto'>
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
                <h1 className='w-full text-center text-sky-500 text-lg'> Total Sertifikat : {totalItem}</h1>
                <div className='flex justify-center gap-4 mt-10'>
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            className={`px-4 py-2 rounded hover:bg-sky-400 ${activeTag === tag ? "bg-sky-500 text-white" : "bg-sky-300 text-black"}`}
                            onClick={() => buttonHtml(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <div className='flex flex-wrap mt-20 gap-20 pt-10 rounded-lg mx-20 items-center justify-evenly mb-12 pb-12'>
                    {filteredData.map((item, index) => (
                        <div key={index} className='bg-gradient-to-br from-black to-blue-200 rounded-md text-white font-bold overflow-hidden shadow-4xl'>
                            <img src={item.img} alt="" className='h-60 w-60' />
                            <div className='text-center'>
                                <h2>{item.title}</h2>
                                <small className='text-xs text-gray-700'>from</small>
                                <p>{item.company}</p>
                            </div>
                            <hr />
                            <small className='text-end pl-2 text-gray-100'>{item.date}</small>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievment;
