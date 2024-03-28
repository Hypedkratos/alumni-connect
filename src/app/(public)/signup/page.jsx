'use client'
import { createUser } from '@/lib/actions/user.action';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import toast from 'react-hot-toast';

const page = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [type, setType] = useState('password');
    const [formData, setFormData] = useState({
        userId:'',
        name: '',
        gender: '', 
        roll: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await createUser(formData)
            // console.log(formData)
            if (res.status==="success") {
                // console.log(res);
                toast.success(formData.name + ", account created successfully. Please Login")
                // router.push('/login')
            } else {
                toast.error(res.message)
            }

        } catch (error) {
            console.log("error in handleSubmit", error)
            toast.error("something went wrong in creating your account")
        }
    }


    const handleCheckboxToggle = () => {
        setShowPassword(!showPassword);
        if (!showPassword) {
            setType('text');
        } else {
            setType('password');
        }
    }

    const genderOptions = ['Male', 'Female', 'Other'];
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
                    <h1 className="text-2xl font-semibold mb-4">Signup</h1>
                    <form onSubmit={handleSubmit} method="POST">
                        {/* Username Input */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-600">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                autoComplete="off"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* gender select  */}
                        <div className="mb-4">
                            <label htmlFor="gender" className="block text-gray-600 ">
                                Gender
                            </label>
                            <select
                                id="gender"
                                name="gender"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                value={formData.gender}
                                onChange={handleChange}
                                required

                            >
                                <option value="" disabled>
                                    Select Gender
                                </option>
                                {genderOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* Roll Number Input  */}
                        <div className="mb-4">
                            <label htmlFor="roll" className="block text-gray-600">
                                Roll no
                            </label>
                            <input
                                type="text"
                                id="roll"
                                name="roll"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                autoComplete="off"
                                value={formData.roll}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Email Input  */}
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
                                type={type}
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
                                checked={showPassword}
                                onChange={handleCheckboxToggle}
                            />
                            <label htmlFor="remember" className="text-gray-600 ml-2">
                                Show Password
                            </label>
                        </div>

                        {/* submit Button */}
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                        >
                            Register
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
