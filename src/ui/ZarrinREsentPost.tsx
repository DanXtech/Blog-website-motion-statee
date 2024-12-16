import { ResentPost } from "../contsants"
import ReadMoreBanner from "../assets/ReadMoreBanner.svg"
import PostCardSection from "./PostCardSection"
import { Link } from "react-router-dom"
// import PostCardSection from "../components/"
const ZarrinREsentPost = () => {
    return (
        <div className="py-20">
            <div className="container" >
                <div className="flex items-center justify-between "
                    data-aos="fade-right"
                    data-aos-delay="400"
                >
                    <h1 className="h5 lg:h2  font-semibold ">Our Recent Post</h1>
                    <button className='text-center lg:mt-5 py-1 lg:py-3 border-2 rounded-[10px] w-[100px] lg:w-[150px] border-blue-600 hover:bg-primary_color_1 hover:text-while-900_03  transition-colors '>View All</button>
                </div>
                <div className=" flex items-center flex-col lg:flex-row gap-12 lg:gap-10 mt-10">
                    <div className="lg:w-[50%] w-full"
                        data-aos="fade-bottom"
                        data-aos-delay="400"
                    >
                        <img src={ReadMoreBanner} className="w-full" alt="" />
                    </div>
                    <div className="lg:w-[50%]"
                        data-aos="fade-right"
                        data-aos-delay="500"
                    >
                        {ResentPost.map((item, index) => (
                            <div key={index}>
                                <div className="flex gap-5">
                                    <h6>{item.MinText}</h6>
                                    <h6 className='text-gray-500'>{item.DateBlogInfo}</h6>
                                </div>
                                <h6 className='h5 lg:h4 font-semibold '>{item.TitleBlogs}</h6>
                                <p className='mt-2  '>{item.TextBlogs}</p>

                                <button className='text-center mt-5 lg:mt-5 py-2 lg:py-3 border-2 rounded-[10px] w-[150px] border-blue-600 hover:bg-primary_color_1 hover:text-while-900_03  transition-colors'>
                                    <Link to={"/subBlog"}>Read More</Link>
                                </button>
                            </div>

                        ))}
                        {/* <button className='text-center mt-5 mb-10 py-2 lg:py-3 border-2 rounded-[10px] w-full lg:w-[150px] border-blue-600 hover:bg-primary_color_1 hover:text-while-900_03  transition-colors block lg:hidden'>View All</button> */}
                    </div>


                </div>

                {/* post information */}
                <PostCardSection />

            </div>
        </div>
    )
}

export default ZarrinREsentPost