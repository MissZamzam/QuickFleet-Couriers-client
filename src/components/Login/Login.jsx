import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../auth/Users';
import "./Login.css"

export default function Login({ authorized, setUserData }) {

    // const history = useHistory()

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        is_admin: false,
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
          ...user,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const createUser = async () => {
          const newUser = await login(user);
          setUserData(newUser);
          setTimeout(() => {
            // history.push("/");
          }, 500);
        };
        createUser();
      };



    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700">
                <span className='quick'>Log</span><span className='fleet'>In</span>
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
                            value={user.email}
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
                            value={user.password}
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href=" "
                        className="text-xs text-blue-600"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 login">
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