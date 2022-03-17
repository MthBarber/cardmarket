import { Link, routes } from '@redwoodjs/router'
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
    <div className="h-screen w-screen flex flex-col justify-between bg-gray-100">
      <MetaTags title="Home" description="Home page" />
      <Header />

      <section className="w-10/12 h-1/2 flex flex-col items-center justify-start text-black bg-white mx-auto">
        <h2 className="text-2xl my-6">Current Best Sellers!</h2>
        <div className="h-60 w-4/5 flex items-center justify-center mt-16">
          <BestSellersCell />
        </div>
      </section>
      <div className="flex w-full h-80 justify-center">
        <section className="w-1/3 h-full flex flex-col items-center justify-center text-black bg-white">
          <h3>New Releases!</h3>
          <div>
            <NewReleasesCell />
          </div>
        </section>
        <section className="w-1/3 h-full flex flex-col items-center justify-center text-black bg-white">
          <h3>Best Bargains!</h3>
          <div>
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
