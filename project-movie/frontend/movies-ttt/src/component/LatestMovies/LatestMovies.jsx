import React, { useEffect } from "react";

import "./LatestMovies.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {  getGenres, getMovieLatest } from "../../store";
import { Card } from "../Card/Card";
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
export const LatestMovies = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
  const movies = useSelector((state) => state.movies.movies_latest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(getMovieLatest({ type: "top_rated" }));
    }
  });
  return (
    <div className="latest-movies">
      <div className="container">
        <div className="inner">
          <div className="content">
            <div className="row-content">
              <div className="content-inner">
                <div className="subtitle">Curabitur tortor purus</div>
                <h2 className="title">Our Latest Movies & TV Shows</h2>
                <p className="text">
                  Duis mi velit, auctor vitae leo a, luctus congue dolor. Nullam
                  at velit quis tortor malesuada ultrices vitae vitae lacus.
                  Curabitur tortor purus, tempor in dignissim eget, convallis in
                  lorem. Pellentesque non magna est. Sed sed mattis felis.
                  Curabitur orci turpis, pharetra in tristique quis, luctus ut
                  purus.
                </p>
              </div>
            </div>
            <div className="row-item-list">
              <div className="item">
                <div className="item-content">
                  <Slider {...settings}>
                    {movies.slice(0,20).map((item, index) => (
                      <Card item={item} index={index} type="movies"/>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
