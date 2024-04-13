

const Topbar = () => {
  return (
    <div>
       <div className="top flex p-3 sticky top-0 bg-black backdrop-blur-3xl opacity-80">
                <div className="absolute w-16 h-1 rounded-full bg-blue-500 bottom-0 left-[19%] z-10"></div>
                <div className="left bg-red-3001 w-1/2 flex justify-center font-bold text-lg">For You</div>
                <div className="right bg-green-3001 w-1/2 flex justify-center font-bold text-lg">Following</div>
                <div className="settings mx-2"><span className="material-symbols-outlined">
                        settings
                    </span></div>
            </div>
    </div>
  )
}

export default Topbar
