import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Header } from 'src/components/Header'
import BestSellersCell from 'src/components/BestSellersCell'
import NewReleasesCell from 'src/components/NewReleasesCell'

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
      <button
        // onClick={findCards()}
        className="border-2 flex justify-center mx-auto mt-12"
      >
        Click
      </button>

      <section className="w-full h-1/3 bg-gray-600 flex flex-col items-center justify-center text-white">
        <h2>Current Best Sellers!</h2>
        <div className="h-60 w-4/5 flex items-center justify-center mt-6">
          <BestSellersCell />
        </div>
      </section>
      <div className="flex w-full h-80">
        <section className="w-2/4 h-full flex justify-center bg-red-900">
          <h3>New Releases!</h3>
          <div>
            <NewReleasesCell />
          </div>
        </section>
        <section className="w-2/4 h-full flex justify-center bg-green-900">
          <h3>Best Bargains!</h3>
        </section>
      </div>
    </div>
  )
}

export default HomePage
