import BlogSection from "../components/Blog/BlogSection";
import HeroSection from "../components/HeroSection";
import IdeaSection from "../components/IdeaSection/IdeaSection";
import NavbarComp from "../components/Navbar/NavbarComp";
import PlaySection from "../components/play/PlaySection";

function HomePage() {
  return (
    <>
      <div className="bg-black relative w-full h-auto">
        <NavbarComp />
        <HeroSection />
        <IdeaSection />
        <PlaySection />
        <BlogSection />
      </div>
    </>
  );
}

export default HomePage;
