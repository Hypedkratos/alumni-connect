import { Crousel, Faq, Home1 } from '@/components'

export default function Home() {
  return (
    <>
      <div className="bg-white pt-4 lg:pt-16 relative lg:ml-5 pb-20 lg:pb-10 ">
        <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
          <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl ">
            Run successful remote and <br className="lg:block hidden" />{" "}
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 ">
              Hybrid teams
            </span>
            .
          </h1>
          <div className="lg:flex">
            <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
              <p className="sm:text-lg text-gray-700  lg:w-11/12">
                DailyBot takes chat and collaboration to the next level: daily
                standups, team check-ins, surveys, kudos, best companion bot for your
                virtual watercooler, 1:1 intros, motivation tracking and more.
              </p>
              <span className="block font-semibold text-gray-500 ">
                The best companion bot for your chat app.
              </span>

              <p className="sm:text-lg text-gray-700  lg:w-10/12">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, vitae neque quas suscipit delectus minima
                asperiores nulla ex tempore voluptatibus corrupti dignissimos blanditiis perspiciatis, id porro? Velit excepturi
                commodi labore ut suscipit et enim at similique maxime consequatur, atque ab modi minus laboriosam? Maiores, natus
                ducimus inventore aspernatur excepturi ut odio dicta! Tempore eveniet ad modi eius! Delectus facilis consequuntur
                ipsum, quidem eveniet laboriosam optio expedita a unde vitae dolorem cupiditate? Consequuntur impedit, sint fugit
                accusantium repellendus fugiat vitae at neque. Repudiandae, accusamus. A, provident neque ipsum consequuntur sed
                at veniam veritatis praesentium minima. Laborum omnis beatae id sequi molestias accusantium labore voluptates vel,
                qibusdam. Quia excepturi eaque perferendis, aspernatur
                at voluptatum deserunt incidunt assumenda nulla, labore repellendus, corrupti optio debitis ab ratione. Provident explicabo
                doloribus, vitaeandae porro ipsam totam tempora cupiditate quod explicabo hic! Necessitatibus quidem magni ad quod maiores autem,
                commodi delectus atque praesentium saepe, suscipit, inventore nostrum dolorem cupiditate velit quibusdam?
              </p>
              <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                <a
                  aria-label="add to slack"
                  href="#"
                  className="p-4 border border-gray-200  rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 "
                >
                  <div className="flex justify-center space-x-4">
                    <img
                      className="w-6 h-6"
                      src="https://tailus.io/sources/blocks/tech-startup/preview/images/slack.png"
                      alt="slack logo"
                      loading="lazy"
                      width={128}
                      height={128}
                    />
                    <span className="hidden font-medium md:block ">
                      Slack
                    </span>
                  </div>
                </a>
                <a
                  aria-label="add to chat"
                  href="#"
                  className="p-4 border border-gray-200 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 "
                >
                  <div className="flex justify-center space-x-4">
                    <img
                      className="w-6 h-6"
                      src="https://tailus.io/sources/blocks/tech-startup/preview/images/chat.png"
                      alt="chat logo"
                      loading="lazy"
                      width={128}
                      height={128}
                    />
                    <span className="hidden font-medium md:block ">
                      Google Chat
                    </span>
                  </div>
                </a>
                <a
                  aria-label="add to zoom"
                  href="#"
                  className="p-4 border border-gray-200  rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 "
                >
                  <div className="flex justify-center space-x-4">
                    <img
                      className="w-6 h-6"
                      src="https://tailus.io/sources/blocks/tech-startup/preview/images/zoom.png"
                      alt="chat logo"
                      loading="lazy"
                      width={128}
                      height={128}
                    />
                    <span className="hidden font-medium md:block ">
                      Zoom
                    </span>
                  </div>
                </a>
              </div>
              <div className="">
                🔥🌟
                <span>Other integrations :</span>
                <a
                  href="#"
                  className="font-semibold text-gray-700 "
                >
                  Discord,
                </a>
                <a
                  href="#"
                  className="font-semibold text-gray-700 "
                >
                  Telegram
                </a>
              </div>
              <div className="pt-12 flex gap-6 lg:gap-12 justify-between grayscale lg:w-2/3">
                <img
                  src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/airbnb.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt=""
                />
                <img
                  src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/ge.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt=""
                />
                <img
                  src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/coty.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt=""
                />
                <img
                  src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/microsoft.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-12 md:mt-0 lg:absolute-right-10 lg:w-7/12 md:order-last order-first">
              <div className="relative w-full">
                <div
                  aria-hidden="true"
                  className="absolute scale-75 md:scale-100 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"
                />
                <img
                  src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg"
                  className="relative w-full lg:w-[90%]"
                  alt="wath illustration"
                  loading="lazy"
                  width={320}
                  height={280}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <Home1/>
      <Crousel/>
      <Faq />
    </>
  )
}
