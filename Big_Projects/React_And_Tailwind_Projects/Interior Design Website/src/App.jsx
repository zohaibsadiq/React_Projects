import Banner from './components/Banner/Banner';
import Banner2 from './components/Banner/Banner2';
import Brand from './components/Brand/Brand';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Newsletter from './components/Newsletter/Newsletter';
import OurServices from './components/OurServices/OurServices';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <main className='overflow-hidden'>
      <Navbar />
      <Hero />
      <Brand />
      <OurServices />
      <Banner />
      <Banner2 />
      <Testimonial />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App;
