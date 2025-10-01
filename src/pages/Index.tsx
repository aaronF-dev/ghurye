import { LanguageProvider } from "@/contexts/LanguageContext";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Staff from "@/components/Staff";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <LanguageToggle />
        <Hero />
        <About />
        <Programs />
        <Staff />
        <Gallery />
        <Contact />
        <Footer />
        <Chatbot />
      </div>
    </LanguageProvider>
  );
};

export default Index;
