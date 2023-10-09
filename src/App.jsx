import Section1 from "./components/LandingPageComponents/Section1/Section1";
import Section2 from "./components/LandingPageComponents/Section2/Section2";
import Section3 from "./components/LandingPageComponents/Section3/Section3";
import Section4 from "./components/LandingPageComponents/Section4/Section4";
import Section5 from "./components/LandingPageComponents/Section5/Section5";
import Section6 from "./components/LandingPageComponents/Section6/Section6";
import Navbar from "./components/navbar/Navbar";
import bgvideo from './assets/bg-video.mp4'
import Footer from "./components/Footer/Footer";
function App() {

  return (
    <div>
      <div className="hero-background">
        <video autoPlay muted loop >
          <source src={bgvideo} type="video/mp4">
          </source>
        </video>
        <div className="overlay">
          <Navbar />
          <Section1 />
        </div>
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>

  )
}

export default App
