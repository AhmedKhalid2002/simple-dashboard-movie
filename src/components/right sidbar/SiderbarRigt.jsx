import React from 'react'

import Apple from '../../assets/AppleTv.png'
import Desney from '../../assets/Desney.png'
import HBO from '../../assets/HBo.png'
import hulu from '../../assets/hulu.png'
import Netflix from '../../assets/Netflix.png'
import Prime from '../../assets/Prime.png'
export default function SidebarRight() {
  return (
    <>
        <div className='position-fixed top-0 end-0 d-flex flex-column justify-content-between align-items-center d-none d-lg-block   vh-100    border-0 border-start border-4 border-secondary border-opacity-25   p-3 '>
                <h2 className='text-white h5 mt-3'>Media Service</h2>
            <ul className='list-unstyled  d-flex flex-column justify-content-between   align-items-center w-100 mt-3 p-3' style={{height:'400px'}}>
              <li className='w-100'>
                  <a className='d-flex justify-content-between align-items-center text-decoration-none '>
                    <img src={Apple} alt="apple" />
                    <p className='text-white m-1'>Apple Tv</p>
                  </a>
              </li>
              <li className='w-100'>
                  <a className='d-flex justify-content-between align-items-center text-decoration-none ' >
                    <img src={Desney} alt="desny" />
                    <p className='text-white m-1'>Desney Tv</p>

                  </a>
              </li>
              <li className='w-100'>
                  <a className='d-flex justify-content-between align-items-center text-decoration-none '>
                    <img src={HBO} alt="hbo"  />
                    <p className='text-white m-1'>HBO Max</p>

                  </a>
              </li>
              <li className='w-100'>
                  <a className='d-flex justify-content-between align-items-center text-decoration-none '>
                    <img src={hulu} alt="hulu"/>
                    <p className='text-white m-1'>Hulu Tv</p>
                  </a>
              </li>
              <li className='w-100'>
                  <a className='d-flex justify-content-between align-items-center text-decoration-none '>
                    <img src={Netflix} alt="netflix"  />
                    <p className='text-white m-1'>Netflix Tv</p>
                  </a>
              </li>
              <li className='w-100'>
                  <a className='d-flex justify-content-between align-items-center text-decoration-none '>
                    <img src={Prime} alt="prime"  />
                    <p className='text-white m-1'>Prime Tv</p>
                  </a>
              </li>
            </ul>
            <ul className='list-unstyled'>
                <li><h2 className='text-white h4'>Genre</h2></li>
                <li><a href="" className='text-decoration-none text-white bg-film-gold'>Action</a></li>
                <li className='mt-2'><a href="" className='text-decoration-none text-white bg-film-gold'>Comedy</a></li>
                <li className='mt-2'><a href="" className='text-decoration-none text-white bg-film-gold'>Drama</a></li>
                <li className='mt-2'><a href="" className='text-decoration-none text-white bg-film-gold'>Sci-Fi</a></li>
                <li className='mt-2'><a href="" className='text-decoration-none text-white bg-film-gold'>Thriller</a></li>
                <li className='mt-2'><a href="" className='text-decoration-none text-white bg-film-gold'>Westren</a></li>
            </ul>
        </div>
    </>
    
  )
}
