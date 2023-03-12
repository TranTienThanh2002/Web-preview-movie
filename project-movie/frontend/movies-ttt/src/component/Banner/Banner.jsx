import React from "react";
import "./Banner.css";
export const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="box-image">
            <div className="overlay"></div>
          </div>
          <div className="box-content">
            <div className="inner">
              <div className="inner-item">
                <div className="subtitle">DIRECTING BY TIEN THANH</div>
                <div className="title">Yes! Every movie is precious.</div>
                <div className="text">
                  <p>
                    <img
                      src="https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/awards-4.png"
                      alt=""
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
