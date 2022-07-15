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
    <div className="h-full w-screen flex flex-col justify-between items-center bg-gray-100">
      <MetaTags title="Home" description="Home page" />
      <div className="w-full">
        <Header />
      </div>
      <section className="sm:w-10/12 flex flex-col  sm:items-center sm:justify-start text-black bg-white sm:mx-auto">
        <h2
          id="rajdhani"
          className="sm:text-2xl text-emerald-600 font-bold my-6"
        >
          Current Best Sellers!
        </h2>
        <div className="h-60 sm:h-1/2 w-5/6 flex items-center justify-center 2xl:mt-16 2xl:pb-12 sm:mb-8">
          <BestSellersCell />
        </div>
      </section>
      <div className="flex w-10/12 h-80 justify-center mt-0 sm:mt-4 mb-8">
        <section className="w-2/5 h-full flex flex-col items-center justify-center text-black bg-white">
          <h3 id="rajdhani" className="font-bold text-xl text-emerald-600">
            New Releases!
          </h3>
          <div className="mt-4">
            <NewReleasesCell />
          </div>
        </section>
        <section className="w-2/5 h-full flex flex-col items-center justify-center text-black bg-white">
          <h3 id="rajdhani" className="font-bold text-xl text-emerald-600">
            Best Bargains!
          </h3>
          <div className="mt-4">
            <BestBargainsCell />
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
