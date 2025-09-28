

// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';
// import Home from './components/Home';
// import Wildlife from './components/Wildlife';
// import Footer from './components/Footer';
// import ServicesPage from './components/Services';
// import ContactUs from './components/Contactus';
// import Booking from './components/Booking';
// import AboutUs from './components/AboutUs';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Top Bar */}
//         <div className="top-bar">
//           <div className="social-icons">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//             <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" title="Pinterest">
//               <i className="fab fa-pinterest-p"></i>
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">
//               <i className="fab fa-youtube"></i>
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
//               <i className="fab fa-instagram"></i>
//             </a>
//           </div>
          
//           <div className="contact-info">
//             <a href="tel:+256753820095" className="contact-item">
//               <i className="fas fa-phone"></i>
//               <span>+256 753 820 095</span>
//             </a>
//             <a href="mailto:info@misskafricasafaris.com" className="contact-item">
//               <i className="fas fa-envelope"></i>
//               <span>info@tanzaniayetutravels.com</span>
//             </a>
//           </div>
//         </div>

//         {/* Main Navigation */}
//         <nav className="navbar">
//           <div className="logo">
//             <img src="/tz.png" alt="Tanzania Yetu Logo" className="logo-image" />
//             Tanzania Yetu Travels
//           </div>
//           <ul className="nav-links">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/AboutUs">About Us</Link></li>
//             <li><Link to="/services">Services</Link></li>
//             <li><Link to="/wildlife">Wildlife</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//             <li><Link to="/contact">Destinations</Link></li>
//             <li><Link to="/booking">Booking</Link></li>
//           </ul>
//         </nav>

//         <div className="content-wrapper">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/AboutUs" element={<AboutUs />} />
//             <Route path="/wildlife" element={<Wildlife />} />
//             <Route path="/services" element={<ServicesPage />} />
//             <Route path="/contact" element={<ContactUs />} />
//             <Route path="/booking" element={<Booking />} />
//           </Routes>
//           <Footer />
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Wildlife from './components/Wildlife';
import Footer from './components/Footer';
import ServicesPage from './components/Services';
import ContactUs from './components/Contactus';
import Booking from './components/Booking';
import AboutUs from './components/AboutUs';
import Destinations from './components/Destinations';

// Providers
import { QueryProvider } from './providers/QueryProvider';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from 'react-hot-toast';



import Serengeti from './components/serengeti';
import Ngorongoro from './components/Ngorongoro';
import Tarangire from './components/Tarangire';
import Manyara from './components/Manyara';

import TwelveDays from './components/12days';
import SerengentiSafari from './components/9days';
import NineDaysTanzania from './components/7days';
import SixDaysSafari from './components/6days';
import FiveDaysSafari from './components/5days';

import FiveDaysBestSafari from './components/5daysbest';

function App() {
  return (
    <QueryProvider>
      <AuthProvider>
        <Router>
          <div className="App">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" title="Pinterest">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          
          <div className="contact-info">
            <a href="tel:+256753820095" className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+256 753 820 095</span>
            </a>
            <a href="mailto:info@tanzaniayetutravels.com" className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>info@tanzaniayetutravels.com</span>
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="navbar">
          <div className="logo">
            <img src="/tz.png" alt="Tanzania Yetu Logo" className="logo-image" />
            Tanzania Yetu Travels
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/AboutUs">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/wildlife">Wildlife</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/booking">Booking</Link></li>
          </ul>
        </nav>

        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/wildlife" element={<Wildlife />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/destinations" element={<Destinations />} />

            <Route path="/destinations/serengeti" element={<Serengeti />} />
            <Route path="/destinations/Ngorongoro" element={<Ngorongoro />} />
            <Route path="/destinations/Tarangire" element={<Tarangire />} />
            <Route path="/destinations/Manyara" element={<Manyara />} />

            <Route path="/destinations/12days" element={<TwelveDays />} />
            <Route path="/destinations/9days" element={<SerengentiSafari />} />
            <Route path="/destinations/7days" element={<NineDaysTanzania />} />
            <Route path="/destinations/6days" element={<SixDaysSafari />} />
            <Route path="/destinations/5days" element={<FiveDaysSafari />} />

            <Route path="/destinations/5daysbest" element={<FiveDaysBestSafari />} />
             
          </Routes>
          <Footer />
        </div>
      </div>
      <Toaster position="top-right" />
    </Router>
      </AuthProvider>
    </QueryProvider>
  );
}

export default App;