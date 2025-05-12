import arrow_away from "@/assets/media/svg/arrow_away.svg";
import { container } from "../../utils/constants";

const BroadCast = () => {
  return (
    <div className={`${container} flex justify-center items-center gap-2.5 py-3.5 cs-2xl:py-5`}>
      <div className="text-xs md:text-sm cs-2xl:text-lg">
        Subscribe to our Newsletter For <span className="hidden md:inline-block">New & latest</span> Blogs and Resources
      </div>
      <div>
        <img src={arrow_away} alt="Arrow" />
      </div>
    </div>
  )
}

export default BroadCast