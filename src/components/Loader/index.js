import React from 'react'
import Gif from '../../assets/spinner.gif'

const Loader = () => {
  return (
    <div className="loader">
      <img src={Gif} alt="Loading" className="loading-map"/>
      <h1>Fetching Data</h1>
    </div>
  )
}

export default Loader
