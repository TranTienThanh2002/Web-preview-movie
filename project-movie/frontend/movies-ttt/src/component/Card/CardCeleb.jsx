import React from "react";
import { Link } from "react-router-dom";
import "./CardCeleb.css";
export const CardCeleb = ({ item, index }) => {
  return (
    <>
      <div className="box-card-celeb">
        <div className="box-item-content" key={index}>
          <div className="box-item">
            <div className="poster">
              <Link to={`/celebs/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.image}`}
                  alt="movie"
                />
              </Link>
            </div>
            <div className="details">
              <div className="title">
                <Link to={`/celebs/${item.id}`}>{item.name}</Link>
              </div>
              <div className="genres">
                <div className="genres-item">
                  <Link key={index}>{item.genres}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
