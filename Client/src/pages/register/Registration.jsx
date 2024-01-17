// // Registration.jsx
// import { useState } from "react";
// import "./registration.css";

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     telephone: "",
//     country: "",
//     city: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleClick = () => {
//     // Handle registration logic here
//     console.log("Registration data:", formData);
//   };

//   return (
//     <div className="login">
//       <div className="lContainer">
//         <h2>Register</h2>
        
//         <label htmlFor="username" className="lLabel">
//           Username
//         </label>
//         <input
//           type="text"
//           placeholder="Username"
//           id="username"
//           onChange={handleChange}
//           className="lInput"
//         />

//         <label htmlFor="email" className="lLabel">
//           Email
//         </label>
//         <input
//           type="email"
//           placeholder="Email"
//           id="email"
//           onChange={handleChange}
//           className="lInput"
//         />

//         <label htmlFor="password" className="lLabel">
//           Password
//         </label>
//         <input
//           type="password"
//           placeholder="Password"
//           id="password"
//           onChange={handleChange}
//           className="lInput"
//         />

//         <label htmlFor="telephone" className="lLabel">
//           Telephone
//         </label>
//         <input
//           type="tel"
//           placeholder="Telephone"
//           id="telephone"
//           onChange={handleChange}
//           className="lInput"
//         />

//         <label htmlFor="country" className="lLabel">
//           Country
//         </label>
//         <input
//           type="text"
//           placeholder="Country"
//           id="country"
//           onChange={handleChange}
//           className="lInput"
//         />

//         <label htmlFor="city" className="lLabel">
//           City
//         </label>
//         <input
//           type="text"
//           placeholder="City"
//           id="city"
//           onChange={handleChange}
//           className="lInput"
//         />

//         <button onClick={handleClick} className="lButton">
//           Register
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Registration;
