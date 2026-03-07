import HeroSlider from "../components/home/HeroSlider";
import AboutSection from "../components/home/AboutSection";
import ClassesSection from "../components/home/ClassesSection";
import FacilitiesSection from "../components/home/FacilitiesSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import GallerySection from "../components/home/GallerySection";
import AdmissionCTA from "../components/home/AdmissionCTA";

function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ClassesSection />
      <FacilitiesSection />
      <WhyChooseUs />
      <GallerySection />
      <AdmissionCTA />
    </>
  );
}

export default Home;