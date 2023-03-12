import React from 'react'
import './Breadcrumb.css'
export const Breadcrumb = ({subtitle, title}) => {
  return (
    <div className="breadcrumb">
            <div className="container">
                <h2>{subtitle}</h2>
                <h1>{title}</h1>
            </div>
        </div>
  )
}
