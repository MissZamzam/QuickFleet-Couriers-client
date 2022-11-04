import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Registration() {

    const [errMsg, setErrMsg] = useState('');

    const [user, setUser] = useState({
        username:"",
        email: "",
        password: "",
        password_confirmation:""
    });
    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [telephone, setTelephone] = useState("")
    // const [location, setLocation] = useState("")

      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({...user,[name]: value})
      };
      const navigate = useNavigate()


    useEffect(() => {
        setErrMsg('');
    },[])


    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("/users/signup",{
            email: user.email,
            password: user.password,
            username: user.username,
            password_confirmation: user.password_confirmation
        })
        .then((res) => {setUser(res)})
        .catch((err) => {
            if(!err?.response){
                console.log(err.response.status)
            }
            else if(err.response?.status === 422){
                console.log(`here ${err.response.message}`)
            }
        })
        .finally(()=>
        setUser({
            username:"",
            email: "",
            password: "",
            password_confirmation:""
        }))

        // fetch('/use_profile',{
        //     method: 'POST',
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         firstName,
        //         lastName,
        //         location,
        //         telephone,
        //     }),
        // })
        // .then((r)=> r.json())
        navigate('/profileform')
    }

    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50 signup-container">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-600">
                            <span className='quick'>Sign</span><span className='fleet'>Up</span>
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={handleSubmit}>
                        {/* <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                First Name
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Last Name
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Telephone
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" value={telephone} onChange={(e)=>setTelephone(e.target.value)} />
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Location
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" value={location} onChange={(e)=>setLocation(e.target.value)} />
                            </div>
                        </div> */}
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                UserName
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={user.username}
                                    onChange={(e)=>setUser.username(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={user.email}
                                    onChange={(e)=>setUser.email(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={user.password}
                                    onChange={(e)=>setUser.password(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={user.password_confirmation}
                                    onChange={(e)=>setUser.password_confirmation(e.target.value)}
                                />
                            </div>
                        </div>
                        <a
                            href=" "
                            className="text-xs text-blue-600"
                        >
                            Forget Password?
                        </a>
                        <div className="flex items-center mt-4">
                            <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Register
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-grey-600">
                        Already have an account?{" "}
                        <Link to='/Login'>
                            Log In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
