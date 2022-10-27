import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../auth/Users';

export default function Login({setUser, user}) {

    // const history = useHistory()
    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: "",
        password: ""

      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form,[name]: value})
      };

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const createUser = async () => {
    //       const newUser = await login(user);
    //       setForm(newUser);
    //       setTimeout(() => {
    //         // history.push("/");
    //       }, 500);
    //     };
    //     createUser();
    //   };


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     fetch("http://localhost:3001/users/login",{
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({user: {
    //             email:form.email,
    //             password: form.password
    //         }},
    //         )
    //     })
    //     .then(response => response.json())
    //     .then(user =>{
    //         console.log(user)
    //         // localStorage.setItem("user_id", JSON.stringify(user.id))
    //         setUser(user)
    //         navigate("/")
    //     }
    //     ).catch(err => console.log("Login error", err));

    // }

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:3004/signin",{
            email: form.email,
            password: form.password
        })
        .then((res) => {setUser(res); navigate("/")})
        //  sessionStorage.setItem("user_id", JSON.stringify(user.id))
        .finally(()=>
        setUser({
            email: "",
            password: ""
        }))
        
    }



    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Sign in
                </h1>
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            name='password'
                            onChange={handleChange}
                            value={form.password}
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href=" "
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link to='/Signup'>
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}