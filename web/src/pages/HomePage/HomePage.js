import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Header } from 'src/components/Header'
import BestSellersCell from 'src/components/BestSellersCell'
import NewReleasesCell from 'src/components/NewReleasesCell'
import BestBargainsCell from 'src/components/BestBargainsCell'

const HomePage = () => {
  // function findCards() {
  // fetch('https://api.scryfall.com/cards/random')
  // .then((response) => response.json())
  // .then((data) => console.log(data))
  // }
  return (
    <div className="h-screen w-screen">
      <MetaTags title="Home" description="Home page" />
      <Header />

      <section className="w-full h-1/3 bg-gray-600 flex flex-col items-center justify-center text-white">
        <h2>Current Best Sellers!</h2>
        <div className="h-60 w-4/5 flex items-center justify-center mt-6">
          <BestSellersCell />
        </div>
      </section>
      <div className="flex w-full h-80">
        <section className="w-2/4 h-full flex flex-col items-center justify-center bg-red-900">
          <h3>New Releases!</h3>
          <div>
            <NewReleasesCell />
          </div>
        </section>
        <section className="w-2/4 h-full flex flex-col items-center justify-center bg-green-900">
          <h3>Best Bargains!</h3>
          <div>
            <BestBargainsCell />
          </div>
        </section>
      </div>
      <footer className="h-24 w-full bg-blue-600 absolute mt-36">
        <span className=" mt-6 text-center text-white">
          Designed By A Goose
        </span>
      </footer>
    </div>
  )
}

export default HomePage
