import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ".././CardCelebProfile.css";
export const CardCelebProfileCrew = ({ item , type}) => {
  // const array = item.crew.filter((type) => {
  //   return type.known_for_department === "Acting";
  // });
  const [Item, setItem] = useState(false);
  useEffect(() => {
    if(item.crew) {
      setItem(true)
    }
  }, [Item]);
  return (
    <>
      {Item && item?.crew.slice(8, 15).map((item, index) => (
        <div className="card-celeb-profile" key={index}>
          <Link to={`/celebs/${item.id}`}>
            <div className="item">
              <div className="profile">
                <div className="photo">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                    alt={item.name}
                  />
                </div>
                <div className="title">
                  <div className="sub-title">{item.known_for_department}</div>
                  <div className="name">{item.name}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};
