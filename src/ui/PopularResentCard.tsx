import { PopularPostCard } from '../contsants'

const PopularResentCard = () => {
    return (
        <div className='mt-10 lg:mt-12'>
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-3'>
                {PopularPostCard.map((item, index) => (
                    <div key={index} className='w-full rounded-[20px] bg-while-900_03 shadow '
                        data-aos="fade-right"
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
    )
}

export default PopularResentCard