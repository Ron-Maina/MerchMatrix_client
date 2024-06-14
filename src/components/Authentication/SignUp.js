import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../../features/Authentication/authSlice'

function SignUp() {

    const dispatch = useDispatch()

    const [username, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(register({username, email, number, password}))
    }

    return(
        <>
            {/* component */}
            <link
                href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
                rel="stylesheet"
            />
            <style
                dangerouslySetInnerHTML={{
                __html:
                    "\n/*remove custom style*/\n  .circles{\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n  .circles li{\n    position: absolute;\n    display: block;\n    list-style: none;\n    width: 20px;\n    height: 20px;\n    background: rgba(255, 255, 255, 0.2);\n    animation: animate 25s linear infinite;\n    bottom: -150px;  \n}\n.circles li:nth-child(1){\n    left: 25%;\n    width: 80px;\n    height: 80px;\n    animation-delay: 0s;\n}\n \n \n.circles li:nth-child(2){\n    left: 10%;\n    width: 20px;\n    height: 20px;\n    animation-delay: 2s;\n    animation-duration: 12s;\n}\n \n.circles li:nth-child(3){\n    left: 70%;\n    width: 20px;\n    height: 20px;\n    animation-delay: 4s;\n}\n \n.circles li:nth-child(4){\n    left: 40%;\n    width: 60px;\n    height: 60px;\n    animation-delay: 0s;\n    animation-duration: 18s;\n}\n \n.circles li:nth-child(5){\n    left: 65%;\n    width: 20px;\n    height: 20px;\n    animation-delay: 0s;\n}\n \n.circles li:nth-child(6){\n    left: 75%;\n    width: 110px;\n    height: 110px;\n    animation-delay: 3s;\n}\n \n.circles li:nth-child(7){\n    left: 35%;\n    width: 150px;\n    height: 150px;\n    animation-delay: 7s;\n}\n \n.circles li:nth-child(8){\n    left: 50%;\n    width: 25px;\n    height: 25px;\n    animation-delay: 15s;\n    animation-duration: 45s;\n}\n \n.circles li:nth-child(9){\n    left: 20%;\n    width: 15px;\n    height: 15px;\n    animation-delay: 2s;\n    animation-duration: 35s;\n}\n \n.circles li:nth-child(10){\n    left: 85%;\n    width: 150px;\n    height: 150px;\n    animation-delay: 0s;\n    animation-duration: 11s;\n}\n  @keyframes animate {\n \n    0%{\n        transform: translateY(0) rotate(0deg);\n        opacity: 1;\n        border-radius: 0;\n    }\n \n    100%{\n        transform: translateY(-1000px) rotate(720deg);\n        opacity: 0;\n        border-radius: 50%;\n    }\n \n}\n.triangle{\n  border-top:60rem solid #fff;\n  border-left:25rem solid transparent;\n}\n"
                }}
            />
            <div className="relative min-h-screen flex ">
                <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                <div
                    className="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-start p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
                    style={{
                    backgroundImage:
                        "url(https://st2.depositphotos.com/1364641/5292/i/600/depositphotos_52928349-stock-photo-laptop-with-arrow-and-shopping.jpg)"
                    }}
                >
                    <div className="absolute bg-gradient-to-b from-blue-900 to-gray-900 opacity-75 inset-0 z-0" />
                    <div
                    className="absolute triangle  min-h-screen right-0 w-16"
                    style={{}}
                    />
                    <img
                    src="https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/bd2253a9671dac36a95faf821b52e78935050140be1718ce001f6aace45cf25c.png"
                    alt='headphones'
                    className="h-96 absolute right-5 mr-5"
                    />
                    <div className="w-full  max-w-md z-10">
                    <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
                        MerchMatrix
                    </div>
                    <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem.
                    </div>
                    </div>
                    {/*-remove custom style*/}
                    <ul className="circles">
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    </ul>
                </div>
                <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white ">
                    <div className="max-w-md w-full space-y-8">
                    <div className="text-center">
                        <h2 className="mt-6 text-3xl font-bold text-gray-900">
                        Welcome!
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                        Please create your account
                        </p>
                    </div>
                    <div className="flex flex-row justify-center items-center space-x-3">
                        {/* Add Google Signin Option */}
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                        <span className="h-px w-16 bg-gray-200" />
                        <span className="text-gray-300 font-normal">or continue with</span>
                        <span className="h-px w-16 bg-gray-200" />
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="mt-8 content-center space-y-5">
                          <div className="space-y-1">
                              <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide mx-4">
                                  Username
                              </label>
                              <input
                                  className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                  type="text"
                                  placeholder="username"
                                  onChange={(e) => setUser(e.target.value)}
                              />
                          </div>
                          <div className="space-y-1">
                              <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide mx-4">
                                  Email
                              </label>
                              <input
                                  className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                  type="email"
                                  placeholder="mail@gmail.com"
                                  onChange={(e) => setEmail(e.target.value)}

                              />
                          </div>
                          <div className="space-y-1">
                              <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide mx-4">
                                  Phone Number
                              </label>
                              <input
                                  className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                  type="tel"
                                  placeholder="phone number"
                                  onChange={(e) => setNumber(e.target.value)}

                              />
                          </div>
                          <div className="space-y-1">
                              <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide mx-4">
                                  Password
                              </label>
                              <input
                                  className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                  type="password"
                                  placeholder="Enter your password"
                                  onChange={(e) => setPassword(e.target.value)}
                              />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                            id="remember_me"
                            name="remember_me"
                            type="checkbox"
                            className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                            />
                            <label
                            htmlFor="remember_me"
                            className="ml-2 block text-sm text-gray-900"
                            >
                            Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            {/* Forgot Password */}
                        </div>
                        </div>
                        <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                        >
                            Sign Up
                        </button>
                        </div>
                        <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                        <span>Have an account?</span>
                        <Link to="/login"
                            className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                        >
                            Sign In
                        </Link>
                        </p>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </>

    )
}

export default SignUp