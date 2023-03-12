import React from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { getItemsByGenres, getItemsByQuery } from "../../store";
import "./Searchlist.css";
export const Searchlist = ({ genres, item, type ,handleChange}) => {
  const dispatch = useDispatch();
  
  return (
    <>
      <div className="search-list">
        <div className="container">
          <div className="content">
            <form action="">
              <div className="form-content">
                <div className="details">
                  <div className="title">Search movies and TV shows</div>
                  <div className="count">Total {item} items</div>
                </div>
                <div className="keyword">
                  <FiSearch className="icons"></FiSearch>
                  <input
                    type="text"
                    name="keyword"
                    placeholder="Find movies tv shows documentary and more..."
                    onChange={(e) => {
                      
                      dispatch(
                        getItemsByQuery({
                          type: type,
                          query: e.target.value,
                          page: "1"
                        })
                      );
                      handleChange(e);
                    }}
                    
                  />
                </div>
                {/* <div className="fields">
                  <div className="field-item">
                    <div className="item genres">
                      <select
                        name="genres"
                        id="genres"
                        placeholder="Genres"
                        onChange={(e) => {
                          dispatch(
                            getItemsByGenres({
                              type: type,
                              genre: e.target.value,
                            })
                          );
                        }}
                      >
                        <option value="0" selected="selected">
                          Genres
                        </option>
                        {genres.map((genre) => (
                          <option value={genre.name} key={genre.id}>
                            {genre.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="item button-submit">
                      <button type="submit" className="btn-submit">
                        Search
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
