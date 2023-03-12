import React, { useState as UseState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import './uNavbar.css'
export const UNavbar = ({ linkItem, showNavbar }) => {
  const [show, setShow] = UseState(showNavbar);
  return (
    <>
      <div className={show ? "showNavbar" : "hideNavbar"}>
        <div className="container">
          <div className="box-content">
            <div className="content-mask">
              <div className="content-offset">
                <div className="content-offset-wrapper">
                  <div className="content">
                    <div className="content-top">
                      <div className="box-close">
                        <IoMdClose className="icons" onClick={()=>setShow(false)}></IoMdClose>
                      </div>
                      <div className="box-menu">
                        <div className="box-menu-content">
                          <div className="box-menu-content-item">
                            {linkItem.map((item, index) => (
                              <Link to={item.link} key={index}>
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
          <div className="box-image">
            <img
              src="	https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/01/off-canvas-background.jpg
"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
