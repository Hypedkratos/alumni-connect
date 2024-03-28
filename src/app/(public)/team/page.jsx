import TeamCard from '@/components/cards/TeamCard'
import React from 'react'

const page = () => {
  return (
    <div>
     <div className="flex flex-wrap mx-auto  mb-5">
      <div className="w-full max-w-full px-3 mb-6  mx-auto">
        <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border border-dashed border-stone-200 bg-white m-5">
          <div className="flex-auto block py-8 px-9">
            <div>
              <div className="mb-9">
                <h1 className="mb-2 text-[1.75rem] font-semibold text-dark">
                  Our Executive Team
                </h1>
                <span className="text-[1.15rem] font-medium text-muted">
                  {" "}
                  Meet our talented team, a dynamic group of experts driven by
                  passion and innovation.{" "}
                </span>
              </div>
              <div className="flex flex-wrap mx-[10%] w-full">
                <TeamCard
                  name="Rathin Kumar Gorai"
                  image={"https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar11.jpg"}
                  experties={"Full Stack Devloper"}
                />
                <TeamCard
                  name="Shashi Anand Sharma" 
                  image='https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar11.jpg'
                  experties='Full Stack Devloper'
                />
                <TeamCard
                  name="Shashi Anand Sharma" 
                  image='https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar11.jpg'
                  experties='Full Stack Devloper'
                />
                <TeamCard
                  name="Shashi Anand Sharma" 
                  image='https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar11.jpg'
                  experties='Full Stack Devloper'
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default page
