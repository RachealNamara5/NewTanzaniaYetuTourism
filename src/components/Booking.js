// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Booking() {
//   const navigate = useNavigate();
//   const [step, setStep] = useState('login'); // login, verify, booking
//   const [loginData, setLoginData] = useState({
//     email: '',
//     contact: '',
//     location: '',
//     name: ''
//   });
//   const [verificationCode, setVerificationCode] = useState('');
//   const [bookingData, setBookingData] = useState({
//     service: '',
//     startDate: '',
//     endDate: '',
//     guests: 1,
//     specialRequests: ''
//   });
//   const [error, setError] = useState('');

//   const services = [
//     'Safari Adventures',
//     'Photography Tours',
//     'Cultural Experiences',
//     'Group & Private Tours',
//     'Camping Safaris',
//     'Bird Watching'
//   ];

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     // Basic validation
//     if (!loginData.email || !loginData.contact || !loginData.location || !loginData.name) {
//       setError('Please fill in all fields');
//       return;
//     }
//     if (!/^\S+@\S+\.\S+$/.test(loginData.email)) {
//       setError('Please enter a valid email');
//       return;
//     }
//     if (!/^\+?\d{10,12}$/.test(loginData.contact)) {
//       setError('Please enter a valid phone number');
//       return;
//     }
//     setError('');
//     // Simulate sending verification code
//     setStep('verify');
//   };

//   const handleVerifySubmit = (e) => {
//     e.preventDefault();
//     // Simulate verification (in a real app, this would check against a backend)
//     if (verificationCode.length === 6) {
//       setError('');
//       setStep('booking');
//     } else {
//       setError('Please enter a valid 6-digit code');
//     }
//   };

//   const handleBookingSubmit = (e) => {
//     e.preventDefault();
//     // Basic validation
//     if (!bookingData.service || !bookingData.startDate || !bookingData.endDate) {
//       setError('Please fill in all required fields');
//       return;
//     }
//     // Simulate booking submission
//     alert('Booking submitted successfully!');
//     navigate('/'); // Redirect to home page after booking
//   };

