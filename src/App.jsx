// src/App.jsx
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Community from "./components/Community/Community";
import ShopByStyle from "./components/ShopByStyle/ShopByStyle";
import FeatureCollection from "./components/FeatureCollection/FeatureCollection";
import OurHome from "./components/OurHome/OurHome";
import Careers from "./components/Careers/Careers";
import ShopByCollection from "./components/ShopByCollection/ShopByCollection";
import Support from "./components/Support/Support";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Community />
      <ShopByStyle />
      <FeatureCollection />
      <OurHome />
      <Careers />
      <ShopByCollection />
      <Support />
      <Footer />
    </>
  );
}

export default App;
