// import React from 'react';
// import './Services.css';

// const Services = () => {
//   return (
//     <div className="services-container">
//       <h1>Our Safari Services</h1>
//       <p className="subtitle">From thrilling wildlife encounters to cultural immersion, we offer comprehensive safari experiences tailored to your adventure dreams.</p>
//       <div className="services-grid">
//         <div className="service-card">
//           <span role="img" aria-label="adventure">🌍</span>
//           <h3>Safari Adventures</h3>
//           <p>Guided wildlife safaris through Serengeti, Ngorongoro Crater, and Tarangire National Parks.</p>
//         </div>
//         <div className="service-card">
//           <span role="img" aria-label="camera">📷</span>
//           <h3>Photography Tours</h3>
//           <p>Specialized photography safaris to capture the Big Five and stunning landscapes.</p>
//         </div>
//         <div className="service-card">
//           <span role="img" aria-label="culture">🌐</span>
//           <h3>Cultural Experiences</h3>
//           <p>Visit Maasai villages and learn about traditional Tanzanian culture and customs.</p>
//         </div>
//         <div className="service-card">
//           <span role="img" aria-label="group">👥</span>
//           <h3>Group & Private Tours</h3>
//           <p>Customized tours for families, couples, and groups with flexible itineraries.</p>
//         </div>
//         <div className="service-card">
//           <span role="img" aria-label="camp">🏕️</span>
//           <h3>Camping Safaris</h3>
//           <p>Authentic bush camping experiences under the African stars.</p>
//         </div>
//         <div className="service-card">
//           <span role="img" aria-label="bird">🐦</span>
//           <h3>Bird Watching</h3>
//           <p>Discover over 1,000 bird species across Tanzania's diverse ecosystems.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

// import React, { useState, useEffect } from 'react';

// const Services = () => {
//   const [activeCard, setActiveCard] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const services = [
//     {
//       id: 1,
//       icon: "🌍",
//       title: "Safari Adventures",
//       description: "Guided wildlife safaris through Serengeti, Ngorongoro Crater, and Tarangire National Parks.",
//       features: ["Big Five encounters", "Professional guides", "4x4 safari vehicles", "Best wildlife viewing times"],
//       duration: "3-14 days",
//       price: "From $180/day"
//     },
//     {
//       id: 2,
//       icon: "📷",
//       title: "Photography Tours",
//       description: "Specialized photography safaris to capture the Big Five and stunning landscapes.",
//       features: ["Golden hour sessions", "Photography workshops", "Equipment rental", "Professional guidance"],
//       duration: "5-10 days",
//       price: "From $250/day"
//     },
//     {
//       id: 3,
//       icon: "🌐",
//       title: "Cultural Experiences",
//       description: "Visit Maasai villages and learn about traditional Tanzanian culture and customs.",
//       features: ["Village visits", "Traditional dances", "Local crafts", "Authentic meals"],
//       duration: "1-3 days",
//       price: "From $120/day"
//     },
//     {
//       id: 4,
//       icon: "👥",
//       title: "Group & Private Tours",
//       description: "Customized tours for families, couples, and groups with flexible itineraries.",
//       features: ["Tailored experiences", "Flexible scheduling", "Private vehicles", "Dedicated guides"],
//       duration: "Customizable",
//       price: "Custom pricing"
//     },
//     {
//       id: 5,
//       icon: "🏕️",
//       title: "Camping Safaris",
//       description: "Authentic bush camping experiences under the African stars.",
//       features: ["Bush camping", "Campfire stories", "Night sounds", "Stargazing"],
//       duration: "3-7 days",
//       price: "From $150/day"
//     },
//     {
//       id: 6,
//       icon: "🐦",
//       title: "Bird Watching",
//       description: "Discover over 1,000 bird species across Tanzania's diverse ecosystems.",
//       features: ["Expert birding guides", "Binocular rental", "Bird checklists", "Endemic species"],
//       duration: "2-8 days",
//       price: "From $160/day"
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       country: "USA",
//       text: "Absolutely magical! The Serengeti exceeded all expectations. Our guide was knowledgeable and passionate.",
//       rating: 5
//     },
//     {
//       name: "Hans Mueller",
//       country: "Germany",
//       text: "Professional service and unforgettable wildlife encounters. The cultural visit was a highlight!",
//       rating: 5
//     },
//     {
//       name: "Priya Sharma",
//       country: "India",
//       text: "Photography tour was phenomenal. Captured memories that will last a lifetime!",
//       rating: 5
//     }
//   ];

//   const stats = [
//     { number: "15+", label: "Years Experience" },
//     { number: "5000+", label: "Happy Travelers" },
//     { number: "25+", label: "Wildlife Parks" },
//     { number: "98%", label: "Satisfaction Rate" }
//   ];

