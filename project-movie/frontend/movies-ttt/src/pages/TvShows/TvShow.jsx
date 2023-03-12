import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumb } from "../../component/BreadCrumb/Breadcrumb";
import { Card } from "../../component/Card/Card";
import { Pagination } from "../../component/Pagination/Pagination";
import { Searchlist } from "../../component/SearchList/Searchlist";
import { fetchMovieOfPage, getGenres } from "../../store";

export const TvShow = () => {
  const [query, setQuery] = useState('');
  const genresLoaded = useSelector((state) => state.movies.genres);
  const movies = useSelector((state) => state.movies.movies);
  const { search_item, isLoading } = useSelector((state) => state.searchItem);
  const handleChange = event => setQuery(event.target.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, []);
  useEffect(() =>{},[search_item])
  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovieOfPage({ type: "tv", page: "1" }));
    }
  }, [genresLoaded]);
  return (
    <>
      <section className="movies">
        <div className="movie">
          <div className="container">
            <div className="content">
              <Breadcrumb
                subtitle={"Most Popular Tv Shows"}
                title={"Tv Show Listing"}
              />
              <Searchlist
                genres={genresLoaded}
                item={isLoading? movies[0]?.total_results: search_item[0]?.total_results}
                type="tv"
                handleChange={handleChange}
              />
              {isLoading || query==='' ? (
                <>
                  <div className="list-item">
                    {movies.map((item, index) => (
                      <Card item={item} index={index} type="tvshows" />
                    ))}
                  </div>
                  <Pagination
                    count={movies[0]?.total_pages}
                    typeMovie="tv"
                    search ={isLoading}
                  />
                </>
              ) : (
                <>
                  <div className="list-item">
                    {search_item.slice(0,20).map((item, index) => (
                      <Card item={item} index={index} type="tvshows" />
                    ))}
                  </div>
                  <Pagination
                    count={search_item[0]?.total_pages}
                    typeMovie="tv"
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
