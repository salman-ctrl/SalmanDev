import { useEffect, useState } from 'react'

import data from "../data.json"

interface Skill {
    img: string;
}


const Skill = () => {

    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        const skillData = data[0]?.Skill || [];
        setSkills(skillData);
    }, [])
    return (
        <section className='h-auto w-screen -mt-10 pt-10 overflow-hidden'>
            <div className=' ml-10 mr-10 pb-20 shadow-lg'>
                <div className='w-full flex justify-center pt-20'>
                    <h1 className='text-center align-middle text-4xl border-2 border-gray-600 hover:border-sky-300 hover:shadow-sky-300 hover:shadow-sm rounded-full  cursor-pointer text-sky-300 px-16 py-3 w-100 rounded-lg  transition duration-1000 hover:scale-105'>My Skill</h1>
                </div>
                <div className='flex gap-12 py-5 z-20 animate-marquee overflow-hidden mt-20 pb-20'>
                    {skills.map((item, index) => (
                        <div key={index} className='flex-shrink-0 '>
                            <img src={item.img} alt={`Skill ${index}`} className='w-20 h-20 skill' />
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )


}


export default Skill;
