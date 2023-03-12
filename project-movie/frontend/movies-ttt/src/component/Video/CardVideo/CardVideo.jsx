import React from "react";
import { Link } from "react-router-dom";
import { BsPlayCircle } from "react-icons/bs";
import './CardVideo.css'
export const CardVideo = ({item, index, type}) => {
  return (
    <>
      <div className="card-video" key={index}>
        <div className="card-video-content">
          <div className="cover">
            <Link>
                {/* <div className="play-icon">
                <BsPlayCircle className="icon"></BsPlayCircle>
                </div> */}
                <iframe  src={`https://www.youtube.com/embed/${item.key}?controls=0`}></iframe>
                
                {/* <div className="time">
                00:03:37
                </div> */}
            </Link>
          </div>
          <div className="title">
            <Link>{item.name}</Link>
          </div>
        </div>
      </div>
    </>
  );
};
