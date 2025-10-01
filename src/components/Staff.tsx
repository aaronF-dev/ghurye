import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import staff1 from "@/assets/SAUJANYA PATANKAR.jpg";
import staff2 from "@/assets/staff.png";
import staff3 from "@/assets/staff2.png";
import staff4 from "@/assets/icon.png";
import staff5 from "@/assets/icon.png";
import staff6 from "@/assets/icon.png";
import staff7 from "@/assets/icon.png";
import staff8 from "@/assets/icon.png";


const staffMembers = [
  { id: 1, name: "Dr. Priya Sharma", position: "Principal", image: staff1 },
  { id: 2, name: "Ms. Anjali Patel", position: "Senior Teacher", image: staff2 },
  { id: 3, name: "Mr. Rajesh Kumar", position: "Mathematics Teacher", image: staff3 },
  { id: 4, name: "Ms. Sunita Joshi", position: "English Teacher", image: staff4 },
  { id: 5, name: "Mrs. Meera Gupta", position: "Science Teacher", image: staff5 },
  { id: 6, name: "Mr. Amit Singh", position: "Physical Education", image: staff6 },
  { id: 7, name: "Mrs. Kalpana Mehta", position: "Art & Craft Teacher", image: staff7 },
  { id: 8, name: "Ms. Pooja Rao", position: "Music Teacher", image: staff8 },
];

const Staff = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(staffMembers.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 2000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const getCurrentSlideMembers = () => {
    const startIndex = currentIndex * itemsPerSlide;
    return staffMembers.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-georgia">
            {t('staff.title')}
          </h2>
          <p className="text-xl text-primary/80 max-w-2xl mx-auto">
            {t('staff.subtitle')}
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {getCurrentSlideMembers().map((member) => (
              <div 
                key={member.id} 
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className="bg-card rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary/70 font-medium">
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;