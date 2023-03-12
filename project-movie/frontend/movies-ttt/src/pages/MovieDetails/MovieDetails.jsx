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
import "./MovieDetails.css";
import Slider from "react-slick";
import { CardVideo } from "../../component/Video/CardVideo/CardVideo";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  getGenres,
  getListCreditOfMovieDetails,
  getListImageOfMovieDetails,
  getListReviewMovieDetails,
  getListSimilarMovieDetails,
  getListVideoOfMovieDetails,
  getMovieDetails,
} from "../../store";
import { CardCelebProfileDirect } from "../../component/Card/CardCelebProfile/CardCelebProfileDirect";
import { CardCelebProfileCrew } from "../../component/Card/CardCelebProfile/CardCelebProfileCrew";
import { CardCelebProfileCast } from "../../component/Card/CardCelebProfile/CardCelebProfileCast";
import { CardSimilarMovie } from "../../component/Card/CardSimilarMovie/CardSimilar";
import { Comment } from "../../component/Comment/Comment";
import { Rating } from "@mui/material";
import ReactLoading from "react-loading";
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
export const MovieDetails = () => {
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
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { movie_details } = useSelector((state) => state.movieDetails);
  const { videos_movies } = useSelector((state) => state.videoOfMoviesDetails);
  const { images_movies } = useSelector((state) => state.listImageOfMovie);
  const { credits_movies } = useSelector((state) => state.listCreditForMovie);
  const { review_movies } = useSelector(
    (state) => state.listReviewMovieDetails
  );
  const { similar_movies, isLoading } = useSelector(
    (state) => state.listSimilarMovieDetails
  );
  const genresLoaded = useSelector((state) => state.movies.genres);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
    dispatch(getMovieDetails({ movie_id: id }));
    dispatch(getListVideoOfMovieDetails({ movie_id: id }));
    dispatch(getListImageOfMovieDetails({ movie_id: id }));
    dispatch(getListCreditOfMovieDetails({ movie_id: id }));
    dispatch(getListSimilarMovieDetails({ movie_id: id }));
    dispatch(getListReviewMovieDetails({ movie_id: id }));
    setLoading(false);
    console.log(credits_movies);
  }, [id]);
  useEffect(()=>{
    console.log(credits_movies);
  },[loading])
  return (
    <>
      {loading ? (
        <>
          <div className="loading">
            <ReactLoading type="spinningBubbles" color="#fff" />
          </div>
        </>
      ) : (
        <div className="movie-details">
          <div className="container">
            <div className="content">
              <div className="title-overview">
                <div
                  className="cover"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie_details.backdrop_path})`,
                  }}
                >
                  <div className="cover-content">
                    <div className="poster">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${
                          movie_details.belongs_to_collection?.poster_path
                            ? movie_details.belongs_to_collection?.poster_path
                            : movie_details.poster_path
                        }`}
                        alt=""
                      />
                    </div>
                    <div className="cover-details">
                      <h6>{movie_details.release_date}</h6>
                      <h1>
                        {movie_details.original_title
                          ? movie_details.title
                          : movie_details.original_title}
                      </h1>
                      <div className="mini-summary">
                        <p>{movie_details.overview}</p>
                      </div>
                      <div className="items">
                        <div className="circular-items">
                          <div className="watch-trailer">
                            {videos_movies.results?.slice(0, 1).map((item) => (
                              <Link
                                to={`https://www.youtube.com/embed/${item.key}?controls=0`}
                              >
                                <div className="icons">
                                  <BsPlayCircle className="icon"></BsPlayCircle>
                                </div>
                                <span>Watch the Trailer</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="dotted-items">
                          <div className="item time">
                            {movie_details.runtime}min
                          </div>
                          <div className="item genres">
                            <div className="genre">
                              {movie_details?.genres?.map((item) => (
                                <Link>{item.name}</Link>
                              ))}
                            </div>
                          </div>
                          <div className="item release-date">
                            {movie_details.release_date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-details">
                  <div className="details-content">
                    <div className="details-inner">
                      <div className="inner-item">
                        <div className="user-ratings user">
                          <div className="star">
                            <Rating
                              name="customized-10"
                              defaultValue={Math.ceil(
                                movie_details.vote_average
                              )}
                              max={10}
                              size="small"
                              precision={0.5}
                              readOnly
                            />
                          </div>
                          <div className="results">
                            <span>{movie_details.vote_average}</span>
                            <span>10</span>
                          </div>
                        </div>
                        <div className="user-imdb-rating user">
                          <div className="point">6.7</div>
                          <span>IMDB</span>
                        </div>
                        <div className="user-status user">
                          <div className="status-title">Status</div>
                          <div className="status-content">
                            <div className="status-item">
                              <Link>{movie_details.status}</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="buttons">
                        <div className="btn btn-add-wishlist">
                          <Link>
                            <VscAdd className="icon"></VscAdd>
                          </Link>
                        </div>
                        <div className="btn btn-favorites">
                          <Link>
                            <BsHeart className="icon"></BsHeart>
                          </Link>
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
                        <div className="module-item box-videos">
                          <div className="module-title">
                            <div className="heading">
                              <h5>Videos & Trailers</h5>
                            </div>
                            <div className="button-view-all">
                              <Link>
                                <span>See all videos</span>
                                <HiArrowSmRight className="icon"></HiArrowSmRight>
                              </Link>
                            </div>
                          </div>
                          <div className="module-content">
                            <div className="content-slider">
                              <Slider {...settings}>
                                {videos_movies.results?.map((item, index) => (
                                  <CardVideo
                                    item={item}
                                    index={index}
                                    type="movies"
                                  />
                                ))}
                              </Slider>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box-module-items">
                        <div className="module-item box-cast">
                          <div className="module-title">
                            <div className="heading">
                              <h5>Cast & Crew</h5>
                            </div>
                            <div className="button-view-all">
                              <Link>
                                <span>See Full Cast</span>
                                <HiArrowSmRight className="icon"></HiArrowSmRight>
                              </Link>
                            </div>
                          </div>
                          <div className="module-content">
                            <div className="content-crew">
                              <div className="box-crew">
                                <div className="director">
                                  <CardCelebProfileDirect
                                    item={credits_movies}
                                    type="movies"
                                  />
                                </div>
                              </div>
                              <div className="box-crew">
                                <div className="writer-screenwriter">
                                  <CardCelebProfileCrew
                                    item={credits_movies}
                                    type="movies"
                                  />
                                </div>
                              </div>
                              <div className="box-crew">
                                <div className="cast">
                                  <CardCelebProfileCast
                                    item={credits_movies}
                                    type="movies"
                                  />
                                </div>
                              </div>
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
                                {images_movies.posters
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
                        <div className="module-item box-related-title">
                          <div className="module-title">
                            <div className="heading">
                              <h5>Related Titles</h5>
                            </div>
                            <div className="button-view-all">
                              <Link>
                                <span>See All Related Titles</span>
                                <HiArrowSmRight className="icon"></HiArrowSmRight>
                              </Link>
                            </div>
                          </div>
                          <div className="module-content">
                            <div className="content-similar">
                              <Slider {...settings}>
                                {similar_movies.results
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
            <Comment item={review_movies} />
          </div>
        </div>
      )}
    </>
  );
};