//   return (
//     <div className="services-container" style={{ 
//       background: 'linear-gradient(135deg, #2f4f2f 0%, #228b22 100%)',
//       minHeight: '100vh',
//       fontFamily: 'system-ui, sans-serif'
//     }}>
//       {/* Hero Section */}
//       <div style={{
//         background: 'linear-gradient(rgba(47, 79, 47, 0.8), rgba(34, 139, 34, 0.8)), url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 400\'><path d=\'M0,100 Q300,50 600,100 T1200,100 L1200,400 L0,400 Z\' fill=\'%23f0f8f0\' opacity=\'0.1\'/></svg>")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         padding: '80px 20px',
//         textAlign: 'center',
//         color: 'white',
//         position: 'relative',
//         overflow: 'hidden'
//       }}>
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'radial-gradient(circle at 30% 50%, rgba(154, 205, 50, 0.2) 0%, transparent 70%)',
//           animation: 'pulse 4s ease-in-out infinite'
//         }}></div>
        
//         <div style={{ position: 'relative', zIndex: 2, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 1s ease' }}>
//           <h1 style={{
//             fontSize: 'clamp(2.5rem, 5vw, 4rem)',
//             fontWeight: 'bold',
//             marginBottom: '40px',
//             textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
//             background: 'linear-gradient(45deg, #9acd32, #ffffff)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             backgroundClip: 'text'
//           }}>
//             Our Safari Services
//           </h1>

//         </div>
//       </div>

//       {/* Services Grid */}
//       <div style={{ padding: '80px 20px', background: '#f0f8f0' }}>
//         <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
//           <h2 style={{
//             textAlign: 'center',
//             fontSize: '2.5rem',
//             color: '#2f4f2f',
//             marginBottom: '20px',
//             fontWeight: 'bold'
//           }}>
//             Our Safari Experiences
//           </h2>
//           <p style={{
//             textAlign: 'center',
//             fontSize: '1.1rem',
//             color: '#666',
//             maxWidth: '600px',
//             margin: '0 auto 60px',
//             lineHeight: '1.6'
//           }}>
//             Choose from our carefully crafted safari packages, each designed to showcase the best of Tanzania's wildlife and culture.
//           </p>

//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
//             gap: '30px'
//           }}>
//             {services.map((service, index) => (
//               <div
//                 key={service.id}
//                 style={{
//                   background: activeCard === service.id 
//                     ? 'linear-gradient(135deg, #9acd32, #228b22)' 
//                     : 'white',
//                   padding: '30px',
//                   borderRadius: '20px',
//                   textAlign: 'left',
//                   cursor: 'pointer',
//                   transition: 'all 0.4s ease',
//                   transform: activeCard === service.id ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
//                   boxShadow: activeCard === service.id 
//                     ? '0 25px 50px rgba(47, 79, 47, 0.3)' 
//                     : '0 10px 30px rgba(0, 0, 0, 0.1)',
//                   border: `3px solid ${activeCard === service.id ? '#2f4f2f' : 'transparent'}`,
//                   color: activeCard === service.id ? 'white' : '#333',
//                   position: 'relative',
//                   overflow: 'hidden'
//                 }}
//                 onMouseEnter={() => setActiveCard(service.id)}
//                 onMouseLeave={() => setActiveCard(null)}
//               >
//                 {/* Background decoration */}
//                 <div style={{
//                   position: 'absolute',
//                   top: -50,
//                   right: -50,
//                   width: 100,
//                   height: 100,
//                   borderRadius: '50%',
//                   background: activeCard === service.id 
//                     ? 'rgba(255, 255, 255, 0.1)' 
//                     : 'rgba(154, 205, 50, 0.1)',
//                   transition: 'all 0.4s ease'
//                 }}></div>
                
//                 <div style={{ position: 'relative', zIndex: 2 }}>
//                   <div style={{
//                     fontSize: '3rem',
//                     marginBottom: '20px',
//                     display: 'inline-block',
//                     padding: '10px',
//                     background: activeCard === service.id 
//                       ? 'rgba(255, 255, 255, 0.2)' 
//                       : 'rgba(154, 205, 50, 0.2)',
//                     borderRadius: '15px',
//                     transition: 'all 0.4s ease'
//                   }}>
//                     {service.icon}
//                   </div>
                  
//                   <h3 style={{
//                     fontSize: '1.5rem',
//                     marginBottom: '15px',
//                     fontWeight: 'bold',
//                     color: activeCard === service.id ? 'white' : '#2f4f2f'
//                   }}>
//                     {service.title}
//                   </h3>
                  
//                   <p style={{
//                     marginBottom: '20px',
//                     lineHeight: '1.6',
//                     opacity: 0.9
//                   }}>
//                     {service.description}
//                   </p>

