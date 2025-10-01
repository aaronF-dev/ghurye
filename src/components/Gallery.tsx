import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import galleryClassroom from "@/assets/g1.png";
import gallerySports from "@/assets/g2.png";
import galleryArt from "@/assets/g3.png";
import galleryScience from "@/assets/g4.png";
import galleryLibrary from "@/assets/g5.png";
import galleryFunction from "@/assets/g7.png";
import galleryPlayground from "@/assets/g6.png";
import galleryMusic from "@/assets/g8.png";

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    { id: 1, title: t('gallery.items.classroom'), category: t('gallery.category.learning'), image: galleryClassroom },
    { id: 2, title: t('gallery.items.sports'), category: t('gallery.category.events'), image: gallerySports },
    { id: 3, title: t('gallery.items.art'), category: t('gallery.category.creative'), image: galleryArt },
    { id: 4, title: t('gallery.items.science'), category: t('gallery.category.learning'), image: galleryScience },
    { id: 5, title: t('gallery.items.library'), category: t('gallery.category.learning'), image: galleryLibrary },
    { id: 6, title: t('gallery.items.function'), category: t('gallery.category.events'), image: galleryFunction },
    { id: 7, title: t('gallery.items.playground'), category: t('gallery.category.facilities'), image: galleryPlayground },
    { id: 8, title: t('gallery.items.music'), category: t('gallery.category.creative'), image: galleryMusic },
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-georgia">
            {t('gallery.title')}
          </h2>
          <p className="text-xl text-primary/80 max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-primary/70 mb-4">
            {t('gallery.visit.text')}
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary-light transition-colors duration-300 shadow-soft hover:shadow-elegant">
            {t('gallery.visit.button')}
          </button>
        </div>

        {/* Modal for selected image */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {galleryItems[selectedImage].title}
                </h3>
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src={galleryItems[selectedImage].image} 
                    alt={galleryItems[selectedImage].title}
                    className="w-full h-auto max-h-[60vh] object-cover"
                  />
                </div>
                <p className="text-primary/70 mt-4">
                  Category: {galleryItems[selectedImage].category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;