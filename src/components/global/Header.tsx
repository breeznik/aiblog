import logo from "../../assets/media/svg/Logo.svg";
const Header = () => {
  return (
    <div className="bg-cs-dark-600">
      <div className="left">
        <img src={logo} alt="FuturTech" />
      </div>
      <div className="mid">
        <div className="">Home</div>
        <div className="">News</div>
        <div className="">Podcast</div>
        <div className="">Resources</div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Header;