//   return (
//     <div
//       className="booking-container"
//       style={{
//         background: 'linear-gradient(rgba(47, 79, 47, 0.8), rgba(34, 139, 34, 0.8)), url("https://www.adventure-travellers.com/imgs/happy-clients-on-safari.jpg")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         fontFamily: 'system-ui, sans-serif',
//         color: 'white',
//         padding: '40px 20px',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center'
//       }}
//     >
//       <div style={{
//         maxWidth: '600px',
//         width: '100%',
//         background: 'rgba(255, 255, 255, 0.1)',
//         backdropFilter: 'blur(10px)',
//         borderRadius: '20px',
//         padding: '40px',
//         boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
//         border: '1px solid rgba(154, 205, 50, 0.3)'
//       }}>
//         {step === 'login' && (
//           <>
//             <h2 style={{
//               fontSize: '2.5rem',
//               fontWeight: 'bold',
//               textAlign: 'center',
//               marginBottom: '30px',
//               color: '#9acd32'
//             }}>
//               Login to Book Your Adventure
//             </h2>
//             {error && (
//               <p style={{ color: '#ff6b6b', textAlign: 'center', marginBottom: '20px' }}>
//                 {error}
//               </p>
//             )}
//             <form onSubmit={handleLoginSubmit}>
//               <div style={{ marginBottom: '20px' }}>
//                 <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   value={loginData.name}
//                   onChange={(e) => setLoginData({ ...loginData, name: e.target.value })}
//                   style={{
//                     width: '100%',
//                     padding: '12px',
//                     borderRadius: '10px',
//                     border: '1px solid #9acd32',
//                     background: 'rgba(255, 255, 255, 0.2)',
//                     color: 'white',
//                     fontSize: '1rem'
//                   }}
//                   placeholder="Enter your full name"
//                 />
//               </div>
//               <div style={{ marginBottom: '20px' }}>
//                 <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   value={loginData.email}
//                   onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
//                   style={{
//                     width: '100%',
//                     padding: '12px',
//                     borderRadius: '10px',
//                     border: '1px solid #9acd32',
//                     background: 'rgba(255, 255, 255, 0.2)',
//                     color: 'white',
//                     fontSize: '1rem'
//                   }}
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <div style={{ marginBottom: '20px' }}>
//                 <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
//                   Contact Number
//                 </label>
//                 <input
//                   type="tel"
//                   value={loginData.contact}
//                   onChange={(e) => setLoginData({ ...loginData, contact: e.target.value })}
//                   style={{
//                     width: '100%',
//                     padding: '12px',
//                     borderRadius: '10px',
//                     border: '1px solid #9acd32',
//                     background: 'rgba(255, 255, 255, 0.2)',
//                     color: 'white',
//                     fontSize: '1rem'
//                   }}
//                   placeholder="Enter your phone number (e.g., +255123456789)"
//                 />
//               </div>
//               <div style={{ marginBottom: '20px' }}>
//                 <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
//                   Location
//                 </label>
//                 <input
//                   type="text"
//                   value={loginData.location}
//                   onChange={(e) => setLoginData({ ...loginData, location: e.target.value })}
//                   style={{
//                     width: '100%',
//                     padding: '12px',
//                     borderRadius: '10px',
//                     border: '1px solid #9acd32',
//                     background: 'rgba(255, 255, 255, 0.2)',
//                     color: 'white',
//                     fontSize: '1rem'
//                   }}
//                   placeholder="Enter your city/country"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 style={{
//                   background: '#9acd32',
//                   color: '#2f4f2f',
//                   border: 'none',
//                   padding: '15px 30px',
//                   borderRadius: '30px',
//                   fontSize: '1.1rem',
//                   fontWeight: 'bold',
//                   cursor: 'pointer',
//                   width: '100%',
//                   transition: 'all 0.3s ease',
//                   boxShadow: '0 5px 15px rgba(154, 205, 50, 0.3)'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.transform = 'translateY(-3px)';
//                   e.target.style.boxShadow = '0 8px 25px rgba(154, 205, 50, 0.4)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.transform = 'translateY(0)';
//                   e.target.style.boxShadow = '0 5px 15px rgba(154, 205, 50, 0.3)';
//                 }}
//               >
//                 Send Verification Code
//               </button>
//             </form>
//           </>
//         )}

//         {step === 'verify' && (
//           <>
//             <h2 style={{
//               fontSize: '2.5rem',
//               fontWeight: 'bold',
//               textAlign: 'center',
//               marginBottom: '30px',
//               color: '#9acd32'
//             }}>
//               Verify Your Account
//             </h2>
//             <p style={{ textAlign: 'center', marginBottom: '20px', opacity: 0.9 }}>
//               A 6-digit code has been sent to {loginData.contact}. Please enter it below.
//             </p>
//             {error && (
//               <p style={{ color: '#ff6b6b', textAlign: 'center', marginBottom: '20px' }}>
//                 {error}
//               </p>
//             )}
//             <form onSubmit={handleVerifySubmit}>
//               <div style={{ marginBottom: '20px' }}>
//                 <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
//                   Verification Code
//                 </label>
//                 <input
//                   type="text"
//                   value={verificationCode}
//                   onChange={(e) => setVerificationCode(e.target.value)}
//                   style={{
//                     width: '100%',
//                     padding: '12px',
//                     borderRadius: '10px',
//                     border: '1px solid #9acd32',
//                     background: 'rgba(255, 255, 255, 0.2)',
//                     color: 'white',
//                     fontSize: '1rem'
//                   }}
//                   placeholder="Enter 6-digit code"
//                   maxLength="6"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 style={{
//                   background: '#9acd32',
//                   color: '#2f4f2f',
//                   border: 'none',
//                   padding: '15px 30px',
//                   borderRadius: '30px',
//                   fontSize: '1.1rem',
//                   fontWeight: 'bold',
//                   cursor: 'pointer',
//                   width: '100%',
//                   transition: 'all 0.3s ease',
//                   boxShadow: '0 5px 15px rgba(154, 205, 50, 0.3)'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.transform = 'translateY(-3px)';
//                   e.target.style.boxShadow = '0 8px 25px rgba(154, 205, 50, 0.4)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.transform = 'translateY(0)';
//                   e.target.style.boxShadow = '0 5px 15px rgba(154, 205, 50, 0.3)';
//                 }}
//               >
//                 Verify
//               </button>
//             </form>
//           </>
//         )}

