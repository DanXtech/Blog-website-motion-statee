
import PopularResentCard from "./PopularResentCard"
const PopularPost = () => {
    return (
        <div className="lg:py-20 py-10">
            <div className="container">
                <div className="flex items-center justify-between "
                    data-aos="fade-right"
                    data-aos-delay="400"
                >
                    <h1 className="h5 lg:h2  font-semibold">Popular Post</h1>
                    <button className='text-center lg:mt-5 py-1 lg:py-3 border-2 rounded-[10px] w-[100px] lg:w-[150px] border-blue-600 hover:bg-primary_color_1 hover:text-while-900_03  transition-colors'>View All</button>
                </div>

                {/* post information */}
                <PopularResentCard />

            </div>
        </div>
    )
}

export default PopularPost