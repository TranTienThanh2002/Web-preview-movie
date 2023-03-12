import React from "react";
import { Link } from "react-router-dom";
import "./CardUpcoming.css";

export const CardUpcoming = ({ item, index }) => {
 
  return (
    <>
      <div className="box-card" key={index}>
        <div className="poster">
          <Link to={`/movies/${item.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.image}`}
              alt="upcoming"
            />
          </Link>
        </div>
        <div className="details">
          <div className="title">
            <Link to={`/movies/${item.id}`}>{item.name}</Link>
          </div>
          <div className="genres">
            <div className="genre">
              {item.genres.map((genre, index) => (
                <Link key={index}>{genre}</Link>
              ))}
            </div>
          </div>
          <div className="text">
            Etiam nec eros tellus. In vitae ultricies purus, ac pellentesque
            lorem. Suspendisse vitae elit nibh. Maecenas ultricies, orci eu
            sodales lobortis, velit orci tristique orci, eu accumsan metus.
          </div>
        </div>
      </div>
    </>
  );
};
