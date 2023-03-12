import React from 'react'
import { Link } from 'react-router-dom'
import './BlogCard.css'
export const BlogCard = () => {
  return (
    <>
        <div className="blog-card">
            <div className="blog-image">
                <Link><img src="https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/blog-11-650x430.jpg" alt="blog" /></Link>
            </div>
            <div className="box-content">
                <div className="category">
                    <Link>TV SHOWS</Link>
                </div>
                <div className="title">
                    <Link>King’s Life season 1 to air on AMC later this year</Link>
                </div>
                <div className="details">
                    <div className="details-item">
                        <div className="author">
                            <span >by</span>
                            <Link >John Doe</Link>
                        </div>
                        <div className="date">
                            <span>3 years ago</span>
                        </div>
                        <div className="comment">
                            <Link>2 Comments</Link>
                        </div>
                    </div>
                </div>
                <div className="excerpt">
                    <p>Sed bibendum laoreet ultrices. Maecenas consectetur venenatis metus, quis elementum purus mollis non. Donec vitae euismod nisl ullam vitae interdum.</p>
                </div>
            </div>
        </div>
    </>
  )
}
