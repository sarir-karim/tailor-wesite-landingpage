import Section1 from "./components/LandingPageComponents/Section1/Section1";
import Section2 from "./components/LandingPageComponents/Section2/Section2";
import Section3 from "./components/LandingPageComponents/Section3/Section3";
import Section4 from "./components/LandingPageComponents/Section4/Section4";
import Section5 from "./components/LandingPageComponents/Section5/Section5";
import Section6 from "./components/LandingPageComponents/Section6/Section6";
import Navbar from "./components/navbar/Navbar";
import bgvideo from './assets/bg-video.mp4'
import Footer from "./components/Footer/Footer";
import lottie from 'lottie-web';
import animationData from './assets/Loader-Animation-Scissors-Cut-The-Line.json';
import { useEffect, useState } from "react";
import { Element  } from "react-scroll";
function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };
  useEffect(() => {
    if (!videoLoaded) {
      const animation = lottie.loadAnimation({
        container: document.getElementById('loader-container'),
        renderer: 'svg',
        loop: true,
        animationData: animationData,
      });
    }
  }, [videoLoaded]);
  return (
    <div>
      {videoLoaded ? (
        <video muted onLoadedData={handleVideoLoad} loop autoPlay  >
          <source src={bgvideo} type="video/mp4">
          </source>
        </video>
      ) : (
        <div id="loader-container" className="absolute bg-transparent top-[45%] scroll-0 left-[33%] right-0 bottom-0 z-40" style={{ width: '30%', height: '30%', overflow: "hidden" }}></div>

      )}
      <div className="hero-background" >

        <video autoPlay muted loop onLoadedData={handleVideoLoad} >
          <source src={bgvideo} type="video/mp4">
          </source>
        </video>
        <div className="overlay">
          <Navbar />
          <Section1 />
        </div>
      </div>
      <Element name="section1" >
      </Element>
      <Element name="section2">
        <Section2 />
      </Element>
      <Element name="section3">
        <Section3 />
        <Section4 />
      </Element>
      <Section5 />
      <Element name="section4">
        <Section6 />
      </Element>
      <Footer />
    </div>

  )
}

export default App
