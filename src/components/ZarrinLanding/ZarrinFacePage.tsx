
import zarrinlandingLogoImage from '../../assets/zarrinlandingLogoImage.svg'
import Mask1 from '../../assets/Mask group.svg'
import ZarrinMidSection from '../../ui/ZarrinMidSection'
import ZarrinREsentPost from '../../ui/ZarrinREsentPost'
import PopularPost from '../../ui/PopularResent'
import SubcribeSection from '../../ui/SubcribeSection'

const ZarrinFacePage = () => {
    return (
        <section>
            <div className=" relative content-center bg-primary_color_1 h-full mb-12 lg:mb-0  lg:pt-20 pt-20">
                <img src={Mask1} className='absolute top-0 left-0 w-[600px] lg:w-[500px]' alt="" />
                <h1 className='h6 absolute top-[190px]  left-[65px] text-right text-while-900_03 hidden lg:block '
                    data-aos="fade-right"
                    data-aos-delay="400"
                >Featured Post</h1>
                <div className='container relative  flex items-center justify-center   py-[56px] lg:py-5 lg:mt-20 lg:mb-20'>
                    <div className='flex items-center lg:flex-row flex-col justify-center gap-[50px] lg:gap-[80px]'>
                        <div className='w-full lg:w-[50%] '
                            data-aos="fade-right"
                            data-aos-delay="400"
                        >
                            <h1 className='h6 text-while-900_03  block lg:hidden'>Featured Post</h1>
                            <h1 className='h5 lg:h1 font-semibold text-while-900_03 lg:mt-12 '>How AI will  <br className='hidden lg:block' />Change the Future</h1>
                            <p className='font-extralight text-lg text-blue_gray-100  lg:leading-[34px] lg:mt-10'>The future of AI will see home robots having enhanced  intelligence, increased capabilities, and becoming more  personal and possibly cute. For example, home robots will overcome navigation, direction</p>

                            <button className='text-center mt-5 py-3 border-2 rounded-[10px] w-[150px] border-while-900_03 bg-while-900_03 hover:bg-transparent hover:text-while-900_03  transition-colors'>Read More</button>
                        </div>
                        <div className='w-full lg:w-[50%] lg:mt-10'
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <img src={zarrinlandingLogoImage} className='w-full  rounded-3xl shadow' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className=''>
                <ZarrinMidSection />
                <ZarrinREsentPost />
                <PopularPost />
                <SubcribeSection />
            </div>
        </section>
    )
}

export default ZarrinFacePage