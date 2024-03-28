'use client'
import Link from 'next/link'
import { useState } from 'react';
const page = () => {
    const [email,setEmail] = useState("");
    
    const handleSubmitted =async (e) => {
        e.preventDefault();
        try {
            const user = await forgetPass(email)
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }
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
                    <h1 className="text-2xl font-semibold mb-4">Forget Password</h1>
                    <form action="#" method="POST" onSubmit={handleSubmitted}>
                        {/* Username Input */}
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) =>setEmail(e.target.value)}
                                id="username"
                                name="username"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                
                            />
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                        >
                            Get Password
                        </button>
                    </form>
                    {/* Sign up  Link */}
                    <div className="mt-6 text-blue-500 text-center">
                        <Link href="/login" className="hover:underline">
                            Login Here
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
