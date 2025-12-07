import React from 'react'
import bann from "../image/egs35.png"
import "../banner/banner.css"

function Banner() {
  return (
    <div className='container bannercontainer'>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <img src={bann} alt="egs accorditions" className="img-fluid w-100" />
        </div>
      </div>
    </div>
  )
}

export default Banner
