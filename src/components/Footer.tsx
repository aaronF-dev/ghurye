import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-georgia">
              {t('hero.title.main')} {t('hero.title.sub')}
            </h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
              >
                <span className="text-xl">📘</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
              >
                <span className="text-xl">📸</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
              >
                <span className="text-xl">🐦</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quicklinks')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a href="#staff" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                  {t('footer.staff')}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                  {t('footer.gallery')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                  {t('footer.contact')}
                </a>
              </li>
              <li>
                <a href="#admissions" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                  {t('footer.admissions')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contactinfo')}</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>📍 {t('contact.address.value')}</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@ssgprimary.edu.in</p>
              <p>🕒 {t('contact.hours.value')}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © 2024 {t('hero.title.main')} {t('hero.title.sub')}. {t('footer.rights')}
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;