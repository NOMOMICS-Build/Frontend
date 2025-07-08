import React from 'react';
import comicImg from "../assets/image/comicImage.jpg"; // Replace with comic.thumbnail later

const ComicCard = ({ comic }) => {
  if (!comic) {
    return (
      <div className="aspect-[2/3] w-full max-w-[180px] md:max-w-[200px] bg-gray-100 flex items-center justify-center text-sm text-gray-500 rounded-md shadow">
        Comic not found
      </div>
    );
  }

  return (
    <div
      className="relative w-full aspect-[2/3] max-w-[180px] md:max-w-[200px] lg:max-w-[220px]  overflow-hidden bg-cover bg-center shadow-md hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
      style={{ backgroundImage: `url(${comicImg})` }}
    >
      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 w-full px-3 py-3 bg-gradient-to-t from-black/90 to-transparent text-white flex justify-between items-end gap-3">
        <div className="space-y-1 w-2/3">
          <h1 className="text-sm font-semibold leading-tight truncate">{comic.title}</h1>
          <p className="text-xs text-gray-300">by {comic.author.name}</p>
          <p className="text-xs text-yellow-300">⭐ {Math.floor(comic.views / 1000)}k views</p>
        </div>

        <div className="text-[10px] text-right w-1/3">
          💬 {Math.floor(comic.views / 100)} comments
        </div>
      </div>
    </div>
  );
};

export default ComicCard;