//                   {/* Features */}
//                   <div style={{ marginBottom: '20px' }}>
//                     <h4 style={{ 
//                       fontSize: '1rem', 
//                       marginBottom: '10px', 
//                       fontWeight: 'bold',
//                       opacity: 0.9 
//                     }}>
//                       Includes:
//                     </h4>
//                     <ul style={{ 
//                       listStyle: 'none', 
//                       padding: 0, 
//                       margin: 0,
//                       opacity: 0.8
//                     }}>
//                       {service.features.map((feature, idx) => (
//                         <li key={idx} style={{ 
//                           marginBottom: '5px',
//                           paddingLeft: '20px',
//                           position: 'relative'
//                         }}>
//                           <span style={{
//                             position: 'absolute',
//                             left: 0,
//                             color: activeCard === service.id ? '#fff' : '#9acd32'
//                           }}>✓</span>
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Price and Duration */}
//                   <div style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     paddingTop: '15px',
//                     borderTop: `1px solid ${activeCard === service.id ? 'rgba(255,255,255,0.3)' : 'rgba(47,79,47,0.2)'}`
//                   }}>
//                     <div>
//                       <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Duration</div>
//                       <div style={{ fontWeight: 'bold' }}>{service.duration}</div>
//                     </div>
//                     <div style={{ textAlign: 'right' }}>
//                       <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Price</div>
//                       <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{service.price}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Why Choose Tanzania */}
//       <div style={{
//         background: 'linear-gradient(135deg, #228b22, #2f4f2f)',
//         padding: '80px 20px',
//         color: 'white'
//       }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
//           <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 'bold' }}>
//             Why Choose Tanzania?
//           </h2>
//           <p style={{ fontSize: '1.2rem', marginBottom: '60px', opacity: 0.9 }}>
//             Tanzania offers some of Africa's most iconic wildlife experiences and cultural treasures
//           </p>
          
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//             gap: '40px'
//           }}>
//             {[
//               {
//                 icon: '🦁',
//                 title: 'The Big Five',
//                 desc: 'Lion, Elephant, Buffalo, Leopard, and Rhino in their natural habitat'
//               },
//               {
//                 icon: '🏔️',
//                 title: 'Mount Kilimanjaro',
//                 desc: "Africa's highest peak and the world's tallest free-standing mountain"
//               },
//               {
//                 icon: '🌊',
//                 title: 'Zanzibar Beaches',
//                 desc: 'Pristine white sand beaches and crystal-clear Indian Ocean waters'
//               },
//               {
//                 icon: '🎭',
//                 title: 'Rich Culture',
//                 desc: 'Over 120 tribes with unique traditions, languages, and customs'
//               }
//             ].map((item, index) => (
//               <div key={index} style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 padding: '30px',
//                 borderRadius: '20px',
//                 backdropFilter: 'blur(10px)',
//                 border: '1px solid rgba(154, 205, 50, 0.3)'
//               }}>
//                 <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{item.icon}</div>
//                 <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#9acd32' }}>{item.title}</h3>
//                 <p style={{ opacity: 0.9, lineHeight: '1.5' }}>{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Testimonials */}
//       <div style={{ background: '#f0f8f0', padding: '80px 20px' }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
//           <h2 style={{ fontSize: '2.5rem', color: '#2f4f2f', marginBottom: '60px', fontWeight: 'bold' }}>
//             What Our Travelers Say
//           </h2>
          
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//             gap: '30px'
//           }}>
//             {testimonials.map((testimonial, index) => (
//               <div key={index} style={{
//                 background: 'white',
//                 padding: '30px',
//                 borderRadius: '20px',
//                 boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
//                 border: '3px solid #9acd32',
//                 position: 'relative'
//               }}>
//                 <div style={{ fontSize: '3rem', color: '#9acd32', marginBottom: '20px' }}>❝</div>
//                 <p style={{ 
//                   fontStyle: 'italic', 
//                   marginBottom: '20px', 
//                   lineHeight: '1.6',
//                   color: '#666'
//                 }}>
//                   {testimonial.text}
//                 </p>
//                 <div style={{ 
//                   display: 'flex', 
//                   justifyContent: 'space-between', 
//                   alignItems: 'center',
//                   borderTop: '1px solid #eee',
//                   paddingTop: '15px'
//                 }}>
//                   <div>
//                     <div style={{ fontWeight: 'bold', color: '#2f4f2f' }}>{testimonial.name}</div>
//                     <div style={{ fontSize: '0.9rem', color: '#666' }}>{testimonial.country}</div>
//                   </div>
//                   <div style={{ color: '#9acd32', fontSize: '1.2rem' }}>
//                     {'★'.repeat(testimonial.rating)}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Call to Action */}
//       <div style={{
//         background: 'linear-gradient(135deg, #2f4f2f, #228b22)',
//         padding: '80px 20px',
//         color: 'white',
//         textAlign: 'center'
//       }}>
//         <div style={{ maxWidth: '800px', margin: '0 auto' }}>
//           <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 'bold' }}>
//             Ready for Your Tanzanian Adventure?
//           </h2>
//           <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.9 }}>
//             Contact us today to start planning your dream safari experience. Our expert team is ready to create unforgettable memories for you.
//           </p>
          
