import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ".././Card.css";
export const CardSimilarMovie = ({ item, index, genres, type }) => {
//   const [loading, setLoading] = useState(false);
  const [listGenre, setListGenre] = useState([]);
  
  useEffect(() => {
    const array = [];
    item.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) array.push(name.name);
    });
    setListGenre(array.slice(0, 3));
    
  },[]);
  return (
    <>
      <div className="box-item-content" key={index}>
          <div className="box-item">
            <div className="poster">
              <Link to={`/${type}/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt="movie"
                />
              </Link>
            </div>
            <div className="details">
              <div className="title">
                <Link to={`/${type}/${item.id}`}>{item.original_title ? item.original_title: item.original_name}</Link>
              </div>
              <div className="genres">
                <div className="genres-item">
                  {listGenre.map((genre, index) => (
                    <Link key={index}>{genre}</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
