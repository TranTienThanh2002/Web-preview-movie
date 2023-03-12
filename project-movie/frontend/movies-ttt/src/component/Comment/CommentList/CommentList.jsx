import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CommentList.css";
import Rating from "@mui/material/Rating";
// import Typography from '@mui/material/Typography';
export const CommentList = ({ item }) => {
  const [Item, setItem] = useState(false);
  useEffect(() => {
    if (item) {
      setItem(true);
    }
  }, [Item]);
  return (
    <>
      {Item && (
        <div className="comment-list">
          <h5 className="title">{item.total_results} Comments</h5>
          <div className="item">
            {item.results?.map((item, index) => (
              <div className="comment" key={index}>
                <div className="avatar">
                  <img
                    src={
                      item.author_details.avatar_path !== null
                        ? `https://image.tmdb.org/t/p/w500/${item.author_details.avatar_path}`
                        : "https://secure.gravatar.com/avatar/cf31580d2f4e7454b5d1e1af4fc03194?s=80&d=mm&r=g"
                    }
                    alt={item.author_details.username}
                  />
                  <div className="btn-reply">
                    <Link>Reply</Link>
                  </div>
                </div>
                <div className="details">
                  <div className="author">{item.author}</div>
                  <div className="time">{item.updated_at}</div>
                  <div className="comment-text">
                    <p>{item.content}</p>
                    <div className="rating">
                      <div className="user-rating">
                        <div className="star">
                          <Rating
                            name="customized-10"
                            defaultValue={Math.ceil(item.author_details.rating)}
                            max={10}
                            size="small"
                            precision={0.5}
                            readOnly
                          />
                        </div>
                        <div className="results">
                          {item.author_details.rating} out of 10
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
