import React from 'react'
import slide from '../../assets/slide.png'

export default function Search() {
  return (
    <>
        <div>
            <div className='d-flex justify-content-between align-items-center p-5'>
                <h3 className='text-white'>Discover your Favourites</h3>
                <div className='d-flex justify-content-between ' style={{width:'500px'}}>
                    <div className='d-flex align-items-center  w-100'>
                        <input type="text" className='form-control ms-2' placeholder="search here..." />
                    </div>
                    <a className='cursor'>
                        <img src={slide}  alt="slide" className='ms-4 m-auto' />
                    </a>
                </div>
            </div>
        </div>
    </>
)
}
