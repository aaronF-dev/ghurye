import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import staff1 from "@/assets/SHWETA PEDNEKAR.png";
import staff2 from "@/assets/SIDDHI DHURI.png";
import staff3 from "@/assets/SAUJANYA PATANKAR.jpg";
import staff4 from "@/assets/MRUNAL HADKAR.png";
import staff5 from "@/assets/UMA DIGHE.png";
import staff6 from "@/assets/SIDDHI MALVANKAR.png";
import staff7 from "@/assets/PRIYA KELUSKAR.jpg";

// Add education and email fields
const staffMembers = [
  { id: 1, name: "SHWETA PEDNEKAR", position: "Assistant Teacher", education: "B.A., B. Ed.", email: "shwetapednekar9595@gmail.com", image: staff1 },
  { id: 2, name: "SIDDHI DHURI", position: "Assistant Teacher", education: "B.A., M.T.S.", email: "siddhidhuri13@gmail.com", image: staff2 },
  { id: 3, name: "SAUJANYA PATANKAR", position: "Assistant Teacher", education: "HSC., M.T.S.", email: "saujanyapatankar45@gmail.com", image: staff3 },
  { id: 4, name: "MRUNAL HADKAR", position: "Assistant Teacher", education: "B.A., E.C.E.", email: "mrunalhadkar123@gmail.com", image: staff4 },
  { id: 5, name: "UMA DIGHE", position: "Assistant Teacher", education: "M.A., E.C.E.", email: "umadighe14@gmail.com", image: staff5 },
  { id: 6, name: "SIDDHI MALVANKAR", position: "Assistant Teacher", education: "B.A., M.T.S.", email: "malvankarsiddhi9@gmail.com", image: staff6 },
  { id: 7, name: "PRIYA KELUSKAR", position: "Assistant Teacher", education: "B.A., M.T.S", email: "priyakeluskar1994@gmail.com", image: staff7 },
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
                    <p className="text-primary/70 font-medium mb-1">
                      {member.position}
                    </p>
                    {/* Education */}
                    <p className="text-primary/60 text-sm mb-2">
                      {member.education}
                    </p>
                    {/* Email Icon */}
                    <a
  href={`mailto:${member.email}`}
  className="inline-block mt-2 text-primary hover:text-accent"
  title={`Email ${member.name}`}
>
  {/* Improved SVG email icon */}
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 inline" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.41l-7.29 7.3a1 1 0 0 1-1.42 0L4 6.41V20h16V6.41z"/>
  </svg>
</a>
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