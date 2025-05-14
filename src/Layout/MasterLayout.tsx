import BroadCast from "../components/global/BroadCast";
import Header from "../components/global/Header";
import Hero from "../components/homepage/Hero";

const MasterLayout = () => {
  return <div className="flex flex-col items-center min-h-screen bg-cs-dark-700 text-white">
    <div className="w-full">
      <BroadCast />
    </div>
    <div className="bg-cs-dark-600 w-full">
      <Header />
    </div>
    <div className="w-full">
      <Hero />
    </div>
  </div>;
};

export default MasterLayout;
