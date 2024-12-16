import Logo from '../../assets/logo.svg'
import { ZarrAINames } from '../../contsants'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className='py-10 container'
            data-aos="fade-right"
            data-aos-delay="400"
        >
            <div className=' flex flex-col items-center justify-center '>
                <span className='flex items-center  mb-5'>
                    <img src={Logo} className='h-[30px] w-[50px]  object-contain' alt="" />
                    <h2 className='h4'>Zarrin </h2>
                </span>
                <ul className='flex items-center gap-10'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
                <ul className='flex items-center gap-5 pt-10'>

                    {ZarrAINames.map((item, index) => (
                        <li key={index} className='bg-primary_color_1 text-while-900_03 h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                            <a href="" className=''>{item}</a></li>
                    ))}


                </ul>


            </div>

            <div className='flex items-center justify-center mt-10 h-[1px] bg-slate-400 ' />

            <p className='text-center my-2 text-sm'>Copyright Ideapeel Inc © {year}. All Right Reserved</p>

        </div>
    )
}

export default Footer