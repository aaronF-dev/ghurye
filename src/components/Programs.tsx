import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Palette, Music, TreePine, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Programs = () => {
  const { t } = useLanguage();
  
  const programs = [
    {
      icon: BookOpen,
      title: t('programs.academic.title'),
      description: t('programs.academic.desc')
    },
    {
      icon: Users,
      title: t('programs.social.title'),
      description: t('programs.social.desc')
    },
    {
      icon: Palette,
      title: t('programs.creative.title'),
      description: t('programs.creative.desc')
    },
    {
      icon: Music,
      title: t('programs.music.title'),
      description: t('programs.music.desc')
    },
    {
      icon: TreePine,
      title: t('programs.nature.title'),
      description: t('programs.nature.desc')
    },
    {
      icon: Heart,
      title: t('programs.character.title'),
      description: t('programs.character.desc')
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-georgia text-3xl md:text-4xl lg:text-5xl font-normal text-primary mb-4">
            {t('programs.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('programs.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="h-full transition-all duration-300 hover:shadow-soft hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <program.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-medium text-primary">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-card rounded-lg p-8 shadow-soft">
            <h3 className="font-georgia text-2xl font-normal text-primary mb-4">
              {t('programs.facilities.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div className="space-y-2">
                <h4 className="font-medium text-primary">{t('programs.facilities.learning')}</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>{t('programs.facilities.learning.1')}</li>
                  <li>{t('programs.facilities.learning.2')}</li>
                  <li>{t('programs.facilities.learning.3')}</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-primary">{t('programs.facilities.play')}</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>{t('programs.facilities.play.1')}</li>
                  <li>{t('programs.facilities.play.2')}</li>
                  <li>{t('programs.facilities.play.3')}</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-primary">{t('programs.facilities.health')}</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>{t('programs.facilities.health.1')}</li>
                  <li>{t('programs.facilities.health.2')}</li>
                  <li>{t('programs.facilities.health.3')}</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-primary">{t('programs.facilities.support')}</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>{t('programs.facilities.support.1')}</li>
                  <li>{t('programs.facilities.support.2')}</li>
                  <li>{t('programs.facilities.support.3')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;