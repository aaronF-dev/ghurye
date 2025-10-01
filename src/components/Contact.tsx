import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-georgia">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              {t('contact.description')}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{t('contact.address')}</h4>
                  <p className="text-foreground/80">{t('contact.address.value')}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-xl">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{t('contact.phone')}</h4>
                  <p className="text-foreground/80">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-xl">✉️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{t('contact.email')}</h4>
                  <p className="text-foreground/80">info@ssgprimary.edu.in</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-xl">🕒</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{t('contact.hours')}</h4>
                  <p className="text-foreground/80">{t('contact.hours.value')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-2xl shadow-elegant">
            <h3 className="text-2xl font-bold text-primary mb-6">{t('contact.form.title')}</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.parent')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                    placeholder={t('contact.form.placeholder.parent')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.child')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                    placeholder={t('contact.form.placeholder.child')}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                    placeholder={t('contact.form.placeholder.email')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                    placeholder={t('contact.form.placeholder.phone')}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                  placeholder={t('contact.form.placeholder.message')}
                ></textarea>
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary-light text-primary-foreground py-3 text-lg font-medium shadow-soft hover:shadow-elegant transition-all duration-300">
                {t('contact.form.submit')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;