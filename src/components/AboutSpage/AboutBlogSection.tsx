import AboutBanner from '../../assets/AboutBanner.jpg'
import AboutSubSection from '../../ui/AboutSubSection'
import Getourstories1 from '../../assets/Get our stories deli1.svg'

const AboutBlogSection = () => {
    return (
        <section>
            <div className='container lg:mb-20 lg:pt-20 pt-20'>
                <h1 className='text-center h6  font-semibold mt-10 lg:mt-20 text-slate-500'
                    data-aos="fade-right"
                    data-aos-delay="400"
                >ABOUT US</h1>
                <div className='flex items-center flex-col'
                    data-aos="fade-bottom"
                    data-aos-delay="400"
                >
                    <h2 className='h2 font-semibold mt-5 lg:w-[70%] text-center text-slate-700'>Creative Blog Writting and publishing site</h2>
                    <p className='text-lg text-slate-500 text-center pt-5'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster
                        collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                    <img src={AboutBanner} className=' w-full h-auto object-contain mt-10 lg:mt-16 rounded-2xl ' alt="" />
                </div>
                <AboutSubSection />
            </div>
            <div className='relative  bg-primary_color_1 py-20  lg:mt-32'
                data-aos="fade-bottom"
                data-aos-delay="400"
            >
                <div className=' container flex items-center flex-col justify-center'>
                    <h1 className='h1 text-center text-while-900_03 lg:w-[70%]'>
                        Get our stories delivered From us to your inbox weekly.
                    </h1>
                    <div className='flex items-center justify-center  flex-wrap gap-2 mt-5 w-full'>
                        <input type="email" placeholder='Your Email' className='outline-none bg-while-900_03 w-full lg:w-[300px] h-[50px] px-2 rounded-2xl' />
                        <button className='w-full lg:w-[150px] border h-[50px] bg-transparent text-while-900_03 rounded-2xl'>Get Started</button>
                    </div>
                    <p className='text-gray-400_b2 lg:w-[45%] text-center mt-5'>Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>
                    <img src={Getourstories1} className='absolute -top-36 left-0 w-[400px]' alt="" />
                    {/* <img src={Getourstories2} className='absolute -bottom-36 right-0  w-[400px]' alt="" /> */}
                </div>

            </div>
        </section>
    )
}

export default AboutBlogSection