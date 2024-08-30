import React, { useState , createRef} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [contact, setContact] = useState()
  const [college, setCollege] = useState()
  const [cgpa, setCgpa] = useState()
  const [year, setYear] = useState()
  const [skills, setSkills] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [pin, setPin] = useState()
  const [resume, setResume] = useState()
  const navigate = useNavigate()
  const fileInput = createRef();
  const handleSubmit= async (e)=>{
    e.preventDefault()
    const formData= new FormData();
    formData.set("resume", fileInput.current.files[0]);
    const response = await fetch('/resume',{
      method:"POST",
      body:formData
    })
    axios.post('http://localhost:3001/user', {firstName, lastName, contact, college, cgpa, year, skills, city, state, pin,resume})
    .then(result=>{console.log(result)
    navigate('/dashboard')
    })
    .catch(err=> console.log(err))
  }
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-[100vh] px-5 overflow-y-auto">
      <div className="flex flex-col items-end justify-start w-full mb-2 xl:max-w-3xl">
        
        <div className="flex w-full">
       
            
          <form onSubmit={handleSubmit} className="w-full">
              <div>
              <h1
        className={`text-center text-xl sm:text-3xl font-semibold p-8`}
      >
            USER INFORMATION    </h1>
              </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  First Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Diya"
                onChange={(e)=>setFirstName(e.target.value)} />
                <p className="text-red-500 text-xs italic">Please fill out this field.</p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                  Last Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Goyal" onChange={(e)=>setLastName(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-phno">
                  Contact Number
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phno" type="text" placeholder="91-" onChange={(e)=>setContact(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-clg">
                  College
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-clg" type="text" placeholder="Oxford University" onChange={(e)=>setCollege(e.target.value)}/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-cg">
                  Current CGPA
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-cg" type="text" placeholder="out of 10" onChange={(e)=>setCgpa(e.target.value)}/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-yr">
                  Graduation Year
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-yr" type="text" placeholder="2025/2026" onChange={(e)=>setYear(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-skills">
                  Skills
                </label>
                <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-skills" placeholder="Tell about your tech stack" onChange={(e)=>setSkills(e.target.value)}></textarea>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                  City
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Mumbai" onChange={(e)=>setCity(e.target.value)} />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                  State
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" type="text" placeholder="Maharashtra"onChange={(e)=>setState(e.target.value)} />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                  Zip
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" onChange={(e)=>setPin(e.target.value)}/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-skills">
                  Resume
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-resume" type="file" onChange={(e)=>setResume(e.target.value)} ref={fileInput}/>
                <button type="submit" className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
     
    </div>

  )
}

export default Home
