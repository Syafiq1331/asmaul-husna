import React from 'react'

const AsmaulHusna = ({ name, translation, meaning }) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <h2 className='text-3xl'>{name}</h2>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{translation}</h2>
        <p>{meaning}</p>
        {/* <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  )
}

export default AsmaulHusna