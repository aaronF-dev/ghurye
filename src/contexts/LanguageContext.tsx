import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero Section
    'hero.title.main': 'Smt. Sitabai Shripad Ghurye',
    'hero.title.sub': 'Pre Primary English Medium School',
    'hero.subtitle': 'Excellence in Early Childhood Education - Nurturing Young Minds for a Bright Future',
    'hero.button.inquire': 'Inquire Now',
    
    // About Section
    'about.title': 'About Our School',
    'about.description.1': 'Smt. Sitabai Shripad Ghurye Pre Primary English Medium School has been a beacon of excellence in early childhood education for over two decades. We are committed to providing a nurturing environment where young minds can flourish and develop their full potential.',
    'about.description.2': 'Our school follows a child-centric approach, focusing on holistic development through innovative teaching methodologies, creative learning experiences, and individual attention to each child\'s unique needs.',
    'about.years': 'Years of Excellence',
    'about.students': 'Happy Students',
    'about.teachers': 'Expert Teachers',
    'about.success': 'Success Rate',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'To provide quality education that nurtures creativity, critical thinking, and character development in a safe and supportive environment.',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'To be the leading pre-primary school that shapes confident, compassionate, and capable young learners ready for their educational journey.',
    'about.values.title': 'Our Values',
    'about.values.desc': 'Excellence, Integrity, Innovation, Inclusivity, and Individual Growth form the foundation of our educational philosophy.',
    
    // Programs Section
    'programs.title': 'Our Programs & Facilities',
    'programs.subtitle': 'Comprehensive early childhood education programs designed to nurture every aspect of your child\'s development',
    'programs.academic.title': 'Academic Excellence',
    'programs.academic.desc': 'Comprehensive curriculum focusing on foundational literacy, numeracy, and critical thinking skills designed for early learners.',
    'programs.social.title': 'Social Development',
    'programs.social.desc': 'Interactive activities that promote teamwork, communication, and emotional intelligence in a nurturing environment.',
    'programs.creative.title': 'Creative Arts',
    'programs.creative.desc': 'Art, craft, and creative expression programs that encourage imagination and develop fine motor skills.',
    'programs.music.title': 'Music & Movement',
    'programs.music.desc': 'Engaging music lessons and physical activities that enhance coordination, rhythm, and self-expression.',
    'programs.nature.title': 'Nature Learning',
    'programs.nature.desc': 'Outdoor exploration and environmental awareness programs that connect children with nature.',
    'programs.character.title': 'Character Building',
    'programs.character.desc': 'Values-based education focusing on kindness, respect, responsibility, and moral development.',
    'programs.facilities.title': 'Additional Facilities',
    'programs.facilities.learning': 'Learning Spaces',
    'programs.facilities.learning.1': 'Air-conditioned classrooms',
    'programs.facilities.learning.2': 'Interactive smart boards',
    'programs.facilities.learning.3': 'Reading corners',
    'programs.facilities.play': 'Play Areas',
    'programs.facilities.play.1': 'Indoor play zone',
    'programs.facilities.play.2': 'Outdoor playground',
    'programs.facilities.play.3': 'Safety equipment',
    'programs.facilities.health': 'Health & Safety',
    'programs.facilities.health.1': 'First aid facilities',
    'programs.facilities.health.2': 'CCTV monitoring',
    'programs.facilities.health.3': 'Trained staff',
    'programs.facilities.support': 'Support Services',
    'programs.facilities.support.1': 'Parent counseling',
    'programs.facilities.support.2': 'Regular assessments',
    'programs.facilities.support.3': 'Progress tracking',
    
    // Staff Section
    'staff.title': 'Our Dedicated Staff',
    'staff.subtitle': 'Meet our experienced and passionate educators who are committed to nurturing your child\'s growth and development',
    
    // Gallery Section
    'gallery.title': 'School Gallery',
    'gallery.subtitle': 'Glimpses of life at our school - from learning moments to celebrations',
    'gallery.visit.text': 'Want to see more photos? Visit our school to experience the vibrant learning environment firsthand.',
    'gallery.visit.button': 'Schedule a Visit',
    'gallery.items.classroom': 'Classroom Activities',
    'gallery.items.sports': 'Sports Day',
    'gallery.items.art': 'Art & Craft',
    'gallery.items.science': 'Science Lab',
    'gallery.items.library': 'Library Time',
    'gallery.items.function': 'Annual Function',
    'gallery.items.playground': 'Playground',
    'gallery.items.music': 'Music Class',
    'gallery.category.learning': 'Learning',
    'gallery.category.events': 'Events',
    'gallery.category.creative': 'Creative',
    'gallery.category.facilities': 'Facilities',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.description': 'Ready to give your child the best start in their educational journey? Contact us today to learn more about our admissions process and schedule a visit to our campus.',
    'contact.address': 'Address',
    'contact.address.value': '123 Education Street, Learning City, State 400001',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'School Hours',
    'contact.hours.value': 'Monday - Friday: 8:00 AM - 1:00 PM',
    'contact.form.title': 'Send us a Message',
    'contact.form.parent': 'Parent\'s Name',
    'contact.form.child': 'Child\'s Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.placeholder.parent': 'Enter your name',
    'contact.form.placeholder.child': 'Enter child\'s name',
    'contact.form.placeholder.email': 'your.email@example.com',
    'contact.form.placeholder.phone': '+91 98765 43210',
    'contact.form.placeholder.message': 'Tell us about your inquiry or any questions you have...',
    'contact.form.submit': 'Send Message',
    
    // Footer
    'footer.description': 'Nurturing young minds with excellence in education, creativity, and character development for over two decades.',
    'footer.quicklinks': 'Quick Links',
    'footer.about': 'About Us',
    'footer.staff': 'Our Staff',
    'footer.gallery': 'Gallery',
    'footer.contact': 'Contact Us',
    'footer.admissions': 'Admissions',
    'footer.contactinfo': 'Contact Info',
    'footer.rights': 'All rights reserved.',
    
    // Language Toggle
    'language.english': 'English',
    'language.marathi': 'मराठी',
    
    // Chatbot
    'chatbot.title': 'School Assistant',
    'chatbot.placeholder': 'Ask me about admissions, programs, or anything else...',
    'chatbot.send': 'Send',
  },
  mr: {
    // Hero Section
    'hero.title.main': 'श्रीमती सीताबाई श्रीपाद घुर्ये',
    'hero.title.sub': 'प्री प्राइमरी इंग्रजी माध्यम शाळा',
    'hero.subtitle': 'बालपणातील शिक्षणात उत्कृष्टता - उज्ज्वल भविष्यासाठी तरुण मनांचे संगोपन',
    'hero.button.inquire': 'चौकशी करा',
    
    // About Section
    'about.title': 'आमच्या शाळाबद्दल',
    'about.description.1': 'श्रीमती सीताबाई श्रीपाद घुर्ये प्री प्राइमरी इंग्रजी माध्यम शाळा दोन दशकांहून अधिक काळ बालपणातील शिक्षणात उत्कृष्टतेचा दीपस्तंभ आहे. आम्ही एक पालनपोषण करणारे वातावरण प्रदान करण्यासाठी वचनबद्ध आहोत जिथे तरुण मने फुलू शकतात आणि त्यांची पूर्ण क्षमता विकसित करू शकतात.',
    'about.description.2': 'आमची शाळा बाल-केंद्रित दृष्टिकोन अनुसरते, नावीन्यपूर्ण शिक्षण पद्धती, सर्जनशील शिक्षण अनुभव आणि प्रत्येक मुलाच्या अनन्य गरजांकडे वैयक्तिक लक्ष यांच्याद्वारे सर्वंकष विकासावर लक्ष केंद्रित करते.',
    'about.years': 'वर्षांची उत्कृष्टता',
    'about.students': 'आनंदी विद्यार्थी',
    'about.teachers': 'तज्ञ शिक्षक',
    'about.success': 'यशाचा दर',
    'about.mission.title': 'आमचे ध्येय',
    'about.mission.desc': 'सुरक्षित आणि सहाय्यक वातावरणात सर्जनशीलता, गंभीर विचार आणि चारित्र्य विकासाचे संगोपन करणारे दर्जेदार शिक्षण प्रदान करणे.',
    'about.vision.title': 'आमची दृष्टी',
    'about.vision.desc': 'त्यांच्या शैक्षणिक प्रवासासाठी तयार असलेल्या आत्मविश्वासी, दयाळू आणि सक्षम तरुण शिकणाऱ्यांना आकार देणारी आघाडीची प्री-प्राइमरी शाळा बनणे.',
    'about.values.title': 'आमची मूल्ये',
    'about.values.desc': 'उत्कृष्टता, प्रामाणिकता, नावीन्य, समावेशकता आणि वैयक्तिक वाढ हे आमच्या शैक्षणिक तत्त्वज्ञानाचा पाया आहेत.',
    
    // Programs Section
    'programs.title': 'आमचे कार्यक्रम आणि सुविधा',
    'programs.subtitle': 'आपल्या मुलाच्या विकासाच्या प्रत्येक पैलूचे पालनपोषण करण्यासाठी डिझाइन केलेले व्यापक बालपणातील शिक्षण कार्यक्रम',
    'programs.academic.title': 'शैक्षणिक उत्कृष्टता',
    'programs.academic.desc': 'लहान मुलांसाठी डिझाइन केलेले मूलभूत साक्षरता, संख्याशास्त्र आणि गंभीर विचार कौशल्यांवर लक्ष केंद्रित करणारा व्यापक अभ्यासक्रम.',
    'programs.social.title': 'सामाजिक विकास',
    'programs.social.desc': 'पालनपोषणाच्या वातावरणात संघकार्य, संप्रेषण आणि भावनिक बुद्धिमत्तेला प्रोत्साहन देणारे परस्परसंवादी क्रियाकलाप.',
    'programs.creative.title': 'सर्जनशील कला',
    'programs.creative.desc': 'कल्पकतेला प्रोत्साहन देणारे आणि बारीक मोटर कौशल्ये विकसित करणारे कला, हस्तकला आणि सर्जनशील अभिव्यक्ती कार्यक्रम.',
    'programs.music.title': 'संगीत आणि हालचाल',
    'programs.music.desc': 'समन्वय, ताल आणि स्वत:च्या अभिव्यक्तीला वाढवणारे आकर्षक संगीत धडे आणि शारीरिक क्रियाकलाप.',
    'programs.nature.title': 'निसर्ग शिक्षण',
    'programs.nature.desc': 'मुलांना निसर्गाशी जोडणारे मैदानी अन्वेषण आणि पर्यावरणीय जागरुकता कार्यक्रम.',
    'programs.character.title': 'चारित्र्य निर्माण',
    'programs.character.desc': 'दयाळूपणा, आदर, जबाबदारी आणि नैतिक विकासावर लक्ष केंद्रित करणारे मूल्य-आधारित शिक्षण.',
    'programs.facilities.title': 'अतिरिक्त सुविधा',
    'programs.facilities.learning': 'शिक्षणाच्या जागा',
    'programs.facilities.learning.1': 'वातानुकूलित वर्गखोल्या',
    'programs.facilities.learning.2': 'परस्परसंवादी स्मार्ट बोर्ड',
    'programs.facilities.learning.3': 'वाचन कोपरे',
    'programs.facilities.play': 'खेळाच्या क्षेत्रे',
    'programs.facilities.play.1': 'घरातील खेळाचे क्षेत्र',
    'programs.facilities.play.2': 'बाहेरील खेळाचे मैदान',
    'programs.facilities.play.3': 'सुरक्षा उपकरणे',
    'programs.facilities.health': 'आरोग्य आणि सुरक्षा',
    'programs.facilities.health.1': 'प्रथमोपचार सुविधा',
    'programs.facilities.health.2': 'सीसीटीव्ही निरीक्षण',
    'programs.facilities.health.3': 'प्रशिक्षित कर्मचारी',
    'programs.facilities.support': 'सहाय्यक सेवा',
    'programs.facilities.support.1': 'पालक सल्लामसलत',
    'programs.facilities.support.2': 'नियमित मूल्यांकन',
    'programs.facilities.support.3': 'प्रगती ट्रॅकिंग',
    
    // Staff Section
    'staff.title': 'आमचे समर्पित कर्मचारी',
    'staff.subtitle': 'आमच्या अनुभवी आणि उत्कट शिक्षकांना भेटा जे तुमच्या मुलाच्या वाढ आणि विकासासाठी वचनबद्ध आहेत',
    
    // Gallery Section
    'gallery.title': 'शाळेची गॅलरी',
    'gallery.subtitle': 'आमच्या शाळेतील जीवनाची झलक - शिक्षणाच्या क्षणांपासून उत्सवांपर्यंत',
    'gallery.visit.text': 'अधिक फोटो पहायचे आहेत? जीवंत शिक्षणाच्या वातावरणाचा प्रत्यक्ष अनुभव घेण्यासाठी आमच्या शाळेला भेट द्या.',
    'gallery.visit.button': 'भेटीचे वेळापत्रक तयार करा',
    'gallery.items.classroom': 'वर्गातील क्रियाकलाप',
    'gallery.items.sports': 'क्रीडा दिन',
    'gallery.items.art': 'कला आणि हस्तकला',
    'gallery.items.science': 'विज्ञान प्रयोगशाळा',
    'gallery.items.library': 'वाचनालयाची वेळ',
    'gallery.items.function': 'वार्षिक समारंभ',
    'gallery.items.playground': 'खेळाचे मैदान',
    'gallery.items.music': 'संगीत वर्ग',
    'gallery.category.learning': 'शिक्षण',
    'gallery.category.events': 'कार्यक्रम',
    'gallery.category.creative': 'सर्जनशील',
    'gallery.category.facilities': 'सुविधा',
    
    // Contact Section
    'contact.title': 'आमच्याशी संपर्क साधा',
    'contact.description': 'आपल्या मुलाला त्यांच्या शैक्षणिक प्रवासात सर्वोत्तम सुरुवात द्यायला तयार आहात? आमच्या प्रवेश प्रक्रियेबद्दल अधिक जाणून घेण्यासाठी आणि आमच्या परिसराला भेट देण्यासाठी आज आमच्याशी संपर्क साधा.',
    'contact.address': 'पत्ता',
    'contact.address.value': '123 शिक्षण रस्ता, शिक्षण शहर, राज्य 400001',
    'contact.phone': 'फोन',
    'contact.email': 'ईमेल',
    'contact.hours': 'शाळेचे तास',
    'contact.hours.value': 'सोमवार - शुक्रवार: सकाळी 8:00 - दुपारी 1:00',
    'contact.form.title': 'आम्हाला संदेश पाठवा',
    'contact.form.parent': 'पालकांचे नाव',
    'contact.form.child': 'मुलाचे नाव',
    'contact.form.email': 'ईमेल',
    'contact.form.phone': 'फोन',
    'contact.form.message': 'संदेश',
    'contact.form.placeholder.parent': 'तुमचे नाव टाका',
    'contact.form.placeholder.child': 'मुलाचे नाव टाका',
    'contact.form.placeholder.email': 'your.email@example.com',
    'contact.form.placeholder.phone': '+91 98765 43210',
    'contact.form.placeholder.message': 'तुमच्या चौकशीबद्दल किंवा तुमच्या कोणत्याही प्रश्नांबद्दल आम्हाला सांगा...',
    'contact.form.submit': 'संदेश पाठवा',
    
    // Footer
    'footer.description': 'दोन दशकांहून अधिक काळ शिक्षण, सर्जनशीलता आणि चारित्र्य विकासात उत्कृष्टतेसह तरुण मनांचे पालनपोषण.',
    'footer.quicklinks': 'द्रुत दुवे',
    'footer.about': 'आमच्याबद्दल',
    'footer.staff': 'आमचे कर्मचारी',
    'footer.gallery': 'गॅलरी',
    'footer.contact': 'आमच्याशी संपर्क साधा',
    'footer.admissions': 'प्रवेश',
    'footer.contactinfo': 'संपर्क माहिती',
    'footer.rights': 'सर्व हक्क राखीव.',
    
    // Language Toggle
    'language.english': 'English',
    'language.marathi': 'मराठी',
    
    // Chatbot
    'chatbot.title': 'शाळा सहायक',
    'chatbot.placeholder': 'प्रवेश, कार्यक्रम किंवा इतर कोणत्याही गोष्टीबद्दल मला विचारा...',
    'chatbot.send': 'पाठवा',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};