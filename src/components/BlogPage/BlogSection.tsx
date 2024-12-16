import { AllblogCardSection } from "../../contsants"
import Getourstories1 from "../../assets/Get our stories deli1.svg"

const BlogSection = () => {
    return (
        <section>
            <div className='container lg:mb-20  lg:pt-20 pt-20'>
                <h1 className='text-center h6  font-semibold mt-10 lg:mt-20 text-slate-500'
                    data-aos="fade-right"
                    data-aos-delay="400"
                >Our Blogs</h1>
                <div className='flex items-center flex-col'
                    data-aos="fade-right"
                    data-aos-delay="400"
                >
                    <h2 className='h2 font-semibold mt-5 lg:w-[70%] text-center text-slate-700'>Find our all blogs from here</h2>
                    <p className='text-lg text-slate-500 text-center pt-5'>our blogs are written from very research research and well known
                        writers writers so that  we can provide you the best blogs and articles articles for you to read them all along</p>
                </div>
                <div className='mt-10 mb-10 lg:mt-12'>
                    <div className='w-full   grid grid-cols-1 lg:grid-cols-3   gap-5 lg:gap-3'>
                        {AllblogCardSection.map((item, index) => (
                            <div key={index} className='w-full  rounded-[20px] bg-while-900_03 shadow'
                                data-aos="fade-bottom"
                                data-aos-delay="400"
                            >
                                <img src={item.PostImg} className='w-full object-fill rounded-t-[20px]' alt="" />
                                <div className='mt-3 lg:mt-5 px-2'>
                                    <div className="flex gap-5">
                                        <h6>{item.MinText}</h6>
                                        <h6 className='text-gray-500'>{item.DateBlogInfo}</h6>
                                    </div>
                                    <h6 className='h5 lg:h4 font-semibold '>{item.TitlePost}</h6>
                                    <p className='mt-2 pr-3 '>{item.PostBlogs}</p>

                                    <button className='rounded-[10px] my-5  font-semibold text-primary_color_1 underline  hover:text-black-900_02  transition-colors'>Read More</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className='relative bg-primary_color_1 py-20 '

                data-aos="fade-bottom"
                data-aos-delay="400"
            >
                <div className=' container flex items-center flex-col justify-center'>
                    <h1 className='h1 text-center text-while-900_03 lg:w-[75%]'>
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

export default BlogSection