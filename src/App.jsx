import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import WhyChoose  from "./components/WhyChoose/WhyChoose";
// import CompanyInfo from "./components/CompanyInfo/CompanyInfo";
import Infrastructure from "./components/Infrastructure/Infrastructure";
import Services from "./components/Services/Services";
import Contact from   "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChoose />
      <Services />
      {/* <CompanyInfo/> */}
      <Infrastructure/>
      <Contact />
      <Footer />
      <ScrollToTop />
      

    </>
  );
}
export default App;