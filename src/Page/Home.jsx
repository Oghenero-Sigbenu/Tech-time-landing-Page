import {
  ClassDetail,
  Courses,
  HeroSection,
  Logo,
  Navbar,
  Why,
  Reviews,
  Talents,
  Footer,
} from "../Components";

function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Logo />
      <ClassDetail />
      <Why />
      <Courses />
      <Reviews />
      <Talents />
      <Footer />
    </div>
  );
}

export default Home;
