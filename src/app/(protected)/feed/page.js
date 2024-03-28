import React from 'react'

const page = () => {
  return (
      <>
        {/* component */}
        <div className="h-screen overflow-y-scroll bg-white">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-8">
            <div className="post p-5 lg:p-1 rounded-md">
              <div className="lg:fixed lg:top-7 lg:left-14 lg:w-3/12 md:fixed md:w-5/12">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mb-4">
                  {/* Banner Profile */}
                  <div className="relative">
                    <img
                      src="https://placekitten.com/500/150"
                      alt="Banner Profile"
                      className="w-full rounded-t-lg"
                    />
                    <img
                      src="https://placekitten.com/150/150"
                      alt="Profile Picture"
                      className="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"
                    />
                  </div>
                  {/* User Info with Verified Button */}
                  <div className="flex items-center mt-4">
                    <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
                  </div>
                  {/* Bio */}
                  <p className="text-gray-700 mt-2">
                    {" "}
                    Web Developer | Cat Lover | Coffee Enthusiast{" "}
                  </p>
                  {/* Social Links */}
                  <div className="flex items-center mt-4 space-x-4">
                    <a href="#" className="text-blue-500 hover:underline">
                      {" "}
                      Twitter{" "}
                    </a>
                    <a href="#" className="text-blue-500 hover:underline">
                      {" "}
                      GitHub{" "}
                    </a>
                    <a href="#" className="text-blue-500 hover:underline">
                      {" "}
                      LinkedIn{" "}
                    </a>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                  <form>
                    {/* Post Content Section */}
                    <div className="mb-6">
                      <label
                        htmlFor="postContent"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Post Content:
                      </label>
                      <textarea
                        id="postContent"
                        name="postContent"
                        rows={4}
                        className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
              sm:leading-5 resize-none focus:outline-none focus:border-blue-500"
                        placeholder="What's on your mind?"
                        defaultValue={""}
                      />
                    </div>
                    {/* File Attachment Section */}
                    <div className="mb-6">
                      <label
                        htmlFor="fileAttachment"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Attach File:
                      </label>
                      <div className="relative border-2 rounded-md px-4 py-3 bg-white flex items-center justify-between hover:border-blue-500 transition duration-150 ease-in-out">
                        <input
                          type="file"
                          id="fileAttachment"
                          name="fileAttachment"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="flex items-center">
                          <svg
                            className="w-6 h-6 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                          <span className="ml-2 text-sm text-gray-600">
                            Choose a file
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          Max file size: 5MB
                        </span>
                      </div>
                    </div>
                    {/* Submit Button and Character Limit Section */}
                    <div className="flex items-center justify-between">
                      <button
                        type="submit"
                        className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2"
                      >
                        {" "}
                        Post{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={19}
                          height={19}
                          viewBox="0 0 24 24"
                          id="send"
                          fill="#fff"
                        >
                          <path fill="none" d="M0 0h24v24H0V0z" />
                          <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z" />
                        </svg>
                      </button>
                      <span className="text-gray-500 text-sm">
                        Max 280 characters
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 p-4 bg-white mt-3" id="posted">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* First Column */}
                <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
                  {/* User Info with Three-Dot Menu */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://placekitten.com/40/40"
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-gray-800 font-semibold">John Doe</p>
                        <p className="text-gray-500 text-sm">Posted 2 hours ago</p>
                      </div>
                    </div>
                    <div className="text-gray-500 cursor-pointer">
                      {/* Three-dot menu icon */}
                      <button className="hover:bg-gray-50 rounded-full p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx={12} cy={7} r={1} />
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={12} cy={17} r={1} />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* Message */}
                  <div className="mb-4">
                    <p className="text-gray-800">
                      Just another day with adorable kittens! 🐱{" "}
                      <a href="" className="text-blue-600">
                        #CuteKitten
                      </a>
                      <a href="" className="text-blue-600">
                        #AdventureCat
                      </a>
                    </p>
                  </div>
                  {/* Image */}
                  <div className="mb-4">
                    <img
                      src="https://placekitten.com/400/300"
                      alt="Post Image"
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </div>
                  {/* Like and Comment Section */}
                  <div className="flex items-center justify-between text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                        <svg
                          className="w-5 h-5 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span>42 Likes</span>
                      </button>
                    </div>
                    <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                      <svg
                        width="22px"
                        height="22px"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"
                          />
                        </g>
                      </svg>
                      <span>3 Comment</span>
                    </button>
                  </div>
                </div>
                {/* Second Column */}
                <div className="bg-white p-8 shadow-md rounded-lg">
                  {/* User Info with Three-Dot Menu */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://placekitten.com/40/40"
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-gray-800 font-semibold">John Doe</p>
                        <p className="text-gray-500 text-sm">Posted 2 hours ago</p>
                      </div>
                    </div>
                    <div className="text-gray-500 cursor-pointer">
                      {/* Three-dot menu icon */}
                      <button className="hover:bg-gray-50 rounded-full p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx={12} cy={7} r={1} />
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={12} cy={17} r={1} />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* Message */}
                  <div className="mb-4">
                    <p className="text-gray-800">
                      Just another day with adorable kittens! 🐱{" "}
                      <a href="" className="text-blue-600">
                        #CuteKitten
                      </a>
                      <a href="" className="text-blue-600">
                        #AdventureCat
                      </a>
                    </p>
                  </div>
                  {/* Image */}
                  <div className="mb-4">
                    <img
                      src="https://placekitten.com/450/500"
                      alt="Post Image"
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </div>
                  {/* Like and Comment Section */}
                  <div className="flex items-center justify-between text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                        <svg
                          className="w-5 h-5 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span>42 Likes</span>
                      </button>
                    </div>
                    <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                      <svg
                        width="22px"
                        height="22px"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"
                          />
                        </g>
                      </svg>
                      <span>3 Comment</span>
                    </button>
                  </div>
                </div>
                {/* Add more items as needed */}
                {/* First Column */}
                <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
                  {/* User Info with Three-Dot Menu */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://placekitten.com/40/40"
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-gray-800 font-semibold">John Doe</p>
                        <p className="text-gray-500 text-sm">Posted 2 hours ago</p>
                      </div>
                    </div>
                    <div className="text-gray-500 cursor-pointer">
                      {/* Three-dot menu icon */}
                      <button className="hover:bg-gray-50 rounded-full p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx={12} cy={7} r={1} />
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={12} cy={17} r={1} />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* Message */}
                  <div className="mb-4">
                    <p className="text-gray-800">
                      Just another day with adorable kittens! 🐱{" "}
                      <a href="" className="text-blue-600">
                        #CuteKitten
                      </a>
                      <a href="" className="text-blue-600">
                        #AdventureCat
                      </a>
                    </p>
                  </div>
                  {/* Image */}
                  <div className="mb-4">
                    <img
                      src="https://placekitten.com/400/700"
                      alt="Post Image"
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </div>
                  {/* Like and Comment Section */}
                  <div className="flex items-center justify-between text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                        <svg
                          className="w-5 h-5 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span>42 Likes</span>
                      </button>
                    </div>
                    <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                      <svg
                        width="22px"
                        height="22px"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"
                          />
                        </g>
                      </svg>
                      <span>3 Comment</span>
                    </button>
                  </div>
                </div>
                {/* Second Column */}
                <div className="bg-white p-8 shadow-md rounded-lg">
                  {/* User Info with Three-Dot Menu */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://placekitten.com/40/40"
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-gray-800 font-semibold">John Doe</p>
                        <p className="text-gray-500 text-sm">Posted 2 hours ago</p>
                      </div>
                    </div>
                    <div className="text-gray-500 cursor-pointer">
                      {/* Three-dot menu icon */}
                      <button className="hover:bg-gray-50 rounded-full p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx={12} cy={7} r={1} />
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={12} cy={17} r={1} />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* Message */}
                  <div className="mb-4">
                    <p className="text-gray-800">
                      Just another day with adorable kittens! 🐱{" "}
                      <a href="" className="text-blue-600">
                        #CuteKitten
                      </a>
                      <a href="" className="text-blue-600">
                        #AdventureCat
                      </a>
                    </p>
                  </div>
                  {/* Image */}
                  <div className="mb-4">
                    <img
                      src="https://placekitten.com/600/300"
                      alt="Post Image"
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </div>
                  {/* Like and Comment Section */}
                  <div className="flex items-center justify-between text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                        <svg
                          className="w-5 h-5 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span>42 Likes</span>
                      </button>
                    </div>
                    <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                      <svg
                        width="22px"
                        height="22px"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"
                          />
                        </g>
                      </svg>
                      <span>3 Comment</span>
                    </button>
                  </div>
                </div>
                {/* First Column */}
                <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
                  {/* User Info with Three-Dot Menu */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://placekitten.com/40/40"
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-gray-800 font-semibold">John Doe</p>
                        <p className="text-gray-500 text-sm">Posted 2 hours ago</p>
                      </div>
                    </div>
                    <div className="text-gray-500 cursor-pointer">
                      {/* Three-dot menu icon */}
                      <button className="hover:bg-gray-50 rounded-full p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx={12} cy={7} r={1} />
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={12} cy={17} r={1} />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* Message */}
                  <div className="mb-4">
                    <p className="text-gray-800">
                      Just another day with adorable kittens! 🐱{" "}
                      <a href="" className="text-blue-600">
                        #CuteKitten
                      </a>
                      <a href="" className="text-blue-600">
                        #AdventureCat
                      </a>
                    </p>
                  </div>
                  {/* Image */}
                  <div className="mb-4">
                    <img
                      src="https://placekitten.com/300/300"
                      alt="Post Image"
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </div>
                  {/* Like and Comment Section */}
                  <div className="flex items-center justify-between text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                        <svg
                          className="w-5 h-5 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span>42 Likes</span>
                      </button>
                    </div>
                    <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                      <svg
                        width="22px"
                        height="22px"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"
                          />
                        </g>
                      </svg>
                      <span>3 Comment</span>
                    </button>
                  </div>
                </div>
                {/* Second Column */}
                <div className="bg-white p-8 shadow-md rounded-lg">
                  {/* User Info with Three-Dot Menu */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://placekitten.com/40/40"
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-gray-800 font-semibold">John Doe</p>
                        <p className="text-gray-500 text-sm">Posted 2 hours ago</p>
                      </div>
                    </div>
                    <div className="text-gray-500 cursor-pointer">
                      {/* Three-dot menu icon */}
                      <button className="hover:bg-gray-50 rounded-full p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx={12} cy={7} r={1} />
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={12} cy={17} r={1} />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* Message */}
                  <div className="mb-4">
                    <p className="text-gray-800">
                      Just another day with adorable kittens! 🐱{" "}
                      <a href="" className="text-blue-600">
                        #CuteKitten
                      </a>
                      <a href="" className="text-blue-600">
                        #AdventureCat
                      </a>
                    </p>
                  </div>
                  {/* Image */}
                  <div className="mb-4">
                    <img
                      src="https://placekitten.com/500/300"
                      alt="Post Image"
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </div>
                  {/* Like and Comment Section */}
                  <div className="flex items-center justify-between text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                        <svg
                          className="w-5 h-5 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span>42 Likes</span>
                      </button>
                    </div>
                    <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                      <svg
                        width="22px"
                        height="22px"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"
                          />
                        </g>
                      </svg>
                      <span>2 Comment</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
   
  )
}

export default page
