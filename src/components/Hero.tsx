import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero2.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-primary/20" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="font-georgia text-4xl md:text-6xl lg:text-7xl font-normal text-primary-foreground mb-6 leading-tight">
          {t('hero.title.main')}
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl">
            {t('hero.title.sub')}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex justify-center">
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 text-lg font-medium shadow-elegant transition-smooth"
          >
            {t('hero.button.inquire')}
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;