
import { AboutCardBlog } from '../contsants'

const AboutCard = () => {
    return (
        <div className='flex items-center lg:flex-row flex-col gap-5 mb-32 lg:mb-5 '>
            {AboutCardBlog.map((item, index) => (
                <div key={index} className='bg-primary_color_1 px-5 py-5 text-while-900_03 rounded-[30px]'
                    data-aos="fade-bottom"
                    data-aos-delay="400"
                >
                    <h2 className='h2 pb-3'>{item.num}</h2>
                    <h3 className='h5 lg:h4 pb-2 lg:pb-5  '>{item.AboutCardText}</h3>
                    <p className='text-sm lg:text-lg'>{item.AboutTextInfo}</p>
                    <button className=' my-3 lg:my-5  font-semibold text-while-900_03   hover:text-black-900_02  transition-colors border-b-4 border-while-900_03'>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default AboutCard


// num: "01",
// AboutCardText: "Brainstorming",
// AboutTextInfo: