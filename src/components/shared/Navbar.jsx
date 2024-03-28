'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
const Navbar = () => {
    const path = usePathname();
    return (
        <div>
            <header className="shadow sticky z-50 top-0">
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link href="/" className="flex items-center">
                            <img
                                src="/alumni.png"
                                className="mr-3 lg:h-12 h-5"
                                alt="Logo"
                            />
                        </Link>
                        <div className="flex items-center lg:order-2">
                            <Link
                                href="/login"
                                className="text-gray-800 hover:bg-blue-200 border-2 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
                            >
                                Log in
                            </Link>
                            <Link
                                href="/app.apk"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Download App
                            </Link>
                        </div>
                        <div
                            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <Link
                                        href="/"
                                        className={
                                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0
                                        ${path === '/' ? 'text-blue-700' : ''}
                                        `
                                        }
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className={
                                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0
                                        ${path === '/about' ? 'text-blue-700' : ''}
                                        `
                                        }
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className={
                                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0
                                        ${path === '/contact' ? 'text-blue-700' : ''}
                                      `
                                        }
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/team"
                                        className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0
                                        ${path === '/team' ? 'text-blue-700' : ''}`}
                                    >
                                        Our Team
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
