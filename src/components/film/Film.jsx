import React from 'react'
import film1 from '../../assets/film1.png'
import film2 from '../../assets/film2.png'
export default function Film() {
  return (
    <div className='container'>
        <div className="row p-4">
            <div className="col-md-6">
                <div>
                    <img src={film2} alt="film1" className='w-100' />
                </div>
            </div>
            <div className="col-md-6">
                <div>
                    <img src={film1} alt="film1" className='w-100' style={{height:'355px'}} />
                </div>
            </div>
        </div>
    </div>
  )
}
