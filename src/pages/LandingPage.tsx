import Skill from '../component/Skill'
import About from '../component/about'
import Hero from '../component/Hero'
import Showcase from '../component/showCase'
import Achievement from '../component/Achievement'
import Footer from '../component/Footer'




const LandingPage = () => {
    return (
        <div className='overflow-hidden  bg-gradient-to-br from-black  to-gray-700 '>
            <section className='h-auto'>
                <div className="relative bg-cover bg-center h-screen opacity-black-2 w-full overflow-hidden" style={{ backgroundImage: 'url(/assets/background.jpg)' }}>

                    <Hero />
                </div>
            </section>
            <About />
            <Skill />
            <Showcase />
            <Achievement />
            <Footer />
        </div>
    )
}

export default LandingPage;
