import React from 'react'
import { Banner } from '../../component/Banner/Banner'
import { Blog } from '../../component/Blog/Blog'
import { Header } from '../../component/Header/Header'
import { LatestMovies } from '../../component/LatestMovies/LatestMovies'
import { Promotion } from '../../component/Promotion/Promotion'
import { Trending } from '../../component/Trending/Trending'
import { Upcoming } from '../../component/Upcoming/Upcoming'
import { Video } from '../../component/Video/Video'

import './Home.css'
export const Home = () => {
  return (
    <>
        <section className="main home">
            <div className="home-wrapper">
                <div className="container">
                    <div className="content">
                        <article>
                            <div className="item">
                                <Banner/>
                                <LatestMovies/>
                                <Trending/>
                                <Promotion/>
                                <Video/>
                                <Upcoming/>
                                <Blog/>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
