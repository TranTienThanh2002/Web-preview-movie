import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { TiSocialFacebook } from "react-icons/ti";
import { BsInstagram, BsTwitter, BsDribbble } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./uNavbar/uNavbar.css";
import "./Navbar.css";
import { IoMdClose } from "react-icons/io";
import { Login } from "../User/Login/Login";
import { Register } from "../User/Register/Register";
import { Search } from "../Search/Search";
export const Navbar = ({ isScrolled }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [user, setUser] = useState(false);

  const [userTab, setUserTab] = useState(false);
  const [search, setSearch] = useState(false);
  const Link_item = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Movies",
      link: "/movies",
    },
    {
      name: "Tv Shows",
      link: "/tvshows",
    },
    {
      name: "Celebs",
      link: "/celebs",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="nav box-item box-item-right">
            <div className="box-icon-bar" onClick={() => setShowNavbar(true)}>
              <FaBars className="icons" />
            </div>
            <div className="box-img-logo">
              <Link to="/">
                <img
                  src={
                    isScrolled
                      ? "https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/01/logo.png"
                      : "https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/01/logo-dark.png"
                  }
                  alt="logo"
                />
              </Link>
            </div>
          </div>
          <div className="nav box-item box-item-left">
            <div className="box box-menu-link">
              <div className="menu-item">
                {Link_item.map((item, index) => (
                  <Link to={item.link} key={index}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="box box-user" onClick={() => setUser(true)}>
              <BiUser className="icons"></BiUser>
            </div>
            <div className="box box-search" onClick={() => setSearch(true)}>
              <FiSearch className="icons"></FiSearch>
            </div>
            <div className="box box-socialMedia">
              <div className="social">
                <div className="social-item">
                  <div className="social-item-link">
                    <Link to="">
                      <TiSocialFacebook className="icons"></TiSocialFacebook>
                    </Link>
                    <Link>
                      <BsInstagram className="icons"></BsInstagram>
                    </Link>
                    <Link>
                      <BsTwitter className="icons"></BsTwitter>
                    </Link>
                    <Link>
                      <BsDribbble className="icons"></BsDribbble>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={showNavbar ? "showNavbar" : "hideNavbar"}>
        <div className="box-container">
          <div className="container">
            <div className="box-content">
              <div className="content-mask">
                <div className="content-offset">
                  <div className="content-offset-wrapper">
                    <div className="content">
                      <div className="content-top">
                        <div className="box-close">
                          <IoMdClose
                            className="icons"
                            onClick={() => setShowNavbar(false)}
                          ></IoMdClose>
                        </div>
                        <div className="box-menu">
                          <div className="box-menu-content">
                            <div className="box-menu-content-item">
                              {Link_item.map((item, index) => (
                                <Link to={item.link} key={index} onClick={() => setShowNavbar(false)}>
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-bottom"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-image"></div>
          </div>
        </div>
      </div>
      <div className={user ? "showLogin" : "hideLogin"}>
        <div className="container-login">
          <div className="content">
            <div className="inner">
              <div className="wrapper">
                <div className="wrapper-content">
                  <div className="box-close" onClick={() => setUser(false)}>
                    <IoMdClose className="icons"></IoMdClose>
                  </div>
                  <div className="box-container">
                    <div className="userBox">
                      <div className="tab-user">
                        <div className="tab">
                          <div className="tab-item login">
                            <div
                              className={userTab ? "hide" : "show"}
                              onClick={() => setUserTab(false)}
                            >
                              Login
                            </div>
                          </div>
                          <div className="tab-item register">
                            <div
                              className={userTab ? "show" : "hide"}
                              onClick={() => setUserTab(true)}
                            >
                              Register
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content">
                        {userTab ? <Register /> : <Login />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={search ? "showSearch" : "hideSearch"}>
        <div className="container">
          <div className="content">
            <div className="inner">
              <div className="box-close" onClick={() => setSearch(false)}>
                
                <IoMdClose className="icons"></IoMdClose>
              </div>
              <div className="box-container">
                <Search />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