//           <div style={{ 
//             display: 'flex', 
//             flexWrap: 'wrap', 
//             gap: '20px', 
//             justifyContent: 'center',
//             marginBottom: '40px'
//           }}>
//             <button style={{
//               background: '#9acd32',
//               color: '#2f4f2f',
//               border: 'none',
//               padding: '15px 30px',
//               borderRadius: '30px',
//               fontSize: '1.1rem',
//               fontWeight: 'bold',
//               cursor: 'pointer',
//               transition: 'all 0.3s ease',
//               boxShadow: '0 5px 15px rgba(154, 205, 50, 0.3)'
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'translateY(-3px)';
//               e.target.style.boxShadow = '0 8px 25px rgba(154, 205, 50, 0.4)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = '0 5px 15px rgba(154, 205, 50, 0.3)';
//             }}>
//               📞 Book Your Safari Now
//             </button>
            
//             <button style={{
//               background: 'transparent',
//               color: 'white',
//               border: '2px solid #9acd32',
//               padding: '15px 30px',
//               borderRadius: '30px',
//               fontSize: '1.1rem',
//               fontWeight: 'bold',
//               cursor: 'pointer',
//               transition: 'all 0.3s ease'
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.background = '#9acd32';
//               e.target.style.color = '#2f4f2f';
//               e.target.style.transform = 'translateY(-3px)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'transparent';
//               e.target.style.color = 'white';
//               e.target.style.transform = 'translateY(0)';
//             }}>
//               💬 Get Free Consultation
//             </button>
//           </div>
          
//           <div style={{ 
//             display: 'flex', 
//             flexWrap: 'wrap',
//             justifyContent: 'center', 
//             gap: '30px',
//             opacity: 0.8
//           }}>
//             <div>📧 info@tanzaniasafaris.com</div>
//             <div>📱 +255 123 456 789</div>
//             <div>📍 Arusha, Tanzania</div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes pulse {
//           0%, 100% { opacity: 0.3; }
//           50% { opacity: 0.7; }
//         }
        
//         @media (max-width: 768px) {
//           .services-container h1 {
//             font-size: 2.5rem !important;
//           }
//           .services-container h2 {
//             font-size: 2rem !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Services;


// import React, { useState, useEffect } from 'react';

// const Services = () => {
//   const [activeCard, setActiveCard] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const services = [
//     {
//       id: 1,
//       image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=100&q=80",
//       title: "Safari Adventures",
//       description: "Guided wildlife safaris through Serengeti, Ngorongoro Crater, and Tarangire National Parks.",
//       features: ["Big Five encounters", "Professional guides", "4x4 safari vehicles", "Best wildlife viewing times"],
//       duration: "3-14 days",
//       price: "From $180/day"
//     },
//     {
//       id: 2,
//       image: "https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?auto=format&fit=crop&w=100&q=80",
//       title: "Photography Tours",
//       description: "Specialized photography safaris to capture the Big Five and stunning landscapes.",
//       features: ["Golden hour sessions", "Photography workshops", "Equipment rental", "Professional guidance"],
//       duration: "5-10 days",
//       price: "From $250/day"
//     },
//     {
//       id: 3,
//       image: "https://images.unsplash.com/photo-1590005176489-7766f1eb23b8?auto=format&fit=crop&w=100&q=80",
//       title: "Cultural Experiences",
//       description: "Visit Maasai villages and learn about traditional Tanzanian culture and customs.",
//       features: ["Village visits", "Traditional dances", "Local crafts", "Authentic meals"],
//       duration: "1-3 days",
//       price: "From $120/day"
//     },
//     {
//       id: 4,
//       image: "https://images.unsplash.com/photo-1517479149777-5f2be8a069c8?auto=format&fit=crop&w=100&q=80",
//       title: "Group & Private Tours",
//       description: "Customized tours for families, couples, and groups with flexible itineraries.",
//       features: ["Tailored experiences", "Flexible scheduling", "Private vehicles", "Dedicated guides"],
//       duration: "Customizable",
//       price: "Custom pricing"
//     },
//     {
//       id: 5,
//       image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e206?auto=format&fit=crop&w=100&q=80",
//       title: "Camping Safaris",
//       description: "Authentic bush camping experiences under the African stars.",
//       features: ["Bush camping", "Campfire stories", "Night sounds", "Stargazing"],
//       duration: "3-7 days",
//       price: "From $150/day"
//     },
//     {
//       id: 6,
//       image: "https://images.unsplash.com/photo-1595966146146-1b0adb714c82?auto=format&fit=crop&w=100&q=80",
//       title: "Bird Watching",
//       description: "Discover over 1,000 bird species across Tanzania's diverse ecosystems.",
//       features: ["Expert birding guides", "Binocular rental", "Bird checklists", "Endemic species"],
//       duration: "2-8 days",
//       price: "From $160/day"
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       country: "USA",
//       text: "Absolutely magical! The Serengeti exceeded all expectations. Our guide was knowledgeable and passionate.",
//       rating: 5
//     },
//     {
//       name: "Hans Mueller",
//       country: "Germany",
//       text: "Professional service and unforgettable wildlife encounters. The cultural visit was a highlight!",
//       rating: 5
//     },
//     {
//       name: "Priya Sharma",
//       country: "India",
//       text: "Photography tour was phenomenal. Captured memories that will last a lifetime!",
//       rating: 5
//     }
//   ];

