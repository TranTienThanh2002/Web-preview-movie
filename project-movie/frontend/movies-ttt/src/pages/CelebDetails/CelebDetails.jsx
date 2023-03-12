import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  BsPlayCircle,
  BsHeart,
  BsArrowRight,
  BsArrowLeft,
  BsWhatsapp,
} from "react-icons/bs";
import { VscAdd } from "react-icons/vsc";
import { HiArrowSmRight } from "react-icons/hi";
import "./CelebDetails.css";
import Slider from "react-slick";
import { CardVideo } from "../../component/Video/CardVideo/CardVideo";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";

import {
  getCelebDetails,
  getGenres,
  getListImageOfCelebDetails,
  getListTvCreditOfCelebDetails,
  getListVideoOfCelebDetails,
} from "../../store";
import { Card } from "../../component/Card/Card";
import { CardSimilarMovie } from "../../component/Card/CardSimilarMovie/CardSimilar";

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
export const CelebDetails = () => {
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
  const { id } = useParams();
  const { celeb_details } = useSelector((state) => state.celebDetail);
  const { videos_celeb } = useSelector((state) => state.videoOfCelebDetails);
  const { images_celeb } = useSelector((state) => state.listImageOfCeleb);
  const { tv_credits_celeb, isLoading } = useSelector(
    (state) => state.listTvCreditForCeleb
  );
  const genresLoaded = useSelector((state) => state.movies.genres);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(getGenres());
    dispatch(getCelebDetails({ person_id: id }));
    dispatch(getListVideoOfCelebDetails({ person_id: id }));
    dispatch(getListImageOfCelebDetails({ person_id: id }));
    dispatch(getListTvCreditOfCelebDetails({ person_id: id }));
    setLoading(false);
  }, [id]);
  useEffect(()=>{},[loading])
  return (
    <>
      {loading ? (
        <div className="loading">
          <ReactLoading type="spinningBubbles" color="#fff" />
        </div>
      ) : (
        <div className="celeb-details">
          <div className="container">
            <div className="content">
              <div className="title-overview">
                <div className="cover">
                  <div className="cover-content">
                    <div className="poster">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${celeb_details.profile_path}`}
                        alt=""
                      />
                    </div>
                    <div className="cover-details">
                      <h6>{celeb_details.known_for_department}</h6>
                      <h1>{celeb_details.name}</h1>
                      <div className="mini-summary">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim blandit volutpat maecenas
                          volutpat blandit aliquam etiam erat. Nibh cras
                          pulvinar mattis nunc sed blandit libero. Vitae congue
                          mauris rhoncus aenean vel elit scelerisque mauris
                          pellentesque.
                        </p>
                      </div>
                      <div className="items">
                        <div className="dotted-items">
                          <div className="item genres">
                            <div className="genre">
                              <Link>{celeb_details.place_of_birth}</Link>
                            </div>
                          </div>
                          <div className="item release-date">
                            {celeb_details.birthday}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-content">
                <div className="box-content-full">
                  <div className="sticky-slider">
                    <article className="single-title">
                      <div className="box-module-items">
                        <div className="module-item box-related-title">
                          <div className="module-title">
                            <div className="heading">
                              <h5>Movies Credit</h5>
                            </div>
                            <div className="button-view-all">
                              <Link>
                                <span>See All Movies Credit</span>
                                <HiArrowSmRight className="icon"></HiArrowSmRight>
                              </Link>
                            </div>
                          </div>
                          <div className="module-content">
                            <div className="content-similar">
                              <Slider {...settings}>
                                {videos_celeb.cast
                                  ?.slice(0, 20)
                                  .map((item, index) => (
                                    <CardSimilarMovie
                                      item={item}
                                      index={index}
                                      genres={genresLoaded}
                                      type="movies"
                                    />
                                  ))}
                              </Slider>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box-module-items">
                        <div className="module-item box-related-title">
                          <div className="module-title">
                            <div className="heading">
                              <h5>Tv Shows Credit</h5>
                            </div>
                            <div className="button-view-all">
                              <Link>
                                <span>See All Tv Shows Credit</span>
                                <HiArrowSmRight className="icon"></HiArrowSmRight>
                              </Link>
                            </div>
                          </div>
                          <div className="module-content">
                            <div className="content-similar">
                              <Slider {...settings}>
                                {tv_credits_celeb.cast
                                  ?.slice(0, 20)
                                  .map((item, index) => (
                                    <CardSimilarMovie
                                      item={item}
                                      index={index}
                                      genres={genresLoaded}
                                      type="tvshows"
                                    />
                                  ))}
                              </Slider>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box-module-items">
                        <div className="module-item box-related-title">
                          <div className="module-title">
                            <div className="heading">
                              <h5>Biography</h5>
                            </div>
                          </div>
                          <div className="module-content">
                            <div className="content-similar">
                              <p>{celeb_details.biography}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box-module-items">
                        <div className="module-item box-photos">
                          <div className="module-title">
                            <div className="heading">
                              <h5>Photos</h5>
                            </div>
                            <div className="button-view-all">
                              <Link>
                                <span>See All Photos</span>
                                <HiArrowSmRight className="icon"></HiArrowSmRight>
                              </Link>
                            </div>
                          </div>
                          <div className="module-content">
                            <div className="content-photo">
                              <Slider {...settings}>
                                {images_celeb.profiles
                                  ?.slice(0, 20)
                                  .map((item, index) => (
                                    <img
                                      src={`https://image.tmdb.org/t/p/w500/${item.file_path}`}
                                      alt=""
                                      key={index}
                                    />
                                  ))}
                              </Slider>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="box-module-items">
                        <div className="module-item box-social">
                          <div className="social-item">
                            <div className="social-link">
                              <div className="facebook">
                                <Link>
                                  <GrFacebookOption className="icon"></GrFacebookOption>
                                  <span>Facebook</span>
                                </Link>
                              </div>
                              <div className="twitter">
                                <Link>
                                  <FaTwitter className="icon" />
                                  <span>Twitter</span>
                                </Link>
                              </div>
                              <div className="linked">
                                <Link>
                                  <FaLinkedinIn className="icon" />
                                  <span>Linked</span>
                                </Link>
                              </div>
                              <div className="whatsapp">
                                <Link>
                                  <BsWhatsapp className="icon" />
                                  <span>Whatsapp</span>
                                </Link>
                              </div>
                              <div className="pinterest">
                                <Link>
                                  <FaPinterestP className="icon" />
                                  <span>Pinterest</span>
                                </Link>
                              </div>
                              <div className="email">
                                <Link>
                                  <MdEmail className="icon" />
                                  <span>Email</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
