import ServicesHero from "../OtherPages/ServicesHero";
import Navbar from "../landingPage/Navbar";
import AllServices from "../OtherPages/AllServices";
import CustomerReviews from "../OtherPages/CustomerReviews";
import Complain from "../landingPage/Complain";
import Footer from "../landingPage/Footer";
const Service = () => {
  return (
    <div>
      <Navbar />  
      <ServicesHero />
      <AllServices/>
      <CustomerReviews/>
      <Complain/>
      <Footer/>

    </div>
  );
};

export default Service;
