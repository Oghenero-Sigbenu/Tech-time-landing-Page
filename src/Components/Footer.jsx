import Logo from "../Assests/logo1.png";
import Facebook from "../Assests/facebook.png";
import Media from "../Assests/media.png";
import Instagram from "../Assests/instagram.png";
import Twitter from "../Assests/twitter.png";

function Footer() {
  return (
    <div className="bg-[#000F24] py-[3rem] w-full">
      <div className="w-[95%] pt-[5rem] lg:w-[90%] mx-auto max-w-[90%] flex flex-wrap lg:max-w-[85%]">
        <div className="w-full flex flex-wrap justify-between">
          <div className="w-[90%] lg:w-[23%] mt-8">
            <img src={Logo} alt="logo" className="mb-4" />
            <p className="text-white w-[70%] mb-6">
              Reach out to us on any of our social media networks
            </p>
            <ul className="flex  gap-4">
              <li>
                <img src={Facebook} alt="icons" />
              </li>
              <li>
                <img src={Twitter} alt="icons" />
              </li>
              <li>
                <img src={Media} alt="icons" />
              </li>
              <li>
                <img src={Instagram} alt="icons" />
              </li>
            </ul>
          </div>
          <div className="w-[90%] lg:w-[24%] text-white mt-8">
            <h4 className="font-bold mb-3 text-xl">Useful Links</h4>
            <ul className="text-[1.2rem]">
              <li>Home</li>
              <li>About Us</li>
              <li>Our Courses</li>
              <li>Testimonials</li>
              <li>Our Community</li>
            </ul>
          </div>
          <div className="w-[90%] lg:w-[24%] text-white mt-8">
            <h4 className="font-bold mb-3 text-xl">Community</h4>
            <ul className="text-[1.2rem]">
              <li>Help Centers</li>
              <li>Partners</li>
              <li>Suggestion</li>
              <li>Blog</li>
              <li>Newsltter</li>
            </ul>
          </div>
          <div className="w-[90%] lg:w-[24%] mt-8">
            <h4 className="font-bold mb-3 text-xl text-white">Subcribe Us</h4>

            <div className=" w-full flex">
              <input
                type="text"
                className=" p-3 border-primary border-[2px] bg-[#2A2A2B]"
              />
              <button className="px-[1rem] py-[.5rem]  text-white bg-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
