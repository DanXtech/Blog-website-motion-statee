import ReadMoreBanner from '../assets/AIReadMoreBanner.svg'
import { ZinReadMore } from '../contsants'

const ZarrinMidSection = () => {
    return (
        <div className='py-10 lg:py-20 '>
            <div className='flex items-center justify-center container'
                data-aos="fade-right"
                data-aos-delay="400"
            >
                <div className='relative   w-full  bg-cover bg-center  h-[550px] lg:h-[500px]  transition-colors' style={{ backgroundImage: `url(${ReadMoreBanner})` }}>
                    <div className='absolute bottom-0 lg:-bottom-20 lg:right-0 mt-10 bg-while-900_03 shadow lg:w-[80%] lg:rounded-2xl lg:p-7 p-3 pb-4'>
                        {ZinReadMore.map((item, index) => (
                            <div key={index} className='flex flex-col'>
                                <div className='flex  gap-3  font-semibold  lg:h6 mb-2 '>
                                    <h6>{item.MinText}</h6>
                                    <h6 className='text-gray-500'>{item.DateBlogInfo}</h6>
                                </div>
                                <div className=''>
                                    <h6 className='h5 lg:h3 font-semibold lg:mt-2'>{item.TitleBlogs}</h6>
                                    <p className='mb-3 mt-2 lg:mt-0 text-sm lg:text-lg'>{item.TextBlogs}</p>
                                </div>

                                <button className='text-center  lg:mt-5 py-2 lg:py-3 border-2 rounded-[10px] w-[150px] border-blue-600 hover:bg-primary_color_1 hover:text-while-900_03  transition-colors'>Read More</button>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ZarrinMidSection