//   const stats = [
//     { number: "15+", label: "Years Experience" },
//     { number: "5000+", label: "Happy Travelers" },
//     { number: "25+", label: "Wildlife Parks" },
//     { number: "98%", label: "Satisfaction Rate" }
//   ];

//   return (
//     <div className="services-container" style={{ 
//       background: 'linear-gradient(135deg, #2f4f2f 0%, #228b22 100%)',
//       minHeight: '100vh',
//       fontFamily: 'system-ui, sans-serif'
//     }}>
//       {/* Hero Section */}
//       <div style={{
//         background: 'linear-gradient(rgba(47, 79, 47, 0.8), rgba(34, 139, 34, 0.8)), url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 400\'><path d=\'M0,100 Q300,50 600,100 T1200,100 L1200,400 L0,400 Z\' fill=\'%23f0f8f0\' opacity=\'0.1\'/></svg>")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         padding: '40px 20px', // Reduced padding from 80px to 40px to decrease height
//         textAlign: 'center',
//         color: 'white',
//         position: 'relative',
//         overflow: 'hidden'
//       }}>
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'radial-gradient(circle at 30% 50%, rgba(154, 205, 50, 0.2) 0%, transparent 70%)',
//           animation: 'pulse 4s ease-in-out infinite'
//         }}></div>
        
//         <div style={{ position: 'relative', zIndex: 2, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 1s ease' }}>
//           <h1 style={{
//             fontSize: 'clamp(2.5rem, 5vw, 4rem)',
//             fontWeight: 'bold',
//             marginBottom: '40px',
//             textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
//             background: 'linear-gradient(45deg, #9acd32, #ffffff)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             backgroundClip: 'text'
//           }}>
//             Our Safari Services
//           </h1>
//         </div>
//       </div>

//       {/* Services Grid */}
//       <div style={{ padding: '80px 20px', background: '#f0f8f0' }}>
//         <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
//           <h2 style={{
//             textAlign: 'center',
//             fontSize: '2.5rem',
//             color: '#2f4f2f',
//             marginBottom: '20px',
//             fontWeight: 'bold'
//           }}>
//             Our Safari Experiences
//           </h2>
//           <p style={{
//             textAlign: 'center',
//             fontSize: '1.1rem',
//             color: '#666',
//             maxWidth: '600px',
//             margin: '0 auto 60px',
//             lineHeight: '1.6'
//           }}>
//             Choose from our carefully crafted safari packages, each designed to showcase the best of Tanzania's wildlife and culture.
//           </p>

//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
//             gap: '30px'
//           }}>
//             {services.map((service, index) => (
//               <div
//                 key={service.id}
//                 style={{
//                   background: activeCard === service.id 
//                     ? 'linear-gradient(135deg, #9acd32, #228b22)' 
//                     : 'white',
//                   padding: '30px',
//                   borderRadius: '20px',
//                   textAlign: 'left',
//                   cursor: 'pointer',
//                   transition: 'all 0.4s ease',
//                   transform: activeCard === service.id ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
//                   boxShadow: activeCard === service.id 
//                     ? '0 25px 50px rgba(47, 79, 47, 0.3)' 
//                     : '0 10px 30px rgba(0, 0, 0, 0.1)',
//                   border: `3px solid ${activeCard === service.id ? '#2f4f2f' : 'transparent'}`,
//                   color: activeCard === service.id ? 'white' : '#333',
//                   position: 'relative',
//                   overflow: 'hidden'
//                 }}
//                 onMouseEnter={() => setActiveCard(service.id)}
//                 onMouseLeave={() => setActiveCard(null)}
//               >
//                 {/* Background decoration */}
//                 <div style={{
//                   position: 'absolute',
//                   top: -50,
//                   right: -50,
//                   width: 100,
//                   height: 100,
//                   borderRadius: '50%',
//                   background: activeCard === service.id 
//                     ? 'rgba(255, 255, 255, 0.1)' 
//                     : 'rgba(154, 205, 50, 0.1)',
//                   transition: 'all 0.4s ease'
//                 }}></div>
                
