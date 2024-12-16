
import { MaxBlogAIText, MaxBlogText2 } from '../contsants'
import AITeachnologyImg from '../assets/AITeachnology.svg'
import PostCardSection from './PostCardSection'
import SubcribeSection from './SubcribeSection'

const SubSignSection = () => {
    return (
        <section>
            <div className='container'>
                <div className='flex items-center justify-center flex-col py-10 '>
                    <div className=' w-[90%]'>
                        <p className='border-l-4 px-4 my-10 h5 text-stone-600'>“People worry that computers will get too smart and take over the world, but the real problem is that they’re too stupid and they’ve already taken over the world.”</p>
                    </div>
                    {MaxBlogText2.map((item, index) => (
                        <p key={index} className='mt-5 w-[95%]'>{item.MaxBlogText1}</p>
                    ))}


                </div>
                <div className='flex flex-col items-center justify-center '>
                    <img src={AITeachnologyImg} className='w-[80%] rounded-2xl' alt="" />
                    {MaxBlogAIText.map((item, index) => (
                        <p key={index} className='mt-5 w-[95%]'>{item.MaxBlogAIText1}</p>
                    ))}

                </div>

                <div className='mb-20'>
                    <div className="flex items-center justify-between mt-10 lg:mt-16">
                        <h1 className="text-center h5 lg:h2   font-semibold ">Popular Post</h1>
                        <button className='text-center  py-1  border-2 rounded-[10px] w-[100px] mt-5  lg:w-[150px] border-blue-600 bg-primary_color_1 text-while-900_03 hover:bg-transparent hover:text-black-900_02  transition-colors'>View All</button>
                    </div>
                    <PostCardSection />
                </div>
            </div>
            <SubcribeSection />
        </section>
    )
}

export default SubSignSection