
const FollowSuggestion = () => {
  return (
    <div class="who sticky top-[50vh] m-3 bg-[#16181c] w-1/2 py-5 rounded-xl space-y-1">
                <h1 class="text-xl font-bold px-3">Who To Follow</h1>


                <div class="item p-3 items-center gap-2 flex justify-between hover:bg-gray-800 cursor-pointer">
                    <div class="flex gap-3">

                        <div class="p1"><img class="w-12 h-12"
                                src="https://pbs.twimg.com/profile_images/1652878800311427073/j0-3owJd_bigger.jpg"
                                alt="vercel"/></div>
                        <div class="p2 ">
                            <div>Vercel</div>
                            <div class="text-gray-500">@vercel</div>
                        </div>
                    </div>

                    <div class="p3">
                        <button class="bg-white text-black px-5 py-2 rounded-full font-bold">Follow</button>
                    </div>

                </div>
                <div class="item p-3 items-center gap-2 flex justify-between hover:bg-gray-800 cursor-pointer">
                    <div class="flex gap-3">

                        <div class="p1"><img class="w-12 h-12"
                                src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_bigger.png"
                                alt="vercel"/></div>
                        <div class="p2 ">
                            <div>React</div>
                            <div class="text-gray-500">@react</div>
                        </div>
                    </div>

                    <div class="p3">
                        <button class="bg-white text-black px-5 py-2 rounded-full font-bold">Follow</button>
                    </div>

                </div>
                <div class="item p-3 items-center gap-2 flex justify-between hover:bg-gray-800 cursor-pointer">
                    <div class="flex gap-3">

                        <div class="p1"><img class="w-12 h-12"
                                src="https://pbs.twimg.com/profile_images/989513875124117504/UNMIb20k_bigger.jpg"
                                alt="vercel"/></div>
                        <div class="p2 ">
                            <div>Shad.js</div>
                            <div class="text-gray-500">@shad</div>
                        </div>
                    </div>

                    <div class="p3">
                        <button class="bg-white text-black px-5 py-2 rounded-full font-bold">Follow</button>
                    </div>

                </div>
                <div class="text-blue-600 px-3 cursor-pointer hover:underline my-5">Show More</div>
            </div>
  )
}

export default FollowSuggestion
