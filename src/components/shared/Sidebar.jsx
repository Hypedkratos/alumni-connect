
const Sidebar = () => {
    return (
        <div>
            <div className="first w-16 md:w-[70%]">

                <div className="sidebar flex md:items-end  flex-col sticky top-0">
                    <div className="logo invert my-4 self-start mx-2 md:mx-16">

                        <svg viewBox="0 0 24 24" aria-hidden="true"
                            className="w-8 m-auto r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk">
                            <g>
                                <path
                                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z">
                                </path>
                            </g>
                        </svg>

                    </div>
                    <ul className="flex flex-col text-2xl space-y-3 md:px-11 font-bold w-full  ">
                        <li
                            className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                            <span className="text-3xl material-symbols-outlined"> home </span> <span
                                className="hidden md:block">Home</span>
                        </li>
                        <li
                            className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                            <span className="text-3xl material-symbols-outlined"> search </span><span
                                className="hidden md:block">Explore</span>
                        </li>
                        <li
                            className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                            <span className="text-3xl material-symbols-outlined"> notifications </span><span
                                className="hidden md:block">Notifications</span>
                        </li>
                        <li
                            className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                            <span className="text-3xl material-symbols-outlined"> message </span><span
                                className="hidden md:block">Grok</span>
                        </li>
                        <li
                            className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                            <span className="text-3xl material-symbols-outlined"> lists </span><span
                                className="hidden md:block">Lists</span>
                        </li>
                        <li
                            className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                            <span className="text-3xl material-symbols-outlined"> bookmarks </span><span
                                className="hidden md:block">Bookmarks</span>
                        </li>
                        <li
                            className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                            <span className="text-3xl material-symbols-outlined"> Group </span><span
                                className="hidden md:block">Communities</span>
                        </li>
                        <li
                            className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                            <span className="text-3xl material-symbols-outlined"> box </span><span
                                className="hidden md:block">Premium</span>
                        </li>
                        <li
                            className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                            <span className="text-3xl material-symbols-outlined"> person </span><span
                                className="hidden md:block">Profile</span>
                        </li>
                        <li
                            className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                            <span className="text-3xl material-symbols-outlined"> pending </span><span
                                className="hidden md:block">More</span>
                        </li>
                        <li>
                            <div className="button w-full text-center my-4">
                                <button
                                    className="hidden md:block bg-[#1d9bf0] px-20 text-xl rounded-full py-3 text-white">Post</button>
                                <button className="md:hidden bg-[#1d9bf0]  px-2 md:px-4 text-xl rounded-full py-1 md:py-3 text-white">
                                    <span className="material-symbols-outlined">
                                        edit
                                    </span>
                                </button>
                            </div>
                        </li>
                    </ul>

                    <div className="userprofile w-full mt-10  justify-end mx-10 hidden md:flex">
                        <div
                            className="item p-3 items-center gap-5 justify-end mx-5 flex   hover:bg-gray-800 cursor-pointer rounded-full w-fit">

                            <div className="p1"><img className="w-12 h-12"
                                src="https://pbs.twimg.com/profile_images/1522060025854066688/IZs_lylH_bigger.png"
                                alt="vercel"/></div>
                            <div className="p2 ">
                                <div>Haris Ali Khan</div>
                                <div className="text-gray-500">@CodeWithHarry</div>
                            </div>

                            <div className="p3 text-2xl">
                                ...
                            </div>


                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Sidebar
