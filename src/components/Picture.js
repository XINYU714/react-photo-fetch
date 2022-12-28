import React from 'react'

const Picture = ({data}) => {
  return (
    <div className='image'>
        <p className="photographer">{data.photographer}</p>
        <div className="img-wrapper">
            <img src={data.src.large} alt="" srcSet="" />
        </div>
        <p className="download">
            Download Image: {''} <a  href={data.src.large}  target="_blank" rel="noreferrer">Here</a>
        </p>
    </div>
  )
}

export default Picture