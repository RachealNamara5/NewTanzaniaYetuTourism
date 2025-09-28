// import React from 'react';
// import './Footer.css';

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-section">
//           <h3>About Us</h3>
//           <p>Explore Tanzania's wild beauty with Tanzania Yetu Travels. Enjoy expert-guided safaris, breathtaking landscapes, and unforgettable adventures.</p>
//         </div>
//         <div className="footer-section">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="/home">Home</a></li>
//             <li><a href="/services">Services</a></li>
//             <li><a href="/wildlife">Wildlife</a></li>
//             <li><a href="/packages">Packages</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h3>Contact Us</h3>
//           <p>Email: info@tanzaniayetutravels.com</p>
//           <p>Phone: +255 123 456 789</p>
//           <p>Address: Arusha, Tanzania</p>
//         </div>
//         <div className="footer-section">
//           <h3>Follow Us</h3>
//           <div className="social-links">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
//               <i className="fab fa-tiktok"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; {new Date().getFullYear()} Tanzania Yetu Travels. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="text-gray-800 py-12" style={{ backgroundColor: '#ffffff' }}>
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* About Section */}
//           <div>
//             <h3 
//               className="text-xl font-bold mb-4"
//               style={{
//                 background: 'linear-gradient(45deg, #2f4f2f, #9acd32, #228b22)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text'
//               }}
//             >
//               Tanzania Yetu Travels
//             </h3>
//             <p className="text-gray-700 text-sm mb-4">
//               Your trusted partner for unforgettable safari adventures in Tanzania. Explore Africa's wild beauty with our expert guides.
//             </p>
//             <div className="flex gap-4">
//               {[
//                 { href: 'https://facebook.com', icon: 'fab fa-facebook-f', label: 'Facebook' },
//                 { href: 'https://instagram.com', icon: 'fab fa-instagram', label: 'Instagram' },
//                 { href: 'https://twitter.com', icon: 'fab fa-twitter', label: 'Twitter' }
//               ].map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={social.label}
//                   className="transition"
//                   style={{
//                     background: 'linear-gradient(45deg, #2f4f2f, #9acd32, #228b22)',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                     backgroundClip: 'text'
//                   }}
//                 >
//                   <i className={social.icon}></i>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 
//               className="text-xl font-bold mb-4"
//               style={{
//                 background: 'linear-gradient(45deg, #2f4f2f, #9acd32, #228b22)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text'
//               }}
//             >
//               Quick Links
//             </h3>
//             <ul className="list-none space-y-2 text-sm">
//               {['Home', 'Services', 'Wildlife', 'Packages', 'Reviews'].map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href="#"
//                     className="text-gray-700 transition hover:text-transparent"
//                     style={{
//                       background: 'linear-gradient(45deg, #2f4f2f, #9acd32, #228b22)',
//                       WebkitBackgroundClip: 'text',
//                       WebkitTextFillColor: 'transparent',
//                       backgroundClip: 'text'
//                     }}
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Us */}
//           <div>
//             <h3 
//               className="text-xl font-bold mb-4"
//               style={{
//                 background: 'linear-gradient(45deg, #2f4f2f, #9acd32, #228b22)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text'
//               }}
//             >
//               Contact Us
//             </h3>
//             <ul className="list-none space-y-2 text-sm text-gray-700">
//               <li className="flex items-center">
//                 <i className="fas fa-phone mr-2" style={{
//                   background: 'linear-gradient(45deg, #2f4f2f, #9acd32, #228b22)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text'
//                 }}></i> +255 123 456 789
//               </li>
//               <li className="flex items-center">
//                 <i className="fas fa-envelope mr-2" style={{
//                   background: 'linear-gradient(45deg, #2f4f2f, #9acd32, #228b22)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text'
//                 }}></i> info@tanzaniayetutravels.com
//               </li>
//               <li className="flex items-center">
//                 <i className="fas fa-map-marker-alt mr-2" style={{
//                   background: 'linear-gradient(45deg, #2f4f2f, #9acd32, #228b22)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text'
//                 }}></i> Arusha, Tanzania
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 
//               className="text-xl font-bold mb-4"
//               style={{
//                 background: 'linear-gradient(45deg, #2f4f2f, #9acd32, #228b22)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text'
//               }}
//             >
//               Stay Updated
//             </h3>
//             <p className="text-gray-700 text-sm mb-4">Subscribe for travel tips and exclusive offers.</p>
//             <div className="flex">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full p-2 rounded-l-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-800"
//               />
//               <button className="bg-green-800 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition" style={{ color: '#ffffff' }}>
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>

