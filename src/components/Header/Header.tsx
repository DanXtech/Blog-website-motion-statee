import { useState } from "react"
import Logo from "../../assets/logo.svg"
import Search from "../../assets/search.svg"
import { Link } from 'react-router-dom'
import { FaBarsStaggered, FaXmark } from "react-icons/fa6"
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
    const [isopen, setIsOpen] = useState(false)

    const handleMenuBar = () => {
        setIsOpen(!isopen)
    }

    const onCloseHandle = () => {
        setIsOpen(false)
    }
    return (
        <section className="shadow-md  w-full fixed top-0 left-0  z-50 ">
            <nav className='flex item-center justify-center bg-while-900_03 py-5 '>
                <div className='container mx-auto flex items-center justify-between  gap-5'>
                    <Link to={"/"}><img src={Logo} className='h-[42px] w-[50px]  object-contain' alt="" /></Link>
                    <div className=' flex  items-center justify-between gap-5'>
                        <ul className='hidden md:flex flex-wrap gap-[58px] '>
                            <li>

                                <Link className='!font-semibold !text-secondary_color_2 hover:!text-primary_color_1 ' to={"/"}>Home</Link>
                            </li>
                            <li>

                                <Link className='!font-semibold !text-secondary_color_2 hover:!text-primary_color_1' to={"/blog"}>Blogs</Link>
                            </li>
                            <li>

                                <Link className='!font-semibold !text-secondary_color_2 hover:!text-primary_color_1' to={"/about"}>About Us</Link>
                            </li>
                            <li><a href="" >
                                <img src={Search} className='h-[22px] w-[22px]' alt="" />

                            </a></li>


                            <li>   <a href="" className=' font-semibold bg-primary_color_1 py-3 px-10 text-while-900_03 shadow rounded-2xl'>
                                <Link to={"/contact"}>Contact</Link>
                            </a>
                            </li>
                        </ul>






                    </div>

                    <div className="md:hidden block">
                        <button onClick={() => handleMenuBar()}>
                            {
                                isopen ? <FaXmark className="w-5 h-5 text-black-900_02" /> : <FaBarsStaggered className="w-5 h-5 text-black-900_02" />
                            }
                        </button>
                    </div>
                </div>
            </nav>



            {/* Moblie Menu */}
            <div className={`px-5 bg-slate-100 py-10 w-full ${isopen ? "w-full" : "hidden"}`}>
                <AnimatePresence>
                    <motion.ul
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3 }}
                        className='flex flex-col gap-[40px] '>
                        <li>

                            <Link onClick={onCloseHandle} className='!font-semibold !text-secondary_color_2 hover:!text-primary_color_1' to={"/"}>Home</Link>
                        </li>
                        <li>

                            <Link onClick={onCloseHandle} className='!font-semibold !text-secondary_color_2 hover:!text-primary_color_1' to={"/blog"}>Blogs</Link>
                        </li>
                        <li>

                            <Link onClick={onCloseHandle} className='!font-semibold !text-secondary_color_2 hover:!text-primary_color_1' to={"/about"}>About Us</Link>
                        </li>
                        <li><a href="" >
                            <img onClick={onCloseHandle} src={Search} className='h-[22px] w-[22px]' alt="" />

                        </a></li>


                        <li>   <a href="" className=' font-semibold bg-primary_color_1 py-3 px-10 text-while-900_03 shadow rounded-2xl'>
                            <Link onClick={onCloseHandle} to={"/contact"}>Contact</Link>
                        </a>
                        </li>
                    </motion.ul>
                </AnimatePresence>

            </div>
        </section>



    )
}

export default Header

