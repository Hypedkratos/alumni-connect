import Link from 'next/link'
const TeamCard = ({name="name",image="../favicon.ico",experties="exterties"}) => {
    
    return (
        <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                  <img
                    className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                    src={image}
                    alt="avarat image"
                  />
                </div>
                <div className="text-center">
                  <Link
                    href={`team/${name}`}
                    className="text-dark font-semibold hover:text-blue-700 text-[1.25rem] transition-colors duration-200 ease-in-out"
                  >
                {name}
                  </Link>
                  <span className="block font-medium text-muted">
                    {experties}
                  </span>
                </div>
              </div>
    )
}

export default TeamCard
