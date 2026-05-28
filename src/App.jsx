import "./index.css";
import Hero from './components/Hero/Hero';
import StorySection from "./components/StorySection/StorySection";
import FilmSection from "./components/FilmSection/FlimSection";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/Navbar";
import Storytelling from "./components/StoryTelling/StoryTelling";
import WeddingStory from "./components/WeddingStory/WeddingStory";
import TenPartNarrative from "./components/TenPartNarrative/TenPartNarrative";
import FAQ from "./components/FreequentQ/faq";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Hero />
      <StorySection/>
      <Storytelling/>
      {/* <FilmSection/> */}
      
      <About/>
      <WeddingStory/>
      <TenPartNarrative/>
      <Testimonials/>
      <FAQ/>

      <Gallery/>
      
      
      <Footer/>
      {/* Adhukapram mattha sections inga varum */}
    </div>
  );
}

export default App;