//         <hr className="border-gray-400 my-8" />

//         <div className="text-center text-gray-600 text-sm">
//           <p>© {new Date().getFullYear()} Tanzania Yetu Travels. African Adventure Travellers. | All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-gray-800 py-12" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 
              className="text-xl font-bold mb-4"
              style={{
                color: '#228b22', // Fallback color
                background: 'linear-gradient(45deg, #2f4f2f, #9acd32, #228b22)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Tanzania Yetu Travels
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Your trusted partner for unforgettable safari adventures in Tanzania. Explore Africa's wild beauty with our expert guides.
            </p>
            <div className="flex gap-4">
              {[
                { href: 'https://facebook.com', icon: 'fab fa-facebook-f', label: 'Facebook' },
                { href: 'https://instagram.com', icon: 'fab fa-instagram', label: 'Instagram' },
                { href: 'https://twitter.com', icon: 'fab fa-twitter', label: 'Twitter' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="transition"
                  style={{
                    color: '#228b22', // Fallback color
                    background: 'linear-gradient(45deg, #2f4f2f, #9acd32, #228b22)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              className="text-xl font-bold mb-4"
              style={{
                color: '#228b22', // Fallback color
                background: 'linear-gradient(45deg, #2f4f2f, #9acd32, #228b22)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Quick Links
            </h3>
            <ul className="list-none space-y-2 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Wildlife', path: '/wildlife' },
                { name: 'Packages', path: '/packages' },
                { name: 'Reviews', path: '/reviews' }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-700 transition hover:text-transparent"
                    style={{
                      color: '#228b22', // Fallback color
                      background: 'linear-gradient(45deg, #2f4f2f, #9acd32, #228b22)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 
              className="text-xl font-bold mb-4"
              style={{
                color: '#228b22', // Fallback color
                background: 'linear-gradient(45deg, #2f4f2f, #9acd32, #228b22)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Contact Us
            </h3>
            <ul className="list-none space-y-2 text-sm text-gray-700">
              <li className="flex items-center">
                <i className="fas fa-phone mr-2" style={{
                  color: '#228b22', // Fallback color
                  background: 'linear-gradient(45deg, #2f4f2f, #9acd32, #228b22)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}></i> +255 123 456 789
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2" style={{
                  color: '#228b22', // Fallback color
                  background: 'linear-gradient(45deg, #2f4f2f, #9acd32, #228b22)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}></i> info@tanzaniayetutravels.com
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2" style={{
                  color: '#228b22', // Fallback color
                  background: 'linear-gradient(45deg, #2f4f2f, #9acd32, #228b22)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}></i> Arusha, Tanzania
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 
              className="text-xl font-bold mb-4"
              style={{
                color: '#228b22', // Fallback color
                background: 'linear-gradient(45deg, #2f4f2f, #9acd32, #228b22)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Stay Updated
            </h3>
            <p className="text-gray-700 text-sm mb-4">Subscribe for travel tips and exclusive offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-l-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-800"
              />
              <button className="bg-green-800 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition" style={{ color: '#ffffff' }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="border-gray-400 my-8" />

        <div className="text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Tanzania Yetu Travels. African Adventure Travellers. | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;