import React, { useEffect } from "react";
import { CardUpcoming } from "./CardUpcoming/CardUpcoming";
import "./Upcoming.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getMovieUpComing } from "../../store";
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <BsArrowRight className="icons"></BsArrowRight>
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <BsArrowLeft className="icons"></BsArrowLeft>
      </button>
    </div>
  );
};
export const Upcoming = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const genresLoaded = useSelector((state) => state.movies.genres);
  const movies = useSelector((state) => state.movies.movies_upcoming);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(getMovieUpComing({ type: "upcoming" }));
    }
  });
  
  return (
    <>
      <div className="upcoming">
        <div className="container">
          <div className="content">
            <div className="inner">
              <div className="wrapper">
                <div className="box-title">
                  <h2 className="title">Popular Movies & TV Shows</h2>
                </div>
                <div className="box-item">
                  <Slider {...settings}>
                    {movies.slice(0,20).map((item, index) => (
                       
                      <CardUpcoming item={item} index={index} />
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
