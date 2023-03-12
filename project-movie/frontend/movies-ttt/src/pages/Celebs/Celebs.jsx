
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumb } from "../../component/BreadCrumb/Breadcrumb";
import { CardCeleb } from "../../component/Card/CardCeleb";
import { Pagination } from "../../component/Pagination/Pagination";
import { PaginationCeleb } from "../../component/Pagination/PaginationCeleb";
import { Searchlist } from "../../component/SearchList/Searchlist";
// import { Searchlist } from "../../component/SearchList/Searchlist";
import { fetchCelebOfPage, getGenres } from "../../store";
import './Celebs.css'
export const Celebs = () => {
  const [query, setQuery] = useState('');
  const genresLoaded = useSelector((state) => state.movies.genres);
  const celebs = useSelector((state) => state.celebs.celebs);
  const { search_item, isLoading } = useSelector((state) => state.searchItem);
  const handleChange = event => setQuery(event.target.value);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, []);
  useEffect(() =>{
  },[search_item])
  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchCelebOfPage({ type: "person", page: "1" }));
    }
  }, [genresLoaded]);
  return (
    <>
      <section className="celebs">
        <div className="celeb">
          <div className="container">
            <div className="content">
              <Breadcrumb
                subtitle={"Celebrities"}
                title={"Name list"}
              />
              <Searchlist
                genres={genresLoaded}
                item={isLoading? celebs[0]?.total_results: search_item[0]?.total_results}
                type="person"
                handleChange={handleChange}
              />
              {isLoading || query===''? (
                <>
                  <div className="list-item">
                    {celebs.map((item, index) => (
                      <CardCeleb item={item} index={index} />
                    ))}
                  </div>
                  <PaginationCeleb count={celebs[0]?.total_pages} typeMovie="person" />

                </>
              ) : (
                <>
                  <div className="list-item">
                    {search_item.slice(0,20).map((item, index) => (
                      <CardCeleb item={item} index={index} />
                    ))}
                  </div>
                  <Pagination
                    count={search_item[0]?.total_pages}
                    typeMovie="person"
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
