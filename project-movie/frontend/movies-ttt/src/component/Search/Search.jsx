import React from 'react'
import './Search.css'
export const Search = () => {
  return (
    <>
        <div className="box-search">
            <form action="">

<input type="text" name='search' placeholder="Type here to search"/>
            </form>
            <p className="note">
            Press Enter / Return to begin your search or hit ESC to close
            </p>
        </div>
    </>
  )
}
