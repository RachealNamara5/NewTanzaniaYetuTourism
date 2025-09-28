import React, { useState, useEffect } from 'react';
import { useContactSubmission, useMeetingRequest } from '../hooks/useContact';

const Contactus = () => {
  const { submitContact, isSubmitting: isSubmittingContact } = useContactSubmission();
  const { submitMeeting, isSubmitting: isSubmittingMeeting } = useMeetingRequest();
  
  const [submitted, setSubmitted] = useState(false);
  const [meetingSubmitted, setMeetingSubmitted] = useState(false);
  const [showMeetingForm, setShowMeetingForm] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    country: '',
    message: '',
  });
  
  const [meetingData, setMeetingData] = useState({
    name: '',
    contact: '',
    date: '',
  });

  // Slideshow images - Tanzania/Safari themed
  const slides = [
    {
      image: 'https://www.adventure-travellers.com/imgs/pic/3-days-murchison-falls-safari.jpg',
      title: 'Experience Wild Africa',
      subtitle: 'Connect with nature like never before'
    },
    {
      image: 'https://images.unsplash.com/photo-1726030040596-a8cad43c5363?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAzfHxraWxpbWFuamFyb3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Mount Kilimanjaro',
      subtitle: 'Reach new heights with us'
    },
    {
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&auto=format&fit=crop&q=60',
      title: 'Serengeti Adventures',
      subtitle: 'Witness the great migration'
    },
    {
      image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=1200&auto=format&fit=crop&q=60',
      title: 'Cultural Immersion',
      subtitle: 'Discover authentic Tanzania'
    },
    {
      image: '	https://www.adventure-travellers.com/imgs/pic/download%20(10).jpeg',
      title: 'Safari Magic',
      subtitle: 'Create memories that last forever'
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  // Mock country list
  const countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 
    'Italy', 'Spain', 'Netherlands', 'Switzerland', 'Sweden', 'Norway', 'Denmark',
    'Kenya', 'Uganda', 'Rwanda', 'South Africa', 'Botswana', 'Zambia', 'Zimbabwe'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMeetingInputChange = (e) => {
    const { name, value } = e.target;
    setMeetingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const contactData = {
      name: formData.name,
      email: formData.email,
      phone: formData.contact,
      country: formData.country,
      message: formData.message
    };

    submitContact(contactData, {
      onSuccess: () => {
      setSubmitted(true);
      setFormData({ name: '', contact: '', email: '', country: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
    });
  };

  const handleMeetingSubmit = async (e) => {
    e.preventDefault();
    
    const meetingRequestData = {
      name: meetingData.name,
      phone: meetingData.contact,
      preferred_date: meetingData.date
    };

    submitMeeting(meetingRequestData, {
      onSuccess: () => {
      setMeetingSubmitted(true);
      setMeetingData({ name: '', contact: '', date: '' });
      setShowMeetingForm(false);
      setTimeout(() => setMeetingSubmitted(false), 5000);
    }
    });
  };

  const toggleMeetingForm = () => {
    setShowMeetingForm(!showMeetingForm);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Header with Slideshow Background */}
      <section className="relative text-white overflow-hidden h-[60vh] flex items-center justify-center">
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
              Contact Us
            </h1>
            <div className="text-lg md:text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
              <span className="block animate-slide-up" style={{ animationDelay: '0.3s' }}>
                {slides[currentSlide]?.title}
              </span>
              <span 
                className="block text-base md:text-lg mt-2 animate-slide-up opacity-90" 
                style={{ 
                  animationDelay: '0.6s',
                  color: '#9acd32' 
                }}
              >
                {slides[currentSlide]?.subtitle}
              </span>
            </div>
            
            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.9s' }}>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: '#228b22' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Send Message
              </a>
              
              <a
                href="https://wa.me/256766089652"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-green-700"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Slideshow Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white shadow-md scale-110' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-6 right-6 animate-bounce">
          <svg 
            className="w-6 h-6 text-white opacity-70" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Contact Methods - Enhanced with your color scheme */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2f4f2f' }}>
              How to Reach Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're available through multiple channels to ensure you get the support you need for your Tanzania adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: '#228b22' }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2f4f2f' }}>Phone</h3>
              <p className="text-gray-600 mb-4">Direct voice communication for urgent inquiries</p>
              <a
                href="tel:+256766089652"
                className="font-semibold hover:underline"
                style={{ color: '#228b22' }}
              >
                +256 766 089 652
              </a>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: '#228b22' }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2f4f2f' }}>Email</h3>
              <p className="text-gray-600 mb-4">Detailed inquiries and formal communication</p>
              <a
                href="mailto:tanzaniayetu@gmail.com"
                className="font-semibold hover:underline"
                style={{ color: '#228b22' }}
              >
                tanzaniayetu@gmail.com
              </a>
            </div>

            {/* Address */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: '#228b22' }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2f4f2f' }}>Address</h3>
              <p className="text-gray-600 mb-4">Visit our office for in-person consultation</p>
              <p className="font-semibold" style={{ color: '#228b22' }}>
                Arusha, Tanzania
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section - Using your original design concept */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Methods - Enhanced */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#2f4f2f' }}>
                  Connect With Us
                </h2>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  We're here to help you plan your dream safari. Reach out through WhatsApp, 
                  follow us on social media, or visit our office in Arusha for personalized consultation.
                </p>
              </div>

              {/* Social Media & Contact */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-6" style={{ color: '#2f4f2f' }}>
                  Follow Our Safari Adventures
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#228b22' }}>
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </div>
                    <div>
                      <a href="https://twitter.com/tanzaniayetu" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" style={{ color: '#228b22' }}>
                        @tanzaniayetu
                      </a>
                      <p className="text-sm text-gray-600">Follow for daily safari updates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#228b22' }}>
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.690 0 1.029-.653 2.567-.992 3.992-.282 1.195.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.744-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001"/>
                      </svg>
                    </div>
                    <div>
                      <a href="https://tiktok.com/@tanzaniayetutravels" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" style={{ color: '#228b22' }}>
                        @tanzaniayetutravels
                      </a>
                      <p className="text-sm text-gray-600">Watch our safari videos</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#228b22' }}>
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div>
                      <a href="https://facebook.com/tanzaniayetutravels" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" style={{ color: '#228b22' }}>
                        Tanzania Yetu Travels
                      </a>
                      <p className="text-sm text-gray-600">Join our community</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/256766089652"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                  style={{ backgroundColor: '#03491d' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#029719'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#03491d'}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white border-2 border-gray-200 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-6" style={{ color: '#2f4f2f' }}>
                  Why Choose Tanzania Yetu?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#9acd32' }}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Expert Local Knowledge</h4>
                      <p className="text-gray-600 text-sm">Born and raised guides with intimate knowledge of Tanzania's wildlife and culture</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#9acd32' }}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">24/7 Support</h4>
                      <p className="text-gray-600 text-sm">Round-the-clock assistance before, during, and after your safari</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#9acd32' }}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Customized Itineraries</h4>
                      <p className="text-gray-600 text-sm">Tailored experiences that match your interests, budget, and timeline</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Using your original styling concept */}
            <div 
              className="relative rounded-xl overflow-hidden"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1650668302253-3fc13879ec85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW4lMjBraWxpbWFuamFyb3xlbnwwfHwwfHx8MA%3D%3D)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay */}
              <div 
                className="absolute inset-0"
                style={{ backgroundColor: 'rgba(47, 79, 47, 0.7)' }}
              ></div>
              
              {/* Form Content */}
              <div className="relative z-10 p-8">
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#9acd32' }}>
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded border border-yellow-green-300 bg-white bg-opacity-90 text-gray-800 focus:outline-none focus:ring-2"
                      style={{ 
                        borderColor: '#9acd32',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        color: '#3d573d'
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact" className="block text-sm font-semibold text-white mb-1">
                      Contact
                    </label>
                    <input
                      type="tel"
                      id="contact"
                      name="contact"
                      placeholder="Your Contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded border border-yellow-green-300 bg-white bg-opacity-90 text-gray-800 focus:outline-none focus:ring-2"
                      style={{ 
                        borderColor: '#9acd32',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        color: '#3d573d'
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded border border-yellow-green-300 bg-white bg-opacity-90 text-gray-800 focus:outline-none focus:ring-2"
                      style={{ 
                        borderColor: '#9acd32',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        color: '#3d573d'
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-semibold text-white mb-1">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded border border-yellow-green-300 bg-white bg-opacity-90 text-gray-800 focus:outline-none focus:ring-2"
                      style={{ 
                        borderColor: '#9acd32',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        color: '#3d573d'
                      }}
                    >
                      <option value="">-- Select your country --</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full p-3 rounded border border-yellow-green-300 bg-white bg-opacity-90 text-gray-800 focus:outline-none focus:ring-2 resize-vertical"
                      style={{ 
                        borderColor: '#9acd32',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        color: '#3d573d'
                      }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmittingContact}
                    className="w-full text-white px-6 py-3 rounded font-semibold transition-all duration-300 transform hover:scale-[1.02]"
                    style={{
                      background: 'linear-gradient(45deg, #228b22, #9acd32)',
                      opacity: isSubmittingContact ? 0.7 : 1
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmittingContact) {
                        e.target.style.background = 'linear-gradient(45deg, #9acd32, #228b22)';
                      }
                    }}
                    onMouseLeave={(e) => e.target.style.background = 'linear-gradient(45deg, #228b22, #9acd32)'}
                  >
                    {isSubmittingContact ? 'Sending...' : 'Send Message'}
                  </button>
                </form>

                {submitted && (
                  <div className="mt-4 p-3 rounded text-center text-white" style={{ backgroundColor: '#228b22' }}>
                    Thank you! We'll get back to you soon.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section - Reduced Size */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* CEO Info */}
              <div className="p-6 lg:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#2f4f2f' }}>
                    Meet Our CEO
                  </h2>
                  <div className="w-16 h-1 rounded" style={{ backgroundColor: '#228b22' }}></div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#228b22' }}>
                      Mugabe Robert
                    </h3>
                    <p className="text-base font-semibold text-gray-600 mb-3">
                      Founder & CEO • Tourism Expert • Cultural Ambassador
                    </p>
                  </div>

                  <div className="space-y-3 text-gray-700 text-sm">
                    <p className="leading-relaxed">
                      Mugabe Robert, our visionary CEO, was born and raised in the Kabaka's (King of Buganda) 
                      palace of Mengo. His passion for travel began at age 14, guiding tourists at the palace.
                    </p>
                    <p className="leading-relaxed">
                      With tourism education in England and training in South Africa, Robert brings 
                      extensive knowledge of African travel. For him, travel is a way of life that 
                      connects hearts across cultures and creates lasting memories.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2" style={{ color: '#2f4f2f' }}>
                      Schedule a Personal Consultation
                    </h4>
                    <p className="text-gray-600 mb-3 text-xs">
                      Ready to plan your dream safari? Schedule a personal meeting with Robert to 
                      bring your adventure to life with expert insights and personalized recommendations.
                    </p>
                    <button
                      onClick={toggleMeetingForm}
                      className="text-white px-4 py-2 rounded font-semibold transition-all duration-300 transform hover:scale-105 text-sm"
                      style={{ backgroundColor: '#228b22' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#1e7b1e'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#228b22'}
                    >
                      {showMeetingForm ? 'Hide Form' : 'Schedule a Meeting'}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* CEO Image */}
              <div className="relative bg-gradient-to-br from-green-100 to-green-200 p-6 lg:p-8 flex items-center justify-center">
                <div className="relative">
                  <div 
                    className="absolute inset-0 rounded-full transform rotate-6 opacity-20"
                    style={{ backgroundColor: '#228b22' }}
                  ></div>
                  <img
                    src="https://www.uganda-safaris-tours.com/ug/img/team/robert1.jpg"
                    alt="CEO Mugabe Robert"
                    className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover shadow-xl border-4 border-white"
                  />
                  <div 
                    className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: '#9acd32' }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Meeting Form */}
          {showMeetingForm && (
            <div className="mt-6 bg-white p-6 lg:p-8 rounded-2xl shadow-lg">
              <div className="max-w-xl mx-auto">
                <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#2f4f2f' }}>
                  Schedule a Meeting with Robert
                </h3>
                <form onSubmit={handleMeetingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="meetingName" className="block text-sm font-semibold mb-1" style={{ color: '#2f4f2f' }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        id="meetingName"
                        name="name"
                        placeholder="Your Name"
                        value={meetingData.name}
                        onChange={handleMeetingInputChange}
                        required
                        className="w-full p-3 rounded border-2 focus:outline-none focus:ring-2 transition-all duration-300"
                        style={{ 
                          borderColor: '#9acd32',
                          focusRingColor: '#228b22'
                        }}
                      />
                    </div>
                    <div>
                      <label htmlFor="meetingContact" className="block text-sm font-semibold mb-1" style={{ color: '#2f4f2f' }}>
                        Contact *
                      </label>
                      <input
                        type="tel"
                        id="meetingContact"
                        name="contact"
                        placeholder="Your Contact"
                        value={meetingData.contact}
                        onChange={handleMeetingInputChange}
                        required
                        className="w-full p-3 rounded border-2 focus:outline-none focus:ring-2 transition-all duration-300"
                        style={{ 
                          borderColor: '#9acd32',
                          focusRingColor: '#228b22'
                        }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="meetingDate" className="block text-sm font-semibold mb-1" style={{ color: '#2f4f2f' }}>
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="meetingDate"
                      name="date"
                      value={meetingData.date}
                      onChange={handleMeetingInputChange}
                      required
                      className="w-full p-3 rounded border-2 focus:outline-none focus:ring-2 transition-all duration-300"
                      style={{ 
                        borderColor: '#9acd32',
                        focusRingColor: '#228b22'
                      }}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmittingMeeting}
                    className="w-full text-white px-6 py-3 rounded font-semibold transition-all duration-300 transform hover:scale-[1.02]"
                    style={{
                      background: 'linear-gradient(45deg, #228b22, #9acd32)',
                      opacity: isSubmittingMeeting ? 0.7 : 1
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmittingMeeting) {
                        e.target.style.background = 'linear-gradient(45deg, #9acd32, #228b22)';
                      }
                    }}
                    onMouseLeave={(e) => e.target.style.background = 'linear-gradient(45deg, #228b22, #9acd32)'}
                  >
                    {isSubmittingMeeting ? 'Scheduling...' : 'Schedule Meeting'}
                  </button>
                </form>
                
                {meetingSubmitted && (
                  <div className="mt-4 p-3 rounded text-center text-white" style={{ backgroundColor: '#228b22' }}>
                    <svg className="w-5 h-5 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Meeting request sent! We'll confirm your appointment soon.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Contactus;