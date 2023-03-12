import React from 'react'
import { Link } from 'react-router-dom'
import {BsPlayCircle} from 'react-icons/bs'
import './Video.css'
export const Video = () => {
  return (
    <>
        <div className="box-video">
            <div className="container">
                <div className="content">
                    <div className="inner">
                        <div className="wrapper">
                            <div className="box-title">
                                <div className="sub-title">Cras porta nisl urna, a interdum arcu</div>
                                <h2 className="title">
                                Fusce efficitur est eget erat egestas, a faucibus diam vulputate. Morbi dictum neque quis ornare tristique. Vivamus facilisis tincidunt consectetur.
                                </h2>
                            </div>
                            <div className="box-video">
                                <div className="video">
                                    <Link>
                                    <BsPlayCircle className="icon"></BsPlayCircle>
                                    </Link>
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
  )
}