//                 <div style={{ position: 'relative', zIndex: 2 }}>
//                   <div style={{
//                     width: '60px',
//                     height: '60px',
//                     marginBottom: '20px',
//                     borderRadius: '50%',
//                     overflow: 'hidden',
//                     display: 'inline-block',
//                     background: activeCard === service.id 
//                       ? 'rgba(255, 255, 255, 0.2)' 
//                       : 'rgba(154, 205, 50, 0.2)',
//                     transition: 'all 0.4s ease'
//                   }}>
//                     <img 
//                       src={service.image}
//                       alt={service.title}
//                       style={{
//                         width: '100%',
//                         height: '100%',
//                         objectFit: 'cover'
//                       }}
//                     />
//                   </div>
                  
//                   <h3 style={{
//                     fontSize: '1.5rem',
//                     marginBottom: '15px',
//                     fontWeight: 'bold',
//                     color: activeCard === service.id ? 'white' : '#2f4f2f'
//                   }}>
//                     {service.title}
//                   </h3>
                  
//                   <p style={{
//                     marginBottom: '20px',
//                     lineHeight: '1.6',
//                     opacity: 0.9
//                   }}>
//                     {service.description}
//                   </p>

//                   {/* Features */}
//                   <div style={{ marginBottom: '20px' }}>
//                     <h4 style={{ 
//                       fontSize: '1rem', 
//                       marginBottom: '10px', 
//                       fontWeight: 'bold',
//                       opacity: 0.9 
//                     }}>
//                       Includes:
//                     </h4>
//                     <ul style={{ 
//                       listStyle: 'none', 
//                       padding: 0, 
//                       margin: 0,
//                       opacity: 0.8
//                     }}>
//                       {service.features.map((feature, idx) => (
//                         <li key={idx} style={{ 
//                           marginBottom: '5px',
//                           paddingLeft: '20px',
//                           position: 'relative'
//                         }}>
//                           <span style={{
//                             position: 'absolute',
//                             left: 0,
//                             color: activeCard === service.id ? '#fff' : '#9acd32'
//                           }}>✓</span>
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Price and Duration */}
//                   <div style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     paddingTop: '15px',
//                     borderTop: `1px solid ${activeCard === service.id ? 'rgba(255,255,255,0.3)' : 'rgba(47,79,47,0.2)'}`
//                   }}>
//                     <div>
//                       <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Duration</div>
//                       <div style={{ fontWeight: 'bold' }}>{service.duration}</div>
//                     </div>
//                     <div style={{ textAlign: 'right' }}>
//                       <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Price</div>
//                       <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{service.price}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Why Choose Tanzania */}
//       <div style={{
//         background: 'linear-gradient(135deg, #228b22, #2f4f2f)',
//         padding: '80px 20px',
//         color: 'white'
//       }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
//           <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 'bold' }}>
//             Why Choose Tanzania?
//           </h2>
//           <p style={{ fontSize: '1.2rem', marginBottom: '60px', opacity: 0.9 }}>
//             Tanzania offers some of Africa's most iconic wildlife experiences and cultural treasures
//           </p>
          
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//             gap: '40px'
//           }}>
//             {[
//               {
//                 image: 'https://images.unsplash.com/photo-1571950484792-c2cbbee9c88b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHRhbnphbmlhJTIwJTIwdGhlJTIwYmlnJTIwZml2ZXxlbnwwfHwwfHx8MA%3D%3Dhttps://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=100&q=80',
//                 title: 'The Big Five',
//                 desc: 'Lion, Elephant, Buffalo, Leopard, and Rhino in their natural habitat'
//               },
//               {
//                 image: 'https://plus.unsplash.com/premium_photo-1663045893961-535354f273b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fG1vdW50YWluJTIwa2lsaW1hbmphcm98ZW58MHx8MHx8fDA%3D',
//                 title: 'Mount Kilimanjaro',
//                 desc: "Africa's highest peak and the world's tallest free-standing mountain"
//               },
//               {
//                 image: 'https://images.unsplash.com/photo-1646667642307-e2bf4541284e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHRhbnphbmlhJTIwemFuemliYXIlMjBiZWFjaGVzfGVufDB8fDB8fHww',
//                 title: 'Zanzibar Beaches',
//                 desc: 'Pristine white sand beaches and crystal-clear Indian Ocean waters'
//               },
//               {
//                 image: 'https://images.unsplash.com/photo-1710559055582-c656d31324f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHRhbnphbmlhJTIwbmF0aXZlc3xlbnwwfHwwfHx8MA%3D%3D',
//                 title: 'Rich Culture',
//                 desc: 'Over 120 tribes with unique traditions, languages, and customs'
//               }
//             ].map((item, index) => (
//               <div key={index} style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 padding: '30px',
//                 borderRadius: '20px',
//                 backdropFilter: 'blur(10px)',
//                 border: '1px solid rgba(154, 205, 50, 0.3)'
//               }}>
//                 <div style={{
//                   width: '60px',
//                   height: '60px',
//                   margin: '0 auto 15px',
//                   borderRadius: '50%',
//                   overflow: 'hidden'
//                 }}>
//                   <img 
//                     src={item.image}
//                     alt={item.title}
//                     style={{
//                       width: '100%',
//                       height: '100%',
//                       objectFit: 'cover'
//                     }}
//                   />
//                 </div>
//                 <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#9acd32' }}>{item.title}</h3>
//                 <p style={{ opacity: 0.9, lineHeight: '1.5' }}>{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Testimonials */}
//       <div style={{ background: '#f0f8f0', padding: '80px 20px' }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
//           <h2 style={{ fontSize: '2.5rem', color: '#2f4f2f', marginBottom: '60px', fontWeight: 'bold' }}>
//             What Our Travelers Say
//           </h2>
          
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//             gap: '30px'
//           }}>
//             {testimonials.map((testimonial, index) => (
//               <div key={index} style={{
//                 background: 'white',
//                 padding: '30px',
//                 borderRadius: '20px',
//                 boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
//                 border: '3px solid #9acd32',
//                 position: 'relative'
//               }}>
//                 <div style={{ fontSize: '3rem', color: '#9acd32', marginBottom: '20px' }}>❝</div>
//                 <p style={{ 
//                   fontStyle: 'italic', 
//                   marginBottom: '20px', 
//                   lineHeight: '1.6',
//                   color: '#666'
//                 }}>
//                   {testimonial.text}
//                 </p>
//                 <div style={{ 
//                   display: 'flex', 
//                   justifyContent: 'space-between', 
//                   alignItems: 'center',
//                   borderTop: '1px solid #eee',
//                   paddingTop: '15px'
//                 }}>
//                   <div>
//                     <div style={{ fontWeight: 'bold', color: '#2f4f2f' }}>{testimonial.name}</div>
//                     <div style={{ fontSize: '0.9rem', color: '#666' }}>{testimonial.country}</div>
//                   </div>
//                   <div style={{ color: '#9acd32', fontSize: '1.2rem' }}>
//                     {'★'.repeat(testimonial.rating)}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Call to Action */}
//       <div style={{
//         background: 'linear-gradient(135deg, #2f4f2f, #228b22)',
//         padding: '80px 20px',
//         color: 'white',
//         textAlign: 'center'
//       }}>
//         <div style={{ maxWidth: '800px', margin: '0 auto' }}>
//           <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 'bold' }}>
//             Ready for Your Tanzanian Adventure?
//           </h2>
//           <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.9 }}>
//             Contact us today to start planning your dream safari experience. Our expert team is ready to create unforgettable memories for you.
//           </p>
          
