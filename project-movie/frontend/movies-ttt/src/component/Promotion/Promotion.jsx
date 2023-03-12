import React from "react";
import "./Promotion.css";
import { GiDirectorChair, GiVideoCamera } from "react-icons/gi";
import {SiAndroidstudio} from 'react-icons/si'
import {BsAward} from 'react-icons/bs'
export const Promotion = () => {
  return (
    <>
      <div className="promotion">
        <div className="container">
          <div className="inner">
            <div className="wrapper">
              <div className="box-title">
                <div className="sub-title">
                  Cras porta nisl urna, a interdum arcu
                </div>
                <h2 className="title">
                  Fusce efficitur est eget erat egestas, a faucibus diam
                  vulputate. Morbi dictum neque quis ornare tristique. Vivamus
                  facilisis tincidunt consectetur.
                </h2>
              </div>
              <div className="box-service">
                <div className="grid">
                  
                  <div className="grid-col">
                    <div className="item">
                      <div className="icons">
                        <GiDirectorChair className="icon" />
                      </div>
                      <div className="title">Directoins</div>
                      <p>
                        Lorem ipsum dolor sit amet laoreet consectetuer
                        adipiscing elit. Aenean commodo ligula eget.
                      </p>
                    </div>
                  </div>
                  <div className="grid-col">
                    <div className="item">
                      <div className="icons">
                        <GiVideoCamera className="icon"></GiVideoCamera>
                      </div>
                      <div className="title">Production</div>
                      <p>
                        Lorem ipsum dolor sit amet laoreet consectetuer
                        adipiscing elit. Aenean commodo ligula eget.
                      </p>
                    </div>
                  </div>
                  <div className="grid-col">
                    <div className="item">
                      <div className="icons">
                      <SiAndroidstudio className="icon"></SiAndroidstudio>
                      </div>
                      <div className="title">Studio</div>
                      <p>
                        Lorem ipsum dolor sit amet laoreet consectetuer
                        adipiscing elit. Aenean commodo ligula eget.
                      </p>
                    </div>
                    
                  </div>
                  <div className="grid-col">
                    <div className="item">
                      <div className="icons">
                      <BsAward className="icon"></BsAward>
                      </div>
                      <div className="title">Awards</div>
                      <p>
                        Lorem ipsum dolor sit amet laoreet consectetuer
                        adipiscing elit. Aenean commodo ligula eget.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background-bottom">
            
        </div>
      </div>
    </>
  );
};
