
import { MaxBlogText, ResentPost } from '../../contsants'
import ReadMoreBanner from '../../assets/AIReadMoreBanner.svg'
import SubSignSection from '../../ui/SubSignSection'
const SigleInfoSection = () => {
    return (
        <section>
            <div className='container lg:mb-20 lg:pt-20 pt-20'>
                <div className='fiex items-start mt-20 mb-10  lg:px-12'>
                    {ResentPost.map((item, index) => (
                        <div key={index}>
                            <div className="flex gap-5 lg:mb-5">
                                <h6>{item.MinText}</h6>
                                <h6 className='text-gray-500'>{item.DateBlogInfo}</h6>
                            </div>
                            <h6 className='h5 lg:h2 font-semibold w-full  '>{item.TitleBlogs}</h6>
                        </div>

                    ))}
                </div>

                <div className=' w-full  bg-cover bg-center  h-[500px] rounded-2xl' style={{ backgroundImage: `url(${ReadMoreBanner})` }} />

                <div className='mt-10 flex items-center justify-center flex-col'>
                    {MaxBlogText.map((item, index) => (
                        <div className='flex flex-col w-[95%]' key={index}>
                            <p >{item.MaxBlogText1}</p>
                            <p className='mt-5' >{item.MaxBlogText2}</p>
                        </div>
                    ))}
                </div>


            </div>
            <SubSignSection />
        </section>
    )
}

export default SigleInfoSection