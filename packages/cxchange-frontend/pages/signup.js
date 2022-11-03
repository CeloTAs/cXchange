import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'

// import { useDispatch } from "react-redux";
import Facebook from '../components/icons/Facebook';
import Github from '../components/icons/Github';
import Twitter from '../components/icons/Twitter';
import styles from '../styles/Auth.module.css'
import { authActions } from '../config/actions';


const SignUp = () => {
    // const dispatch = useDispatch();
    const [userInput, setUserInput] = useState({
        userName: "",
        email: "",
        password: "",
        password2: "",
    });

    const nameChangeHandler = (event) => {
        setUserInput((userInput) => {
          return {
            ...userInput,
            userName: event.target.value,
          };
        });
    };

    const emailChangeHandler = (event) => {
        setUserInput((userInput) => {
          return {
            ...userInput,
            email: event.target.value,
          };
        });
    };

    const passwordChangeHandler = (event) => {
        setUserInput((userInput) => {
          return {
            ...userInput,
            password: event.target.value,
          };
        });
    };

    const password2ChangeHandler = (event) => {
        setUserInput((userInput) => {
          return {
            ...userInput,
            password2: event.target.value,
          };
        });
    };

    const signUpHandler = async (event) => {
        event.preventDefault();
    
        const newUser = {
          fullName: userInput.userName,
          email: userInput.email,
          password: userInput.password,
          password2: userInput.password2,
        };
    
        // props.onSaveUser(newUser);
        let result = await fetch("http://localhost:3003/api/users/register", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })
        result = await result.json()

        console.log("result...", result)
    
        setUserInput(() => {
          return {
            ...userInput,
            userName: "",
            email: "",
            password: "",
            password2: "",
          };
        });
    
        // dispatch(authActions.registerApplicant({}));
      };

    
    return (
        <>
        <Head>
            <title>cXchange | Sign Up</title>
            <meta name="description" content="SignUp to cXchange" />
            <link rel="icon" href="/fav.png" />
        </Head>
        <div className='' style={{backgroundImage: 'url(/images/bq.svg)'}}>

            <header className='bg-white shadow-header   px-2 top-0  w-full'>
                <div className='container mx-auto'>
                        <nav className="flex  flex-wrap items-center justify-between p-4">
                        <div className="lg:order-1 w-auto lg:w-1/5 lg:text-center">
                            <a className="text-xl text-gray-800 font-semibold font-heading" href="#">
                                <img src='/images/logo.svg'/>
                            </a>
                        </div>
                        <div className="hidden">
                            <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
                                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>
                                        Menu
                                    </title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    
                    </nav>
                </div>
                
            </header>

                <div className=' min-h-screen py-0  sm:py-0 md:py-3 lg:py-6'>

            
                    <div className="container mx-auto mt-0 lg:mt-7 mb-0 lg:mb-8 max-w-[800px] px-3 pb-7  bg-white ">
                        <div className='h-full pb-3'>
                            <div className="flex flex-col  px-3 py-6 bg-white bx-shadow sm:px-6 md:px-8 lg:px-10 ">
                                <div className="self-center mb-2 text-xl lg:text-4xl font-semibold text-gray-700 ">
                                    <img src='/images/logo.svg'/>
                                </div>
                                <span className="justify-center text-md text-center text-gray-500 flex-items-center ">
                                Create your account
                                </span>
                            </div>
                            <div className="flex flex-col  px-3 py-3 bx-shadow sm:px-6 md:px-8 lg:px-10 max-w-[500px] mx-auto">
                                
                                <div className="py-8 px-4 md:px-6 lg:px-8 mt-4 login--bx">
                                    <form onSubmit={signUpHandler}>
                                        <div className="flex flex-col mb-2 gap-6">

                                                <div>
                                                    <label className="text-gray-700 font-bolder mb-3" htmlFor="fullname">Full Name</label>
                                                    <input
                                                        id="fullname"
                                                        type="text"
                                                        value={userInput.userName}
                                                        onChange={nameChangeHandler}
                                                        className="block w-full h-[42px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                                                        name="email"
                                                        min="3"
                                                        autoComplete="off"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-gray-700 font-bolder mb-3" htmlFor="email">Email address</label>
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        value={userInput.email}
                                                        onChange={emailChangeHandler}
                                                        className="block w-full h-[42px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                                                        name="email"
                                                        min="3"
                                                        autoComplete="off"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-gray-700 " htmlFor="password">Password</label>
                                                    <input
                                                        id="password"
                                                        type="password"
                                                        value={userInput.password}
                                                        onChange={passwordChangeHandler}
                                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300  rounded-md  focus:outline-none focus:ring-none focus:border-gray-400 h-[42px]"
                                                        name="password"
                                                        autoComplete="off"
                                                    />

                                                </div>
                                                <div>
                                                    <label className="text-gray-700 " htmlFor="password">Confirm Password</label>
                                                    <input
                                                        id="cpassword"
                                                        type="password"
                                                        onChange={password2ChangeHandler}
                                                        value={userInput.password2}
                                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300  rounded-md  focus:outline-none focus:ring-none focus:border-gray-400 h-[42px]"
                                                        name="cpassword"
                                                        autoComplete="off"
                                                    />

                                                </div>
                                        </div>
                                        <div className="flex justify-between items-center my-7">
                                            <div className="form-group form-check flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                id="agree_check"
                                            />
                                                <label className="form-check-label inline-block text-xs text-gray-800" for="agree_check">Remember me</label>
                                                
                                            </div>
                                            <a href="#" className="text-xs text-[#2F7559] hover:underline">Forgot your Password?</a>
                                        </div>
                                            
                                                    
                                        <div className="flex w-full mb-4">
                                            <button
                                                type="submit"
                                                className="h-[50px] py-2 px-4  bg-[#45CD85] hover:bg-primary focus:ring-purple-500 focus:ring-offset-none text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-none   rounded flex items-center justify-center "
                                            >
                                                Sign in
                                            </button>
                                        </div>

                                        <div
                                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                            >
                                                <p className="text-center mx-4 mb-0 font-normal text-gray-500 text-base">Or continue with</p>
                                            </div>

                                            <div className='grid items-center grid-cols-1 md:grid-cols-3  gap-5'>
                                                <button className='border px-9 py-3 rounded-md flex items-center justify-center'>
                                                    <Facebook/>
                                                </button>
                                                <button className='border px-9 py-3 rounded-md flex items-center justify-center'>
                                                    <Twitter/>
                                                </button>
                                                <button className='border px-9 py-3 rounded-md flex items-center justify-center'>
                                                    <Github />
                                                </button>
                                            </div>
                                    </form>
                                                    
                                </div>
                            </div>

                        </div>

                    </div>

            
                </div>
            </div>
        </>
    )
}

export default SignUp;