//           <div style={{ 
//             display: 'flex', 
//             flexWrap: 'wrap', 
//             gap: '20px', 
//             justifyContent: 'center',
//             marginBottom: '40px'
//           }}>
//             <button style={{
//               background: '#9acd32',
//               color: '#2f4f2f',
//               border: 'none',
//               padding: '15px 30px',
//               borderRadius: '30px',
//               fontSize: '1.1rem',
//               fontWeight: 'bold',
//               cursor: 'pointer',
//               transition: 'all 0.3s ease',
//               boxShadow: '0 5px 15px rgba(154, 205, 50, 0.3)'
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'translateY(-3px)';
//               e.target.style.boxShadow = '0 8px 25px rgba(154, 205, 50, 0.4)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = '0 5px 15px rgba(154, 205, 50, 0.3)';
//             }}>
//               📞 Book Your Safari Now
//             </button>
            
//             <button style={{
//               background: 'transparent',
//               color: 'white',
//               border: '2px solid #9acd32',
//               padding: '15px 30px',
//               borderRadius: '30px',
//               fontSize: '1.1rem',
//               fontWeight: 'bold',
//               cursor: 'pointer',
//               transition: 'all 0.3s ease'
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.background = '#9acd32';
//               e.target.style.color = '#2f4f2f';
//               e.target.style.transform = 'translateY(-3px)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'transparent';
//               e.target.style.color = 'white';
//               e.target.style.transform = 'translateY(0)';
//             }}>
//               💬 Get Free Consultation
//             </button>
//           </div>
          
//           <div style={{ 
//             display: 'flex', 
//             flexWrap: 'wrap',
//             justifyContent: 'center', 
//             gap: '30px',
//             opacity: 0.8
//           }}>
//             <div>📧 info@tanzaniasafaris.com</div>
//             <div>📱 +255 123 456 789</div>
//             <div>📍 Arusha, Tanzania</div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes pulse {
//           0%, 100% { opacity: 0.3; }
//           50% { opacity: 0.7; }
//         }
        
