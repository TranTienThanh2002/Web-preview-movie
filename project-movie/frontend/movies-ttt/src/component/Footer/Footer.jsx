import React from "react";
import "./Footer.css";
import { a } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { BsDribbble, BsInstagram, BsTwitter } from "react-icons/bs";
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="newsletter">
            <div className="container">
              <div className="flex">
                <div className="box-subscribe">
                  <div className="heading">
                    <div className="title">Subscribe for Updates</div>
                    <div className="text">
                      <p>
                        Quisque turpis lectus, vestibulum vel neque a, rutrum
                        luctus odio. Quisque est purus, elementum ut enim eu,
                        sagittis venenatis sem. Pellentesque leo enim, varius
                        eget felis sed, porttitor posuere dolor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box-form">
                  <form action="">
                    <div className="form">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email address"
                      />
                      <button className="submit">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="widgets">
            <div className="container">
              <div className="flex">
                <div className="flex-col">
                  <div className="social-media">
                    <p>
                      <img
                        src="https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/01/logo-dark.png"
                        alt=""
                      />
                    </p>
                    <div className="social-link">
                      <a>
                        <TiSocialFacebook className="icons"></TiSocialFacebook>
                      </a>
                      <a>
                        <BsInstagram className="icons"></BsInstagram>
                      </a>
                      <a>
                        <BsTwitter className="icons"></BsTwitter>
                      </a>
                      <a>
                        <BsDribbble className="icons"></BsDribbble>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-col">
                  <div className="box page">
                    <div className="title">Pages</div>
                    <div className="box-content">
                      <div className="box-link">
                        <a>Home</a>
                        <a>About Us</a>
                        <a>Studio</a>
                        <a>Contact Us</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-col">
                  <div className="box our-studio">
                    <div className="title">Our studio</div>
                    <div className="box-content">
                      <div className="box-link">
                        <a>Services</a>
                        <a>Our Work</a>
                        <a>Noxe Team</a>
                        <a>History</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-col">
                  <div className="box">
                    <div className="title">Noxe studio</div>
                    <div className="text">
                      <p>
                        The Noxe Film Studio 1418 Noxe Street, Suite 3845
                        California, USA <br />
                        <a>hello@gloriathemes.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="text">
                <p>
                  2020 All Rights Reserved The Movie Studio from{" "}
                  <strong>Gloria Themes</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
