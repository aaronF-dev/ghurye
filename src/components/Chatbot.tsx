import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = language === 'en' 
        ? "Hello! I'm your school assistant. I can help you with admissions, programs, facilities, and navigate through our website. How can I assist you today?"
        : "नमस्कार! मी तुमचा शाळा सहायक आहे. मी तुम्हाला प्रवेश, कार्यक्रम, सुविधा आणि आमच्या वेबसाइटवरील नेव्हिगेशनमध्ये मदत करू शकतो. आज मी तुमची कशी मदत करू शकतो?";
      
      setMessages([{
        id: '1',
        content: welcomeMessage,
        sender: 'bot',
        timestamp: new Date()
      }]);
    }
  }, [isOpen, language]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response with intelligent navigation and school info
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue, language);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (input: string, lang: string): string => {
    const lowerInput = input.toLowerCase();
    
    // Navigation responses
    if (lowerInput.includes('about') || lowerInput.includes('information') || (lang === 'mr' && (lowerInput.includes('बद्दल') || lowerInput.includes('माहिती')))) {
      return lang === 'en' 
        ? "You can learn more about our school in the 'About' section. We focus on excellence in early childhood education and nurturing young minds. Would you like me to guide you to any specific information?"
        : "तुम्ही आमच्या शाळेबद्दल अधिक माहिती 'बद्दल' विभागात पाहू शकता. आम्ही बालपणातील शिक्षणातील उत्कृष्टता आणि तरुण मनांच्या संगोपनावर लक्ष केंद्रित करतो. तुम्हाला कोणत्या विशिष्ट माहितीकडे मार्गदर्शन करावे असे वाटते का?";
    }

    if (lowerInput.includes('program') || lowerInput.includes('course') || lowerInput.includes('curriculum') || (lang === 'mr' && (lowerInput.includes('कार्यक्रम') || lowerInput.includes('अभ्यासक्रम')))) {
      return lang === 'en' 
        ? "Our programs include Academic Excellence, Social Development, Creative Arts, Music & Movement, Nature Learning, and Character Building. Check out our 'Programs & Facilities' section for detailed information. Which program interests you most?"
        : "आमच्या कार्यक्रमांमध्ये शैक्षणिक उत्कृष्टता, सामाजिक विकास, सर्जनशील कला, संगीत आणि हालचाल, निसर्ग शिक्षण आणि चारित्र्य निर्माण यांचा समावेश आहे. तपशीलवार माहितीसाठी आमचा 'कार्यक्रम आणि सुविधा' विभाग पहा. कोणता कार्यक्रम तुम्हाला सर्वात जास्त आवडतो?";
    }

    if (lowerInput.includes('admission') || lowerInput.includes('enroll') || lowerInput.includes('apply') || (lang === 'mr' && (lowerInput.includes('प्रवेश') || lowerInput.includes('दाखला')))) {
      return lang === 'en' 
        ? "Great! We're accepting admissions. You can click 'Inquire Now' on our homepage or visit our 'Contact' section for detailed admission information. Our staff will be happy to guide you through the process. What age group are you looking for?"
        : "छान! आम्ही प्रवेश घेत आहोत. तुम्ही आमच्या मुख्यपृष्ठावर 'चौकशी करा' वर क्लिक करू शकता किंवा तपशीलवार प्रवेश माहितीसाठी आमचा 'संपर्क' विभाग पाहू शकता. आमचे कर्मचारी तुम्हाला या प्रक्रियेत मार्गदर्शन करण्यात आनंदी असतील. तुम्ही कोणत्या वयोगटासाठी शोधत आहात?";
    }

    if (lowerInput.includes('staff') || lowerInput.includes('teacher') || lowerInput.includes('faculty') || (lang === 'mr' && (lowerInput.includes('कर्मचारी') || lowerInput.includes('शिक्षक')))) {
      return lang === 'en' 
        ? "Our dedicated and experienced staff are committed to providing quality education. You can meet our team in the 'Staff' section. All our teachers are trained professionals who care deeply about child development."
        : "आमचे समर्पित आणि अनुभवी कर्मचारी दर्जेदार शिक्षण प्रदान करण्यासाठी वचनबद्ध आहेत. तुम्ही आमच्या संघाला 'कर्मचारी' विभागात भेटू शकता. आमचे सर्व शिक्षक प्रशिक्षित व्यावसायिक आहेत जे बालविकासाची मनापासून काळजी घेतात.";
    }

    if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('address') || (lang === 'mr' && (lowerInput.includes('संपर्क') || lowerInput.includes('फोन') || lowerInput.includes('पत्ता')))) {
      return lang === 'en' 
        ? "You can find all our contact information in the 'Contact Us' section at the bottom of the page. We're here to help and answer any questions you may have about our school."
        : "तुम्ही आमची सर्व संपर्क माहिती पृष्ठाच्या तळाशी असलेल्या 'आमच्याशी संपर्क साधा' विभागात पाहू शकता. आम्ही मदत करण्यासाठी आणि आमच्या शाळेबद्दल तुमच्या कोणत्याही प्रश्नांची उत्तरे देण्यासाठी येथे आहोत.";
    }

    if (lowerInput.includes('gallery') || lowerInput.includes('photo') || lowerInput.includes('picture') || (lang === 'mr' && (lowerInput.includes('गॅलरी') || lowerInput.includes('फोटो') || lowerInput.includes('चित्र')))) {
      return lang === 'en' 
        ? "You can see photos of our school, facilities, and activities in our 'Gallery' section. It showcases our learning environment and happy students!"
        : "तुम्ही आमच्या शाळा, सुविधा आणि क्रियाकलापांचे फोटो आमच्या 'गॅलरी' विभागात पाहू शकता. यात आमचे शिक्षणाचे वातावरण आणि आनंदी विद्यार्थी दाखवले आहेत!";
    }

    if (lowerInput.includes('fee') || lowerInput.includes('cost') || lowerInput.includes('price') || (lang === 'mr' && (lowerInput.includes('फी') || lowerInput.includes('शुल्क') || lowerInput.includes('किंमत')))) {
      return lang === 'en' 
        ? "For detailed information about fees and costs, please contact us directly. Our fees are competitive and we offer quality education. Click 'Inquire Now' or visit our contact section for specific fee structure."
        : "फी आणि खर्चाबद्दल तपशीलवार माहितीसाठी, कृपया आमच्याशी थेट संपर्क साधा. आमची फी स्पर्धात्मक आहे आणि आम्ही दर्जेदार शिक्षण देतो. विशिष्ट फी संरचनेसाठी 'चौकशी करा' वर क्लिक करा किंवा आमचा संपर्क विभाग पहा.";
    }

    if (lowerInput.includes('facility') || lowerInput.includes('infrastructure') || (lang === 'mr' && (lowerInput.includes('सुविधा') || lowerInput.includes('पायाभूत')))) {
      return lang === 'en' 
        ? "We have excellent facilities including air-conditioned classrooms, smart boards, indoor/outdoor play areas, safety equipment, first aid facilities, CCTV monitoring, and trained staff. Check our 'Programs & Facilities' section for complete details."
        : "आमच्याकडे उत्कृष्ट सुविधा आहेत ज्यात वातानुकूलित वर्गखोल्या, स्मार्ट बोर्ड, घरातील/बाहेरील खेळाची क्षेत्रे, सुरक्षा उपकरणे, प्रथमोपचार सुविधा, सीसीटीव्ही निरीक्षण आणि प्रशिक्षित कर्मचारी यांचा समावेश आहे. संपूर्ण तपशीलांसाठी आमचा 'कार्यक्रम आणि सुविधा' विभाग पहा.";
    }

    // Default response
    return lang === 'en' 
      ? "Thank you for your question! I'm here to help you learn about our school. You can explore different sections like About, Programs & Facilities, Staff, Gallery, and Contact. Is there something specific you'd like to know about our school?"
      : "तुमच्या प्रश्नाबद्दल धन्यवाद! मी तुम्हाला आमच्या शाळेबद्दल जाणून घेण्यासाठी मदत करण्यासाठी येथे आहे. तुम्ही विविध विभाग जसे की बद्दल, कार्यक्रम आणि सुविधा, कर्मचारी, गॅलरी आणि संपर्क एक्सप्लोर करू शकता. आमच्या शाळेबद्दल तुम्हाला काही विशिष्ट जाणून घ्यायचे आहे का?";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 rounded-full w-14 h-14 shadow-elegant"
        size="icon"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-20 right-4 z-50 w-80 h-96 shadow-elegant border">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bot className="w-5 h-5 text-primary" />
              {t('chatbot.title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-full">
            <ScrollArea className="flex-1 px-4">
              <div className="space-y-4 pb-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.sender === 'bot' && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                        {message.sender === 'user' && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                        <span>{message.content}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-secondary text-secondary-foreground rounded-lg px-3 py-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Bot className="w-4 h-4" />
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                          <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
            
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t('chatbot.placeholder')}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="icon" disabled={!inputValue.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;