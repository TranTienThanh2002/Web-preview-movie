import { Rating } from "@mui/material";
import React from "react";
import "./CommentForm.css";
export const CommentForm = () => {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <div className="comment-form">
        <div className="comment-respond">
          <h5 className="title">Leave a Comment</h5>
          <form
            action="https://demo.gloriathemes.com/noxe/demo/wp-comments-post.php"
            method="post"
            id="commentform"
            class="gt-form"
          >
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <div class="gt-item">
              <label for="gt-comment-form-message">Your Comment</label>
              <div class="gt-input-effect">
                <textarea
                  name="comment"
                  id="gt-comment-form-message"
                  rows="11"
                  tabindex="1"
                  aria-required="true"
                ></textarea>
                <span class="gt-focus-border">
                  <i></i>
                </span>
              </div>
            </div>
            <div class="gt-item-row">
              <div class="gt-item">
                <label for="gt-comment-form-name">Name *</label>
                <div class="gt-input-effect">
                  <input
                    type="text"
                    name="author"
                    id="gt-comment-form-name"
                    value=""
                    tabindex="2"
                    aria-required="true"
                  />
                  <span class="gt-focus-border">
                    <i></i>
                  </span>
                </div>
              </div>
              <div class="gt-item">
                <label for="gt-comment-form-email">Email *</label>
                <div class="gt-input-effect">
                  <input
                    type="text"
                    name="email"
                    id="gt-comment-form-email"
                    value=""
                    tabindex="3"
                    aria-required="true"
                  />
                  <span class="gt-focus-border">
                    <i></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="gt-item">
              <label for="gt-comment-form-url">Website URL</label>
              <div class="gt-input-effect">
                <input
                  type="text"
                  name="url"
                  id="gt-comment-form-url"
                  value=""
                  tabindex="4"
                />
                <span class="gt-focus-border">
                  <i></i>
                </span>
              </div>
            </div>

            <div class="gt-item">
              <label className="comment-rating-none">Your Rating</label>
              <Rating
                name="customized-10"
                defaultValue={value}
                max={10}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                size="large"
              />
            </div>
            <input
              name="submit"
              type="submit"
              id="submit"
              class="gt-style-4"
              value="Send Comment"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};
