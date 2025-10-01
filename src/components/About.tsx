import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-georgia">
              {t('about.title')}
            </h2>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              {t('about.description.1')}
            </p>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              {t('about.description.2')}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-foreground/70">{t('about.years')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-foreground/70">{t('about.students')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-foreground/70">{t('about.teachers')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-foreground/70">{t('about.success')}</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-2xl shadow-soft">
              <h3 className="text-xl font-semibold text-primary mb-3">{t('about.mission.title')}</h3>
              <p className="text-foreground/80">
                {t('about.mission.desc')}
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-2xl shadow-soft">
              <h3 className="text-xl font-semibold text-primary mb-3">{t('about.vision.title')}</h3>
              <p className="text-foreground/80">
                {t('about.vision.desc')}
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-2xl shadow-soft">
              <h3 className="text-xl font-semibold text-primary mb-3">{t('about.values.title')}</h3>
              <p className="text-foreground/80">
                {t('about.values.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;