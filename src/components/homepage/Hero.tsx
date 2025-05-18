import { container } from "../../utils/constants";
import person1 from "@/assets/media/images/person.png";
import person2 from "@/assets/media/images/person-4.png";
import person3 from "@/assets/media/images/person-2.png";
import person4 from "@/assets/media/images/person-3.png";
import arrow_away from "@/assets/media/svg/arrow_away.svg";
import arrow_button from "@/assets/media/svg/arrow_button.svg";
import contro_icon from "@/assets/media/svg/contro-icon.svg";
import leadership_icon from "@/assets/media/svg/leadership-icon.svg";
import news_icon from "@/assets/media/svg/news-icon.svg";
const Hero = () => {
  return (
    <div className={``}>
      <div className={`flex  max-lg:flex-col`}>
        <div
          className={`flex flex-col flex-1/2 border-cs-dark-400 border-r`}
        >
          <div
            className={`${container} pb-7.5 pt-10 cs-xl:pb-16 cs-xl:pt-[100px] cs-2xl:pb-[100px] cs-2xl:pt-36.5`}
          >
            <div className="subheading pb-3.5 cs-xl:pb-5 cs-2xl:pb-7.5 text-cs-dark-50 font-medium font-kumbh text-lg cs-xl:text-[20px] cs-2xl:text-3xl">
              Your Journey to Tomorrow Begins Here
            </div>
            <div className="font-medium pb-5 tracking-[-3%] leading-[1.2] text-[30px] cs-xl:text-[55px] font-kumbh">
              Explore the Frontiers of Artificial Intelligence
            </div>
            <div className="description text-cs-light-700 text-sm">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future. Join us on this visionary expedition into the heart of
              AI.
            </div>
          </div>
          <div className={` ${container} border-y border-cs-dark-400 flex`}>
            <div className="py-5 cs-xl:py-7.5  flex-1/3 border-cs-dark-400 border-r">
              <div className="font-semibold text-2xl cs-xl:text-3xl cs-2xl:text-[40px] cs-2xl:pb-2.5">
                300<span className="text-cs-yellow-700">+</span>
              </div>
              <div className="text-cs-light-600 text-sm cs-2xl:text-lg">
                Resources available
              </div>
            </div>
            <div className="px-5 cs-xl:px-10 cs-2xl:ps-12.5 cs-2xl:pe-0 py-5 cs-xl:py-7.5  flex-1/3 border-cs-dark-400 border-r">
              <div className="font-semibold text-2xl cs-xl:text-3xl cs-2xl:text-[40px] cs-2xl:pb-2.5">
                12K<span className="text-cs-yellow-700">+</span>
              </div>
              <div className="text-cs-light-600 text-sm cs-2xl:text-lg">
                Total Downloads
              </div>
            </div>
            <div className="ps-5 cs-xl:ps-10 cs-2xl:ps-12.5 py-5 cs-xl:py-7.5">
              <div className="font-semibold text-2xl cs-xl:text-3xl cs-2xl:text-[40px] cs-2xl:pb-2.5">
                10K<span className="text-cs-yellow-700">+</span>
              </div>
              <div className="text-cs-light-600 text-sm cs-2xl:text-lg">
                Active Users
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden relative flex-1/2  flex flex-col justify-end p-10 cs-xl:p-12.5 cs-2xl:p-20 border-b border-cs-dark-400">
          {/* <div className="images size-full">
            <img src={abstract_design} className="max-w-[894px] max-h-[605px] size-full absolute rotate-36 left-[-13%] top-[-5%]" alt="" />
          </div> */}
          <div className="flex w-fit rounded-full bg-cs-dark-600 p-2 cs-2xl:p-2.5 mb-5 cs-2xl:mb-7.5 border border-cs-dark-500">
            <img className="max-w-[40px] cs-xl:max-w-[50px] cs-2xl:max-w-[60px]" src={person1} alt="p" />
            <img className="max-w-[40px] cs-xl:max-w-[50px] cs-2xl:max-w-[60px] -ml-3.5" src={person2} alt="p" />
            <img className="max-w-[40px] cs-xl:max-w-[50px] cs-2xl:max-w-[60px] -ml-3.5" src={person3} alt="p" />
            <img className="max-w-[40px] cs-xl:max-w-[50px] cs-2xl:max-w-[60px] -ml-3.5" src={person4} alt="p" />
          </div>
          <div className="text mb-5 cs-2xl:p-2.5 ">
            <div className="heading mb-3.5 text-lg cs-xl:text-[20px] cs-2xl:text-2xl">Explore 1000+ resources</div>
            <div className="subtext text-cs-light-600 max-cs-xl:text-sm  cs-2xl:text-lg">Over 1,000 articles on emerging tech trends and breakthroughs.</div>
          </div>
          <div className="button border border-cs-dark-500 text-cs-light-600 rounded-xl flex max-lg:max-w-[310px] max-w-fit text-nowrap  gap-1 cs-2xl:gap-2.5 px-5 py-3.5 cs-2xl:px-6 cs-2xl:py-4.5 cursor-pointer justify-center">
            <span className="text-sm cs-2xl:text-lg">Explore Resources</span>
            <img src={arrow_away} alt="->" />
          </div>
        </div>
      </div>
      <div className={`${container} flex lg:gap-20 border-b border-cs-dark-500 max-lg:flex-col`}>
        <div className="flex flex-1/3 flex-col gap-2.5 cs-xl:gap-5 cs-2xl:gap-7.5 py-7.5 cs-xl:py-10 cs-2xl:py-12.5">
          <img  className="max-w-[30px] cs-xl:max-w-[40px] cs-2xl:max-w-[50px]" src={news_icon} alt="icon" />
          <div className="flex gap-5 justify-between">
            <div>
              <div className="cs-xl:text-lg cs-2xl:text-[20px]">Latest News Updates</div>
              <div className=" text-cs-light-600 max-cs-xl:text-sm cs-2xl:text-lg">Stay Current</div>
            </div>
            <img className="max-w-[52px]" src={arrow_button} alt="icon"></img>
          </div>
          <div className=" text-cs-light-600 cs-2xl:text-[20px]">Over 1,000 articles published monthly</div>
        </div>
        <div className="border border-cs-dark-500"></div>
        <div className="flex flex-1/3 flex-col gap-2.5 cs-xl:gap-5 cs-2xl:gap-7.5 py-7.5 cs-xl:py-10 cs-2xl:py-12.5">
          <img  className="max-w-[30px] cs-xl:max-w-[40px] cs-2xl:max-w-[50px]" src={contro_icon} alt="icon" />
          <div className="flex gap-5 justify-between">
            <div>
              <div className="cs-xl:text-lg cs-2xl:text-[20px]">Expert Contributors</div>
              <div className=" text-cs-light-600 max-cs-xl:text-sm cs-2xl:text-lg">Trusted Insights</div>
            </div>
            <img className="max-w-[52px]" src={arrow_button} alt="icon"></img>
          </div>
          <div className=" text-cs-light-600 cs-2xl:text-[20px]">50+ renowned AI experts on our team</div>
        </div>
        <div className="border border-cs-dark-500"></div>
        <div className="flex flex-1/3 flex-col gap-2.5 cs-xl:gap-5 cs-2xl:gap-7.5 py-7.5 cs-xl:py-10 cs-2xl:py-12.5">
          <img  className="max-w-[30px] cs-xl:max-w-[40px] cs-2xl:max-w-[50px]" src={leadership_icon} alt="icon" />
          <div className="flex gap-5 justify-between">
            <div>
              <div className="cs-xl:text-lg cs-2xl:text-[20px]">Global Readership</div>
              <div className=" text-cs-light-600 max-cs-xl:text-sm cs-2xl:text-lg">Worldwide Impact</div>
            </div>
            <img className="max-w-[52px]" src={arrow_button} alt="icon"></img>
          </div>
          <div className=" text-cs-light-600 cs-2xl:text-[20px]">2 million monthly readers</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
