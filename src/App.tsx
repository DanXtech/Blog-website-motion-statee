import AOS from "aos";
import "aos/dist/aos.css"


import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { useEffect } from "react";
function App() {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        })
        AOS.refresh()

        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [])



    return (
        <div className="w-full bg-gray-50_01 ">
            <div>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default App

{/* <ZarrinFacePage /> */ }
