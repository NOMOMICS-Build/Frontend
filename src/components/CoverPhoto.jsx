import React from 'react'
import coverPhoto from "../assets/image/CoverPhoto.png"
import { BookHeart, ChevronRight } from 'lucide-react'
const CoverPhoto = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center text-white h-[500px] flex items-center"
      style={{
        backgroundImage: `url(${coverPhoto})`,
      }}
    >
      {/* <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0 z-0"></div> */}

      <div className="z-10 max-w-5xl px-4 flex flex-col gap-4 md:max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold">Spider Man 3</h1>

        {/* Tags */}
        <div className="flex gap-3">
          <span className="bg-yellow-500 text-black px-3 py-1 text-sm rounded-full font-semibold">
            Horror
          </span>
          <span className="bg-yellow-500 text-black px-3 py-1 text-sm rounded-full font-semibold">
            Mystery
          </span>
        </div>

        {/* Description */}
        <p className="max-w-xl text-sm md:text-base leading-relaxed">
          Dozie, son of the legendary Amadioha, is ensnared in a web of mystery. A series of
          unexplained murders shadow his rise to success, turning his world into a thrilling
          puzzle. Amidst the darkness of commerce, he must solve the enigma that endangers all he
          cherishes.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-2">
          <button className="bg-yellow-400 text-white font-semibold px-5 py-2 rounded-md text-sm flex flex-row">
            Read me
            <ChevronRight/>
          </button>
          <button className="bg-white text-black font-medium px-5 py-2 rounded-md text-sm shadow flex flex-row gap-2">
            <BookHeart />
            Save me
          </button>
        </div>
      </div>
    </div>
  )
}

export default CoverPhoto