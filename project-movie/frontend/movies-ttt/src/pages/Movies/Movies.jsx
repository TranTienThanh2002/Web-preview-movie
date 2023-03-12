import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../component/BreadCrumb/Breadcrumb";
import { Card } from "../../component/Card/Card";
import { Pagination } from "../../component/Pagination/Pagination";
import { Searchlist } from "../../component/SearchList/Searchlist";
import { fetchMovieOfPage, getGenres } from "../../store";
import "./Movies.css";
export const Movies = () => {
  const [query, setQuery] = useState('');
  const genresLoaded = useSelector((state) => state.movies.genres);
  const movies = useSelector((state) => state.movies.movies);
  const { search_item, isLoading } = useSelector((state) => state.searchItem);
  const dispatch = useDispatch();
  const handleChange = event => setQuery(event.target.value);
  
  useEffect(() => {
    dispatch(getGenres());
  }, []);
  useEffect(() =>{},[search_item])
  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovieOfPage({ type: "movie", page: "1" }));
    }
  }, [genresLoaded]);
  return (
    <>
      <section className="movies">
        <div className="movie">
          <div className="container">
            <div className="content">
              <Breadcrumb
                subtitle={"Most Popular Movies"}
                title={"Movie Listing"}
              />

              <Searchlist
                genres={genresLoaded}
                item={isLoading? movies[0]?.total_results: search_item[0]?.total_results}
                type="movie"
                handleChange={handleChange}
              />

              {isLoading|| query==='' ? (
                <>
                  <div className="list-item">
                    {movies.map((item, index) => (
                      <Card item={item} index={index} type="movies" />
                    ))}
                  </div>
                  <Pagination
                    count={movies[0]?.total_pages}
                    typeMovie="movie"
                    search ={isLoading}
                  />
                </>
              ) : (
                <>
                  <div className="list-item">
                    {search_item.slice(0,20).map((item, index) => (
                      <Card item={item} index={index} type="movies" />
                    ))}
                  </div>
                  <Pagination
                    count={search_item[0]?.total_pages}
                    typeMovie="movie"
                    search ={isLoading}
                    query = {query}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
