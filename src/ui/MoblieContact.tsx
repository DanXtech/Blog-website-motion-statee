
const MoblieContact = () => {
    return (
        <section className='block lg:hidden'>
            <div className='container mb-32 flex flex-col gap-3 rounded-[20px]'>
                <form>
                    <h1 className='h4 font-semibold mb-2 capitalize'>Contact Us </h1>
                    <div className='flex flex-col gap-2'>
                        <div className='w-full mb-2'>
                            <label htmlFor="">Name</label>
                            <input type="text" className=' w-full border-2 p-3 outline-none rounded-[10px] border-slate-400' />
                        </div>
                        <div className='w-full mb-2'>
                            <label htmlFor="">Email</label>
                            <input type="text" className='w-full border-2 p-3 outline-none rounded-[10px] border-slate-400' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='w-full mb-2'>
                            <label htmlFor="">Phone</label>
                            <input type="text" className=' w-full border-2 p-3 outline-none rounded-[10px] border-slate-400' />
                        </div>
                        <div className='w-full mb-2'>
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
        </section>
    )
}

export default MoblieContact