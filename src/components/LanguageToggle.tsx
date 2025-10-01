import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
        className="bg-background/80 backdrop-blur-sm border shadow-soft"
      >
        <Languages className="w-4 h-4 mr-2" />
        {language === 'en' ? t('language.marathi') : t('language.english')}
      </Button>
    </div>
  );
};

export default LanguageToggle;