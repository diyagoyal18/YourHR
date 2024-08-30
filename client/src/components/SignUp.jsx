import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignUp = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()
  const handleSubmit= (e)=>{
      e.preventDefault()
      axios.post('http://localhost:3001/register', {name, email, password})
      .then(result=>{console.log(result)
      navigate('/login')
      })
      .catch(err=> console.log(err))
    }
  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-[#282D2D] px-5">
    <div className=" flex flex-col items-end justify-start  overflow-hidden mb-2 xl:max-w-3xl w-full">
      <div className="flex">
        <h3 className="text-white">Dark Mode : &nbsp;</h3>
        <label class="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={darkMode}
            readOnly
          />
          
          <div
            onClick={() => {
              setDarkMode(!darkMode);
            }}
            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
          ></div>
        </label>

      </div>
    </div>
        <form onSubmit={handleSubmit}>
         
    <div
      className={`xl:max-w-3xl ${
        darkMode ? "bg-black" : "bg-white"
      }  w-full p-5 sm:p-10 rounded-md`}
    >
      <h1
        className={`text-center text-xl sm:text-3xl font-semibold ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Create Account
      </h1>
      <div className=" mt-8 basis-3/4 w-[600px]">
        <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4 basis-3/4">
         
          <input
            className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline  ${
              darkMode
                ? "bg-[#302E30] text-white focus:border-white"
                : "bg-gray-100 text-black focus:border-black"
            }`}
            type="text"
            placeholder="Your Name"
            onChange={(e)=>setName(e.target.value)}
          />
          <input
            className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
              darkMode
                ? "bg-[#302E30] text-white focus:border-white"
                : "bg-gray-100 text-black focus:border-black"
            }`}
            type="email"
            placeholder="Enter your email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          
          <input
            className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
              darkMode
                ? "bg-[#302E30] text-white focus:border-white"
                : "bg-gray-100 text-black focus:border-black"
            }`}
            type="password"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" on>
            <svg
              className="w-6 h-6 -ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <path d="M20 8v6M23 11h-6" />
            </svg>
            <span className="ml-3">Register</span>
          </button>
          <p className="mt-6 text-xs text-gray-600 text-center">
            Already have an account?{" "}
            
            <Link to="/login" className='text-[#E9522C] font-semibold'>Login</Link>
          </p>
        </div>
      </div>
    </div>
    </form>
  </div>
  )

}

export default SignUp






// <div className='d-flex justify-content-center align-items-center bg-secondart vh-100'>
// <div className='bg-white p-3 rounded w-25'>
//   <h2>Register</h2>
//   <form onSubmit={handleSubmit}>
//       <div className='mb-3'>
//           <label htmlFor="email">
//               <strong>Name</strong>
//           </label>
//           <input type="text"
//           placeholder='Enter Name'
//           autoComplete='off'
//           name='email'
//           className='form-control rounded-0' 
//           onChange={(e)=>setName(e.target.value)}/>
//       </div>
//       <div className='mb-3'>
//           <label htmlFor="email">
//               <strong>Email</strong>
//           </label>
//           <input type="email"
//           placeholder='Enter Email'
//           autoComplete='off'
//           name='email'
//           className='form-control rounded-0'
//           onChange={(e)=>setEmail(e.target.value)} />
//       </div>
//       <div className='mb-3'>
//           <label htmlFor="email">
//               <strong>Password</strong>
//           </label>
//           <input type="password"
//           placeholder='Enter Password'
//           autoComplete='off'
//           name='email'
//           className='form-control rounded-0'
//           onChange={(e)=>setPassword(e.target.value)} />
//       </div>
//       <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
//       <p>Already Have an Account</p>
//       <Link to="/login" className='btn btn-default border w-100 rounded-0 text-decoration-none'>Login</Link>
//   </form>
// </div>
// </div>
