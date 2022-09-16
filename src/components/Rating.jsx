import React from 'react'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Rating = ({ rating, handleClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => handleClick(i + 1)}>
          {rating > i ? (
            <AiFillStar fontSize='15px' />
          ) : (
            <AiOutlineStar fontSize='15px' />
          )}
        </span>
      ))}
    </>
  )
}

export default Rating
