import React from 'react'
import { CommentForm } from './CommentForm/CommentForm'
import { CommentList } from './CommentList/CommentList'
import './Comment.css'
export const Comment = ({item}) => {
  return (
    <>
    <div className="item-comment">
        <div className="container">
            <div className="comments">
                <CommentList item={item}/>
                <CommentForm/>
            </div>
        </div>
    </div>
    
    </>
  )
}
