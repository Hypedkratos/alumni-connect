import FollowSuggestion from "../cards/FollowSuggestion"
import Tranding from "../cards/Tranding"
import Search from "../forms/Search"
import FooterFeed from "./FooterFeed"

const RigntSideBar = () => {
  return (
    <div className="third w-full bg-red-5044 hidden md:block">
      <Search/>
      <Tranding/>
      <FollowSuggestion/>
      <FooterFeed/>
    </div>
  )
}

export default RigntSideBar
