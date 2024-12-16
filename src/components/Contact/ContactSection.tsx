
import { ContactInfoBox } from '../../contsants'
import ContactMapBg from '../../ui/ContactMapBg'
import SubcribeSection from '../../ui/SubcribeSection'
import MoblieContact from '../../ui/MoblieContact'


const ContactSection = () => {
    return (
        <section className=''>
            <div className='container lg:mb-20  lg:pt-20 pt-20 '>
                <div className='flex flex-col items-center justify-center mt-10 lg:mt-20'
                    data-aos="fade-right"
                    data-aos-delay="400"
                >
                    <h1 className='h2'>Get in Touch</h1>
                    <p className='lg:w-[50%] text-center mt-3'>Contact us to publish your content and show ads to our website and get a good reach.</p>
                </div>

                <div className='flex items-center flex-col lg:flex-row justify-center gap-5 mt-10 mb-16 lg:mb-20 '>

                    {ContactInfoBox.map((item, index) => (
                        <div className='w-full lg:w-[350px] bg-white  shadow rounded-2xl  flex justify-center py-12 px-5'
                            data-aos="fade-right"
                            data-aos-delay="500"
                            key={index}>
                            <div className='flex flex-col items-center'>
                                <img src={item.IconImg} className='bg-primary_color_1 w-12 h-12 p-2 rounded-[10px] ' alt="" />
                                <div className='text-center'>
                                    <h2 className='h6 mt-5'>{item.IconTitle}</h2>
                                    <p className='h6 mt-5'>{item.DecInfo}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div>
                <ContactMapBg />
                <MoblieContact />
                <SubcribeSection />
            </div>
        </section>
    )
}

export default ContactSection

