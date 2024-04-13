import { PostsCard, RigntSideBar, Topbar } from "@/components"
import Newpost from "@/components/forms/Newpost"

const page = () => {
  return (
    <>
      <div className="second w-full border-[1px] border-x-gray-600 border-y-black ">
        <Topbar />
        <Newpost />
        <PostsCard />
      </div>
      <RigntSideBar/>

    </>
  )
}

export default page
