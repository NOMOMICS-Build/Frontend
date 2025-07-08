import React from 'react'
import Navbar from '../../components/NavBar'
import CoverPhoto from '../../components/CoverPhoto'
import Footer from '../../components/Footer'
import ComicList from '../../components/ComicList'

const Home = () => {
  return (
    <div>
      <Navbar />
      <CoverPhoto />
      <div className=" mx-auto my-10 px-5">
        <h1 className="mb-6 text-3xl font-bold">New Release</h1>
        <ComicList />
      </div>
      <Footer />
    </div>
  )
}

export default Home
