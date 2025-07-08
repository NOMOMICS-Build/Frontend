import React from 'react'
import { comics } from '../lib/comicdata'
import ComicCard from './ComicCard'
const ComicList = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  items-center overflow-hidden">
      {comics.map((comic) => (
        <ComicCard key={comic._id} comic={comic} />
      ))}
    </div>
  )
}

export default ComicList