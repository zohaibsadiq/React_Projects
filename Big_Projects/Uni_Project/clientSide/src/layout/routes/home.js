import WhyChoose from "../landingPage/WhyChoose";
import Complain from "../landingPage/Complain";
import Footer from "../landingPage/Footer";
import Hero from "../landingPage/Hero";
import HowWork from "../landingPage/HowWork";
import Navbar from "../landingPage/Navbar";
import Testimoial from "../landingPage/Testimoial";
import TopServices from "../landingPage/TopServices";
import TrendingServices from "../landingPage/TrendingServices";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopServices />
      <TrendingServices />
      <HowWork />
      <WhyChoose />
      <Testimoial />
      <Complain />
      <Footer />
    </div>
  );
};

export default Home;
