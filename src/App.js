import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Feature from './components/Feature/Feature';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Products/Product';
import Slider from './components/Slider/Slider';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './Footer/Footer';


function App() {
  return (
    <BrowserRouter>
    <div className="App overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Slider/>
      <Feature/>
      <Product/>
      <Testimonials/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
