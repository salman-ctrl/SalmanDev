import Navbar from '../component/Navbar'
import Skill from '../component/Skill'
import About from '../component/about'
import Hero from '../component/Hero'
import Achievment from '../component/Achievment'



const LandingPage = () => {


    return (
        <div className='overflow-hidden  bg-gradient-to-br from-black  to-gray-700 pb-20'>
            <section className='h-auto'>
                <div className="relative bg-cover bg-center h-screen opacity-black-2 w-full overflow-hidden" style={{ backgroundImage: 'url(/assets/background.jpg)' }}>
                    <Navbar />
                    <Hero />
                </div>
            </section>
            <About />
            <Skill />
        </div>
    )
}

export default LandingPage;
