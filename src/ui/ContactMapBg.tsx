import MapBg from '../assets/mapbg.svg'


const ContactMapBg = () => {
    return (
        <section className='relative lg:mb-40  lg:h-[600px] hidden lg:block '>
            <div className='relative bg-cover bg-no-repeat bg-center  h-[500px] ' style={{ backgroundImage: `url(${MapBg})` }}
                data-aos="fade-bottom"
                data-aos-delay="400"
            >
                <div className='absolute  right-0 left-0  lg:top-32 flex items-center justify-center'>
                    <div className=' bg-white lg:w-[60%] lg:mb-12  shadow p-10 flex flex-col gap-3 rounded-[20px]'>
                        <form>
                            <div className='flex items-center justify-center flex-row gap-5 w-full lg:mb-5'>
                                <div className='w-full'>
                                    <label htmlFor="">Name</label>
                                    <input type="text" className=' w-full border-2 p-3 outline-none rounded-[10px] border-slate-400' />
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="">Email</label>
                                    <input type="text" className='w-full border-2 p-3 outline-none rounded-[10px] border-slate-400' />
                                </div>
                            </div>
                            <div className='flex items-center justify-center flex-row gap-3 w-full lg:mb-5'>
                                <div className='w-full'>
                                    <label htmlFor="">Phone</label>
                                    <input type="text" className=' w-full border-2 p-3 outline-none rounded-[10px] border-slate-400' />
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="">Subject</label>
                                    <input type="text" className='w-full border-2 p-3 outline-none rounded-[10px] border-slate-400' />
                                </div>
                            </div>

                            <textarea name="" id="" className='mt-5 w-full border-2 p-3 outline-none rounded-[10px] border-slate-400 h-[200px] resize-none'></textarea>
                            <div className='flex items-center justify-center'>
                                <button className=' w-full text-center  font-semibold bg-primary_color_1 py-3 px-10 text-while-900_03 shadow rounded-[10px] lg:w-[250px] '>Submit Message</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div >


        </section>
    )
}

export default ContactMapBg