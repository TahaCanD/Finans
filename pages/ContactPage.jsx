import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  useEffect(() => {
    document.title = 'İletişim | FinEdge';
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Ad Soyad gerekli';
    if (!formData.email.trim()) newErrors.email = 'E-posta adresi gerekli';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Geçersiz e-posta adresi';
    if (!formData.subject.trim()) newErrors.subject = 'Konu gerekli';
    if (!formData.message.trim()) newErrors.message = 'Mesaj gerekli';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl font-bold text-blue-950 mb-4">Bizimle İletişime Geçin</h1>
          <p className="text-gray-600 text-lg">
            Hizmetlerimiz hakkında sorularınız mı var? Ekibimiz size yardımcı olmak için burada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-blue-950 mb-6">İletişim Bilgileri</h2>
            
            <div className="space-y-6">
              <ContactInfoItem 
                icon={<Phone size={20} className="text-teal-500" />}
                title="Telefon"
                details={["+90 (212) 555 0123", "+90 (212) 555 4321"]}
              />
              
              <ContactInfoItem 
                icon={<Mail size={20} className="text-teal-500" />}
                title="E-posta"
                details={["iletisim@finedge.com.tr", "destek@finedge.com.tr"]}
              />
              
              <ContactInfoItem 
                icon={<MapPin size={20} className="text-teal-500" />}
                title="Adres"
                details={["Levent 199, Büyükdere Cad.", "34394 Şişli, İstanbul"]}
              />
              
              <ContactInfoItem 
                icon={<Clock size={20} className="text-teal-500" />}
                title="Çalışma Saatleri"
                details={["Pazartesi - Cuma: 09:00 - 18:00", "Cumartesi: 10:00 - 14:00"]}
              />
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-blue-950 mb-4">Sosyal Medya</h3>
              <div className="flex space-x-4">
                <SocialButton icon={<Facebook size={20} />} href="#" />
                <SocialButton icon={<Twitter size={20} />} href="#" />
                <SocialButton icon={<Instagram size={20} />} href="#" />
                <SocialButton icon={<Linkedin size={20} />} href="#" />
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-blue-950 mb-6">Mesaj Gönderin</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-3 py-2 border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    E-posta Adresi
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-3 py-2 border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {errors.subject && <p className="mt-2 text-sm text-red-600">{errors.subject}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                ></textarea>
                {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-950 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                    isLoading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    'Gönderiliyor...'
                  ) : (
                    <>
                      Mesaj Gönder
                      <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </div>
              
              {isSuccess && (
                <div className="rounded-md bg-green-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">
                        Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfoItem = ({ icon, title, details }) => (
  <div className="flex">
    <div className="flex-shrink-0">{icon}</div>
    <div className="ml-4">
      <h3 className="text-sm font-medium text-blue-950">{title}</h3>
      <div className="mt-1 text-sm text-gray-600 space-y-1">
        {details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
    </div>
  </div>
);

const SocialButton = ({ icon, href }) => (
  <a 
    href={href} 
    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
  >
    {icon}
  </a>
);

export default ContactPage;