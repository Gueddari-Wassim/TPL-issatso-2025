import React, { useState } from 'react';
import { Mail, Send, Instagram, Facebook } from 'lucide-react';
import emailjs from "@emailjs/browser";
import Footer from './Footer';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "✅ Message envoyé avec succès !",
      });

      setFormData({
        fullName: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "❌ Échec de l'envoi. Réessayez plus tard.",
      });
    }
  };

  return (
    <>
    <section className="py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
            <span className="text-emerald-700 font-extrabold">Connectons</span>-Nous
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-green-300 mx-auto mb-4"></div>
          <p className="text-center mx-auto max-w-xl text-sm sm:text-base">
            Prêt à entamer une conversation ? Nous serions ravis d'échanger avec vous.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Get In Touch Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Entrer en contact</h3>
            
            <div className="space-y-6">
              {/* Email */}
              <a href='mailto:issatsotpl@gmail.com' target='_blank' className="flex items-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Adresse Email</h4>
                  <p className="text-gray-600">issatsotpl@gmail.com</p>
                </div>
              </a>

              {/* Insta */}
              <a href='https://www.instagram.com/tpl_issatso/' target='_blank' className="flex items-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Instagram</h4>
                  <p className="text-gray-600">tpl_issatso</p>
                </div>
              </a>

              {/* Facebook */}
              <a href='https://www.facebook.com/profile.php?id=61566916355044&locale=fr_FR' target='_blank' className="flex items-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Facebook className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Facebook</h4>
                  <p className="text-gray-600">TPL IssatSo Club</p>
                </div>
              </a>
            </div>
          </div>

          {/* Send Message Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Envoyez-nous un message</h3>
            
            <div className="space-y-6">
              <form onSubmit={handleSubmit}>
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom et prénom
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                    placeholder="Entrez votre nom complet"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 mt-4">
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                    placeholder="Entrez votre adresse e-mail"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 mt-4">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 resize-none"
                    placeholder="Ton Message"
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="w-full mt-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {formStatus.submitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Envoi...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer un Message</span>
                    </>
                  )}
                </button>

                {formStatus.message && (
                  <div className={`mt-4 font-semibold ${formStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                🔒 Vos informations sont sécurisées et ne seront jamais partagées
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
    
    
  );
}