//         {step === 'booking' && (
//           <>
//             <h2 style={{
//               fontSize: '2.5rem',
//               fontWeight: 'bold',
//               textAlign: 'center',
//               marginBottom: '30px',
//               color: '#9acd32'
//             }}>
//               Book Your Tanzanian Adventure
//             </h2>
//             {error && (
//               <p style={{ color: '#ff6b6b', textAlign: 'center', marginBottom: '20px' }}>
//                 {error}
//               </p>
//             )}
//             <form onSubmit={handleBookingSubmit}>
//               <div style={{ marginBottom: '20px' }}>
//                 <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
//                   Select Service
//                 </label>
//                 <select
//                   value={bookingData.service}
//                   onChange={(e) => setBookingData({ ...bookingData, service: e.target.value })}
//                   style={{
//                     width: '100%',
//                     padding: '12px',
//                     borderRadius: '10px',
//                     border: '1px solid #9acd32',
//                     background: 'rgba(255, 255, 255, 0.2)',
//                     color: 'white',
//                     fontSize: '1rem'
//                   }}
//                 >
//                   <option value="">Choose a service</option>
//                   {services.map((service, index) => (
//                     <option key={index} value={service}>{service}</option>
//                   ))}
//                 </select>
//               </div>
//               <div style={{ marginBottom: '20px' }}>
//                 <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
//                   Start Date
//                 </label>
//                 <input
//                   type="date"
//                   value={bookingData.startDate}
//                   onChange={(e) => setBookingData({ ...bookingData, startDate: e.target.value })}
//                   style={{
//                     width: '100%',
//                     padding: '12px',
//                     borderRadius: '10px',
//                     border: '1px solid #9acd32',
//                     background: 'rgba(255, 255, 255, 0.2)',
//                     color: 'white',
//                     fontSize: '1rem'
//                   }}
//                 />
//               </div>
//               <div style={{ marginBottom: '20px' }}>
//                 <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
//                   End Date
//                 </label>
//                 <input
//                   type="date"
//                   value={bookingData.endDate}
//                   onChange={(e) => setBookingData({ ...bookingData, endDate: e.target.value })}
//                   style={{
//                     width: '100%',
//                     padding: '12px',
//                     borderRadius: '10px',
//                     border: '1px solid #9acd32',
//                     background: 'rgba(255, 255, 255, 0.2)',
//                     color: 'white',
//                     fontSize: '1rem'
//                   }}
//                 />
//               </div>
//               <div style={{ marginBottom: '20px' }}>
//                 <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
//                   Number of Guests
//                 </label>
//                 <input
//                   type="number"
//                   value={bookingData.guests}
//                   onChange={(e) => setBookingData({ ...bookingData, guests: parseInt(e.target.value) })}
//                   min="1"
//                   style={{
//                     width: '100%',
//                     padding: '12px',
//                     borderRadius: '10px',
//                     border: '1px solid #9acd32',
//                     background: 'rgba(255, 255, 255, 0.2)',
//                     color: 'white',
//                     fontSize: '1rem'
//                   }}
//                   placeholder="Enter number of guests"
//                 />
//               </div>
//               <div style={{ marginBottom: '20px' }}>
//                 <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
//                   Special Requests
//                 </label>
//                 <textarea
//                   value={bookingData.specialRequests}
//                   onChange={(e) => setBookingData({ ...bookingData, specialRequests: e.target.value })}
//                   style={{
//                     width: '100%',
//                     padding: '12px',
//                     borderRadius: '10px',
//                     border: '1px solid #9acd32',
//                     background: 'rgba(255, 255, 255, 0.2)',
//                     color: 'white',
//                     fontSize: '1rem',
//                     minHeight: '100px'
//                   }}
//                   placeholder="Any special requests?"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 style={{
//                   background: '#9acd32',
//                   color: '#2f4f2f',
//                   border: 'none',
//                   padding: '15px 30px',
//                   borderRadius: '30px',
//                   fontSize: '1.1rem',
//                   fontWeight: 'bold',
//                   cursor: 'pointer',
//                   width: '100%',
//                   transition: 'all 0.3s ease',
//                   boxShadow: '0 5px 15px rgba(154, 205, 50, 0.3)'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.transform = 'translateY(-3px)';
//                   e.target.style.boxShadow = '0 8px 25px rgba(154, 205, 50, 0.4)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.transform = 'translateY(0)';
//                   e.target.style.boxShadow = '0 5px 15px rgba(154, 205, 50, 0.3)';
//                 }}
//               >
//                 Submit Booking
//               </button>
//             </form>
//           </>
//         )}
//       </div>

