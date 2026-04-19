import React from "react";

import surrealismImg from "../assets/THE MAGIC TREE 2.jpg";
import trippyImg     from "../assets/iureka.png";
import psychedelicImg from "../assets/blablabla png.png";
import fantasyImg    from "../assets/MY LORD DRAGON 8.jpg";
import abstractImg   from "../assets/FULL PNG.png";
import popartImg     from "../assets/BARU KARL MAX ii.png";
import nftImg        from "../assets/dep.png";
import fanartImg     from "../assets/romeo.jpg";

const categories = [
  { id: "surrealism",  label: "Surrealism",        image: surrealismImg,  featured: true },
  { id: "trippy",      label: "Trippy",             image: trippyImg },
  { id: "psychedelic", label: "Psychedelic",        image: psychedelicImg },
  { id: "fantasy",     label: "Fantasy",            image: fantasyImg },
  { id: "abstract",    label: "Abstract",           image: abstractImg },
  { id: "popart",      label: "Pop Art / Cartoon",  image: popartImg },
  { id: "nft",         label: "NFT",                image: nftImg },
  { id: "fanart",      label: "Fan Art / Fun Art",  image: fanartImg },
];

function ArtCard({ category }) {
  return (
    <div className={`art-grid-area-${category.id} relative overflow-hidden rounded-2xl cursor-pointer group`}>
      <img
        src={category.image}
        alt={category.label}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* Hover tint */}
      <div className="absolute inset-0 bg-indigo-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white font-bold text-sm sm:text-base tracking-wider uppercase drop-shadow-lg">
          {category.label}
        </p>
        {category.featured && (
          <p className="text-indigo-300 text-xs mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Featured Category
          </p>
        )}
      </div>

      {category.featured && (
        <div className="absolute top-3 right-3 bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full">
          ★ Featured
        </div>
      )}
    </div>
  );
}

const HomeGrid = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-white text-2xl font-bold tracking-wider">Art Gallery</h1>
        <p className="text-gray-500 text-sm mt-1">Explore artwork by category</p>
      </div>

      <div className="art-grid">
        {categories.map((cat) => (
          <ArtCard key={cat.id} category={cat} />
        ))}
      </div>
    </div>
  );
};

export default HomeGrid;
