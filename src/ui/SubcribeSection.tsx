
import Getourstories1 from '../assets/Get our stories deli1.svg'


const SubcribeSection = () => {
    return (
        <div className='relative bg-primary_color_1 py-20  '
            data-aos="fade-bottom"
            data-aos-delay="400"
        >
            <div className=' container flex items-center flex-col justify-center '>
                <h1 className='h2 lg:h1 text-center font-semibold text-while-900_03 lg:w-[75%]'>
                    Get our stories delivered From us to your inbox weekly.
                </h1>
                <div className='flex items-center justify-center  flex-wrap gap-2 mt-5 w-full'>
                    <input type="email" placeholder='Your Email' className='outline-none bg-while-900_03 w-full lg:w-[300px] h-[50px] px-2 rounded-2xl' />
                    <button className='w-full lg:w-[150px] border h-[50px] bg-transparent text-while-900_03 rounded-2xl'>Get Started</button>
                </div>
                <p className='text-blue_gray-100 lg:w-[45%] text-center mt-5'>Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>
                <img src={Getourstories1} className='absolute -top-36 left-0 w-[400px]' alt="" />
                {/* <img src={Getourstories2} className='absolute -bottom-36 right-0  w-[400px]' alt="" /> */}
            </div>

        </div>
    )
}

export default SubcribeSection