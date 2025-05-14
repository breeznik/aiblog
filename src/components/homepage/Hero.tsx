import { container } from "../../utils/constants"

const Hero = () => {
    return (
        <div className={``}>
            <div className={`flex flex-wrap`}>
                <div className={`flex flex-col w-full max-w-[757px] cs-2xl:max-w-[943px] border-cs-dark-400 border-r`}>
                    <div className={`${container} pb-7.5 pt-10 cs-xl:pb-16 cs-xl:pt-[100px] cs-2xl:pb-[100px] cs-2xl:pt-36.5`}>
                        <div className="subheading pb-3.5 cs-xl:pb-5 cs-2xl:pb-7.5 text-cs-dark-50 font-medium font-kumbh text-lg cs-xl:text-[20px] cs-2xl:text-3xl">Your Journey to Tomorrow Begins Here</div>
                        <div className="font-medium pb-5 tracking-[-3%] leading-[1.2] text-[30px] cs-xl:text-[55px] cs-2xl:text-[70px] font-kumbh">Explore the Frontiers of Artificial Intelligence</div>
                        <div className="description text-cs-light-700 text-sm">Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</div>
                    </div>
                    <div className={` ${container} border-y border-cs-dark-400 flex`}>
                        <div className="py-5 cs-xl:py-7.5 cs-2xl:py-12.5 flex-1/3 border-cs-dark-400 border-r">
                            <div className="font-semibold text-2xl cs-xl:text-3xl cs-2xl:text-[40px]">300<span className="text-cs-yellow-700">+</span></div>
                            <div className="text-cs-light-600 text-sm cs-2xl:text-lg">Resources available</div></div>
                        <div className="px-5 cs-xl:px-10 cs-2xl:px-12.5 py-5 cs-xl:py-7.5 cs-2xl:py-12.5 flex-1/3 border-cs-dark-400 border-r">
                            <div className="font-semibold text-2xl cs-xl:text-3xl cs-2xl:text-[40px]">12K<span className="text-cs-yellow-700">+</span></div>
                            <div className="text-cs-light-600 text-sm cs-2xl:text-lg">Total Downloads</div></div>
                        <div className="ps-5 cs-xl:ps-10 cs-2xl:ps-12.5 py-5 cs-xl:py-7.5 cs-2xl:py-12.5 flex-1/3">
                            <div className="font-semibold text-2xl cs-xl:text-3xl cs-2xl:text-[40px]">10K<span className="text-cs-yellow-700">+</span></div>
                            <div className="text-cs-light-600 text-sm cs-2xl:text-lg">Active Users</div></div>
                    </div>
                </div>
                <div className="right border flex-auto">test</div>
            </div>
        </div>
    )
}

export default Hero