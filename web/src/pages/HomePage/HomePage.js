import { MetaTags } from '@redwoodjs/web'
import { Header } from 'src/components/Header'
import BestSellersCell from 'src/components/BestSellersCell'
import NewReleasesCell from 'src/components/NewReleasesCell'
import BestBargainsCell from 'src/components/BestBargainsCell'
import { Footer } from 'src/components/Footer'

const HomePage = () => {
  // function findCards() {
  // fetch('https://api.scryfall.com/cards/random')
  // .then((response) => response.json())
  // .then((data) => console.log(data))
  // }
  return (
    <div className="h-full min-h-screen w-screen flex flex-col justify-between items-center bg-gray-100">
      <MetaTags title="Home" description="Home page" />
      <div className="w-full">
        <Header />
      </div>
      <section className=" w-4/5 sm:w-4/5 md:w-10/12 flex flex-col  items-center sm:justify-start text-black bg-white sm:mx-auto">
        <h2
          id="rajdhani"
          className=" text-center sm:text-2xl text-emerald-600 font-bold my-6"
        >
          Current Best Sellers!
        </h2>
        <div className="h-auto mb-24 sm:h-1/2 w-5/6  flex items-center justify-center 2xl:mt-16 2xl:pb-12 sm:mb-8">
          <BestSellersCell />
        </div>
      </section>
      <div className="flex md:flex-row flex-col w-4/5 sm:w-10/12 md:w-full lg:w-10/12 h-auto lg:h-80 justify-center mt-0 sm:mt-4 mb-8">
        <section className="md:w-5/12 h-full flex flex-col items-center justify-center py-2 mb-auto text-black bg-white">
          <h3
            id="rajdhani"
            className="font-bold text-xl mt-2 mb-4 text-emerald-600"
          >
            New Releases!
          </h3>
          <div className="">
            <NewReleasesCell />
          </div>
        </section>
        <section className="md:w-5/12 h-full flex flex-col items-center justify-center py-2 mb-auto text-black bg-white">
          <h3
            id="rajdhani"
            className="font-bold text-xl mt-2 mb-4 text-emerald-600"
          >
            Best Bargains!
          </h3>
          <div className="">
            <BestBargainsCell />
          </div>
        </section>
      </div>
      <div className="absolute lg:relative mt-auto">
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
