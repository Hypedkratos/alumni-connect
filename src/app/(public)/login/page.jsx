'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { loginUser } from '@/lib/actions/user.action';

const page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      if (res.status === true) {
        console.log(res);
        toast.success(res.message)
        router.push('/feed')
      } else {
        toast.error(res.message)
      }
      
    } catch (error) {
      // console.log('somethign went wrong in login', error)
      toast.error(error.message)
    }
    // console.log('Form data submitted:', formData);
  };

  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        {/* Left: Image */}
        <div className="w-1/2 h-screen hidden lg:block">
          <img
            src="https://wallpaperswide.com/download/laptop-wallpaper-1440x900.jpg"
            alt="Placeholder Image"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Right: Login Form */}
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <form onSubmit={handleSubmit} method="POST">
            {/* Username Input */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            {/* Remember Me Checkbox */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-blue-500"
              />
              <label htmlFor="remember" className="text-gray-600 ml-2">
                Remember Me
              </label>
            </div>
            {/* Forgot Password Link */}
            <div className="mb-6 text-blue-500">
              <Link href="/forgetpassword" className="hover:underline">
                Forgot Password?
              </Link>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Login
            </button>
          </form>
          {/* Sign up  Link */}
          <div className="mt-6 text-blue-500 text-center">
            <Link href="/signup" className="hover:underline">
              Sign up Here
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