//         @media (max-width: 768px) {
//           .services-container h1 {
//             font-size: 2.5rem !important;
//           }
//           .services-container h2 {
//             font-size: 2rem !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Services;
import React, { useState, useEffect } from 'react';

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1602410132231-9e6c692e02db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      title: "Safari Adventures",
      description: "Guided wildlife safaris through Serengeti, Ngorongoro Crater, and Tarangire.",
      features: ["Big Five encounters", "Professional guides", "4x4 vehicles"],
      duration: "3-14 days",
      price: "From $180/day"
    },
    {
      id: 2,
      image: "https://plus.unsplash.com/premium_photo-1677698305560-a5a4ecef617e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      title: "Photography Tours",
      description: "Capture the Big Five and stunning landscapes with expert guidance.",
      features: ["Golden hour sessions", "Photography workshops", "Equipment rental"],
      duration: "5-10 days",
      price: "From $250/day"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1648395736177-7c553b87708e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      title: "Cultural Experiences",
      description: "Immerse in Maasai villages and Tanzanian traditions.",
      features: ["Village visits", "Traditional dances", "Local crafts"],
      duration: "1-3 days",
      price: "From $120/day"
    },
    {
      id: 4,
      image: "https://plus.unsplash.com/premium_photo-1682390303252-4e1e31e692e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      title: "Group & Private Tours",
      description: "Customized tours for families, couples, and groups.",
      features: ["Tailored experiences", "Flexible scheduling", "Private vehicles"],
      duration: "Customizable",
      price: "Custom pricing"
    },
    {
      id: 5,
      image: "https://plus.unsplash.com/premium_photo-1664303903698-8dd4c3fb4394?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      title: "Camping Safaris",
      description: "Authentic bush camping under African stars.",
      features: ["Bush camping", "Campfire stories", "Stargazing"],
      duration: "3-7 days",
      price: "From $150/day"
    },
    {
      id: 6,
      image: "https://plus.unsplash.com/premium_photo-1661846340419-89bf27138124?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      title: "Bird Watching",
      description: "Discover over 1,000 bird species in Tanzania's ecosystems.",
      features: ["Expert birding guides", "Binocular rental", "Endemic species"],
      duration: "2-8 days",
      price: "From $160/day"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "USA",
      text: "The Serengeti was magical! Our guide was exceptional.",
      rating: 5
    },
    {
      name: "Hans Mueller",
      country: "Germany",
      text: "Unforgettable wildlife and cultural experiences!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      country: "India",
      text: "Photography tour was phenomenal. Lifetime memories!",
      rating: 5
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Happy Travelers" },
    { number: "25+", label: "Wildlife Parks" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-24 text-center text-white" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop&q=60')`
      }}>
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Tanzania's Wonders</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">Experience unparalleled wildlife adventures and cultural journeys with our expertly crafted safaris.</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-green-800">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-8">Our Safari Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${activeCard === service.id ? 'border-2 border-green-600' : ''}`}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Includes:</h4>
                    <ul className="list-none space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600 flex items-center">
                          <span className="text-green-600 mr-2">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center border-t pt-4">
                    <div>
                      <div className="text-xs text-gray-500">Duration</div>
                      <div className="font-semibold text-gray-800">{service.duration}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">Price</div>
                      <div className="font-semibold text-gray-800">{service.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Tanzania */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-8">Why Choose Tanzania?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                image: 'https://images.unsplash.com/photo-1571950484792-c2cbbee9c88b?auto=format&fit=crop&w=100&q=80',
                title: 'The Big Five',
                desc: 'Lion, Elephant, Buffalo, Leopard, and Rhino in their natural habitat'
              },
              {
                image: 'https://plus.unsplash.com/premium_photo-1663045893961-535354f273b9?auto=format&fit=crop&w=100&q=80',
                title: 'Mount Kilimanjaro',
                desc: "Africa's highest peak"
              },
              {
                image: 'https://images.unsplash.com/photo-1646667642307-e2bf4541284e?auto=format&fit=crop&w=100&q=80',
                title: 'Zanzibar Beaches',
                desc: 'Pristine white sand beaches'
              },
              {
                image: 'https://images.unsplash.com/photo-1710559055582-c656d31324f1?auto=format&fit=crop&w=100&q=80',
                title: 'Rich Culture',
                desc: 'Over 120 tribes with unique traditions'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center shadow-md">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-full mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-8">What Our Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl text-green-600 mb-4">❝</div>
                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                <div className="flex justify-between items-center border-t pt-4">
                  <div>
                    <div className="font-semibold text-green-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.country}</div>
                  </div>
                  <div className="text-green-600">{Array(testimonial.rating).fill('★').join('')}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;