import Reviewer1 from "../Assests/Frame 176.png";

function Talents() {
  return (
    <div className="text-white text-center bg-primary py-[4rem] w-full">
      <p className="text-[.7rem]">JOIN OUR COMMUNITY</p>
      <h2 className="text-[50px] w-[90%] lg:w-[70%] mx-auto text-white text-center leading-[60px] mb-[.5rem] font-[700] ">
        Are you ready to connect with the future talent of the tech world?
      </h2>
      <p className="text-[.7rem] mb-5">
        Meet up with other techstars and grow together.
      </p>
      <div className="w-[50%] flex mx-auto mb-[3rem] mt-[2rem] justify-around">
        <img src={Reviewer1} alt="talents" />
        <img src={Reviewer1} alt="talents" className="mt-[1rem]" />
        <img src={Reviewer1} alt="talents" />
      </div>
      <div className="w-[40%] flex mx-auto mb-5 justify-around">
        <img src={Reviewer1} alt="talents" />
        <img src={Reviewer1} alt="talents" />
      </div>
      <div className="w-[60%] flex mx-auto mb-5 justify-around">
        <img src={Reviewer1} alt="talents" />
        <img src={Reviewer1} alt="talents" />
        <img src={Reviewer1} alt="talents" />
      </div>
      <div className="text-center mt-[4rem]">
        <button className="bg-white mr-5 px-[2rem] py-[.9rem] text-primary">
          Join Our Community
        </button>
      </div>
    </div>
  );
}

export default Talents;
