import AboutCard from "./AboutCard"


const AboutSubSection = () => {
    return (
        <div className="mt-20">
            <h1 className="h6 font-semibold uppercase lg:bg-transparent lg:border-none lg:text-black-900_02 text-while-900_03 lg:px-0 px-2 bg-primary_color_1 border-2 border-while-900_03 w-[150px] "
                data-aos="fade-right"
                data-aos-delay="400"
            > How it work</h1>
            <div className="flex items-center lg:flex-row flex-col lg:items-end my-6 lg:my-10 "
                data-aos="fade-right"
                data-aos-delay="400"
            >
                <div className="w-full lg:w-[50%]">
                    <h2 className="h2 font-semibold pb-3 lg:pb-0">I will show you how <br className="hidden lg:block" /> our team works</h2>
                </div>
                <p className="text-lg w-full lg:w-[40%] text-blue_gray-600_bf">Bring to the table win-win market strategies to ensure perfect articles.</p>
            </div>
            <AboutCard />

        </div>
    )
}

export default AboutSubSection