//       <style>{`
//         .booking-container input::placeholder,
//         .booking-container select,
//         .booking-container textarea::placeholder {
//           color: rgba(255, 255, 255, 0.7);
//         }
//         .booking-container select option {
//           background: #2f4f2f;
//           color: white;
//         }
//         @media (max-width: 768px) {
//           .booking-container h2 {
//             font-size: 2rem !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Booking;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useBookings } from '../hooks/useBookings';
import { useServices } from '../hooks/useServices';

function Booking() {
  const navigate = useNavigate();
  const { user, signUp, signIn, isAuthenticated } = useAuth();
  const { services } = useServices();
  const { createBooking, isCreating } = useBookings();
  
  const [step, setStep] = useState('login');
  
  // Update step when authentication changes
  React.useEffect(() => {
    console.log('🔐 Auth state changed:', { isAuthenticated, user })
    if (isAuthenticated && user) {
      setStep('booking')
    } else {
      setStep('login')
    }
  }, [isAuthenticated, user]);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    contact: '',
    location: '',
    name: ''
  });
  const [bookingData, setBookingData] = useState({
    service_id: '',
    startDate: '',
    endDate: '',
    guests: 1,
    specialRequests: ''
  });
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!loginData.email || !loginData.name) {
      setError('Please fill in required fields');
      return;
    }

    if (!isLogin && loginData.password !== loginData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      let result;
      console.log('🔐 Attempting authentication:', { isLogin, email: loginData.email })
      
      if (isLogin) {
        result = await signIn(loginData.email, loginData.password);
      } else {
        result = await signUp(loginData.email, loginData.password, {
          full_name: loginData.name,
          phone: loginData.contact,
          location: loginData.location
        });
      }

      console.log('🔐 Auth result:', result)

      if (result.success) {
        console.log('✅ Authentication successful, moving to booking step')
      setStep('booking');
    } else {
        setError(result.error?.message || 'Authentication failed. Please try again.');
      }
    } catch (error) {
      console.error('❌ Authentication error:', error)
      setError('Authentication failed. Please try again.');
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!bookingData.service_id || !bookingData.startDate || !bookingData.endDate) {
      setError('Please fill in all required fields');
      return;
    }

    if (new Date(bookingData.startDate) >= new Date(bookingData.endDate)) {
      setError('End date must be after start date');
      return;
    }

    try {
      const booking = {
        user_id: user.id,
        service_id: bookingData.service_id,
        start_date: bookingData.startDate,
        end_date: bookingData.endDate,
        guests: parseInt(bookingData.guests),
        special_requests: bookingData.specialRequests,
        status: 'pending'
      };

      createBooking(booking);
    navigate('/'); // Redirect to home page after booking
    } catch (error) {
      setError('Failed to submit booking. Please try again.');
    }
  };

  return (
    <div
      className="booking-container"
      style={{
        background: 'url("https://www.adventure-travellers.com/imgs/happy-clients-on-safari.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        fontFamily: 'system-ui, sans-serif',
        color: 'white',
        padding: '40px 20px',
        paddingRight: '40px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}
    >
      <div style={{
        maxWidth: '450px',
        width: '100%',
        background: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(154, 205, 50, 0.3)'
      }}>
        {step === 'login' && (
          <>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '30px',
              color: '#9acd32'
            }}>
              {isLogin ? 'Login to Book Your Adventure' : 'Create Account to Book'}
            </h2>
            
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#9acd32',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
              </button>
            </div>

            {error && (
              <p style={{ color: '#ff6b6b', textAlign: 'center', marginBottom: '20px' }}>
                {error}
              </p>
            )}
            <form onSubmit={handleAuthSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Name
                </label>
                <input
                  type="text"
                  value={loginData.name}
                  onChange={(e) => setLoginData({ ...loginData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid #9acd32',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                  placeholder="Enter your full name"
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Email
                </label>
                <input
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid #9acd32',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                  placeholder="Enter your email"
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Password
                </label>
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid #9acd32',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                  placeholder="Enter your password"
                />
              </div>
              
              {!isLogin && (
                <>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                      Confirm Password
                </label>
                <input
                      type="password"
                      value={loginData.confirmPassword}
                      onChange={(e) => setLoginData({ ...loginData, confirmPassword: e.target.value })}
                      required
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid #9acd32',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                      placeholder="Confirm your password"
                />
              </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      value={loginData.contact}
                      onChange={(e) => setLoginData({ ...loginData, contact: e.target.value })}
                style={{
                  width: '100%',
                        padding: '12px',
                        borderRadius: '10px',
                        border: '1px solid #9acd32',
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        fontSize: '1rem'
                      }}
                      placeholder="Enter your phone number (e.g., +255123456789)"
                    />
                  </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                      Location
                </label>
                <input
                  type="text"
                      value={loginData.location}
                      onChange={(e) => setLoginData({ ...loginData, location: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid #9acd32',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                      placeholder="Enter your city/country"
                />
              </div>
                </>
              )}
              <button
                type="submit"
                disabled={isCreating}
                style={{
                  background: '#9acd32',
                  color: '#2f4f2f',
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '30px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  width: '100%',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 5px 15px rgba(154, 205, 50, 0.3)',
                  opacity: isCreating ? 0.7 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isCreating) {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(154, 205, 50, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 5px 15px rgba(154, 205, 50, 0.3)';
                }}
              >
                {isLogin ? 'Login' : 'Create Account'}
              </button>
            </form>
          </>
        )}


        {step === 'booking' && (
          <>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '30px',
              color: '#9acd32'
            }}>
              Book Your Tanzanian Adventure
            </h2>
            {error && (
              <p style={{ color: '#ff6b6b', textAlign: 'center', marginBottom: '20px' }}>
                {error}
              </p>
            )}
            <form onSubmit={handleBookingSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Select Service
                </label>
                <select
                  value={bookingData.service_id}
                  onChange={(e) => setBookingData({ ...bookingData, service_id: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid #9acd32',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Choose a service</option>
                  {services && services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title} - From ${service.price_from}/day
                    </option>
                  ))}
                </select>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Start Date
                </label>
                <input
                  type="date"
                  value={bookingData.startDate}
                  onChange={(e) => setBookingData({ ...bookingData, startDate: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid #9acd32',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  End Date
                </label>
                <input
                  type="date"
                  value={bookingData.endDate}
                  onChange={(e) => setBookingData({ ...bookingData, endDate: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid #9acd32',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Number of Guests
                </label>
                <input
                  type="number"
                  value={bookingData.guests}
                  onChange={(e) => setBookingData({ ...bookingData, guests: parseInt(e.target.value) })}
                  min="1"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid #9acd32',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                  placeholder="Enter number of guests"
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Special Requests
                </label>
                <textarea
                  value={bookingData.specialRequests}
                  onChange={(e) => setBookingData({ ...bookingData, specialRequests: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid #9acd32',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontSize: '1rem',
                    minHeight: '100px'
                  }}
                  placeholder="Any special requests?"
                />
              </div>
              <button
                type="submit"
                disabled={isCreating}
                style={{
                  background: '#9acd32',
                  color: '#2f4f2f',
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '30px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  width: '100%',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 5px 15px rgba(154, 205, 50, 0.3)',
                  opacity: isCreating ? 0.7 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isCreating) {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(154, 205, 50, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 5px 15px rgba(154, 205, 50, 0.3)';
                }}
              >
                {isCreating ? 'Submitting...' : 'Submit Booking'}
              </button>
            </form>
          </>
        )}
      </div>

      <style>{`
        .booking-container input::placeholder,
        .booking-container select,
        .booking-container textarea::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
        .booking-container select option {
          background: #2f4f2f;
          color: white;
        }
        @media (max-width: 768px) {
          .booking-container h2 {
            font-size: 2rem !important;
          }
          .booking-container {
            justify-content: center !important;
            padding-right: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Booking;