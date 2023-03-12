import React from "react";
import { Link } from "react-router-dom";
import './Card.css'
export const Card = ({item,index, type}) => {
  
  return (
    <>
      <div className="box-item-content" key={index}>
        <div className="box-item">
          <div className="poster">
            <Link to={`/${type}/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.image}`}
                alt="movie"
              />
            </Link>
          </div>
          <div className="details">
            <div className="title">
              <Link to={`/${type}/${item.id}`}>{item.name}</Link>
            </div>
            <div className="genres">
              <div className="genres-item">
                {item?.genres.map((genre, index) => (
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
