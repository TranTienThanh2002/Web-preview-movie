import React from "react";
import "./Pagination.css";
import usePagination from "@mui/material/usePagination";
import { useDispatch } from "react-redux";
import { fetchMovieOfPage, getItemsByQuery } from "../../store";

export const Pagination = ({ count, typeMovie, search, query }) => {
  const { items } = usePagination({
    count: count,
  });
  const dispatch = useDispatch();
  return (
    <>
      <div className="pagination">
        <div className="page-number">
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;

            if (type === "start-ellipsis" || type === "end-ellipsis") {
              children = "…";
            } else if (type === "page") {
              children = (
                <div
                  className={selected ? "number-active" : "number"}
                  {...item}
                >
                  <span
                    value={page}
                    onClick={() => {
                      search
                        ? dispatch(
                            fetchMovieOfPage({
                              type: typeMovie,
                              page,
                            })
                          )
                        : dispatch(
                            getItemsByQuery({
                              type: typeMovie,
                              query,
                              page,
                            })
                          );
                    }}
                  >
                    {page}
                  </span>
                </div>
              );
            } else {
              children = (
                <div className="btn-next" {...item}>
                  <span
                    onClick={() => {
                      search
                        ? dispatch(
                            fetchMovieOfPage({
                              type: typeMovie,
                              page,
                            })
                          )
                        : dispatch(
                            getItemsByQuery({
                              type: typeMovie,
                              query,
                              page,
                            })
                          );
                    }}
                  >
                    {type}
                  </span>
                </div>
              );
            }
            return <>{children}</>;
          })}
          {/* <div className="number">
            <span>1</span>
          </div>
          <div className="number">
            <span>2</span>
          </div>
          <div className="btn-next">
            <span>Next</span>
          </div> */}
        </div>
      </div>
    </>
  );
};
