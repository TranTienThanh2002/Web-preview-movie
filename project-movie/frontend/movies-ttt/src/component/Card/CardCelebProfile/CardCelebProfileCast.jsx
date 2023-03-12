import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '.././CardCelebProfile.css'
export const CardCelebProfileCast = ({item, type}) => {
    
      const [Item, setItem] = useState(false);
      const [array, setArray] = useState({});
      
  useEffect(() => {
    
    if(item.cast) {
      const acting = item.cast.filter(type =>{
        return type.known_for_department ==="Acting";
      });
      setArray(acting);
      setItem(true)
    }

  }, [Item]);
      return (
        <>
          {Item && array.slice(0, 7).map((item, index) => (
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
}
