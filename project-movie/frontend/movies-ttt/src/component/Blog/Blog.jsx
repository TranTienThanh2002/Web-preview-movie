import React from 'react'
import { BlogCard } from './BlogCard/BlogCard'
import './Blog.css'
export const Blog = () => {
  return (
    <>
      <div className="box-blog">
        <div className="container">
          <div className="content">
            <div className="inner">
              <div className="wrapper">
                <div className="box-item">
                  <div className="item-list">
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
