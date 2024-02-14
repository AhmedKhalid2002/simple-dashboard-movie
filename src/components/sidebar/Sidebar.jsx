import React from 'react'
import portfolio from '../../assets/Ellipse 1.png'
import eli1 from '../../assets/Ellipse 8.png'
import eli2 from '../../assets/Ellipse 9.png'
import eli3 from '../../assets/Ellipse 10.png'
import layout from '../../assets/layout.png'
import media from '../../assets/media.png'
import navigation from '../../assets/navigation.png'
import notification from '../../assets/notification.png'
import setting from '../../assets/Settings-alt.png'
import status from '../../assets/status.png'
import plus from '../../assets/Plus.png'


export default function Sidebar() {
  return (
    <>
        <div className='position-fixed top-0 start-0 d-flex flex-column align-items-center justify-content-around   vh-100   border-0 border-end border-4 border-secondary border-opacity-25   p-2 '>
            <div className=' w-100 d-flex justify-content-center '>
                <img src={portfolio} alt="portfolio" className=' w-auto p-3' />
            </div>
            <ul className='list-unstyled   d-flex flex-column justify-content-around   align-items-center w-100' style={{height:'350px'}}>
              <li>
                  <a className='cursor'>
                    <img src={layout} alt="layout" className='w-75' />
                  </a>
              </li>
              <li>
                  <a className='cursor'>
                    <img src={navigation} alt="navigation" className='w-75'/>
                  </a>
              </li>
              <li>
                  <a className='cursor'>
                    <img src={status} alt="status" className='w-75' />
                  </a>
              </li>
              <li>
                  <a className='cursor'>
                    <img src={notification} alt="notification" className='w-75' />
                  </a>
              </li>
              <li>
                  <a className='cursor'>
                    <img src={media} alt="media" className='w-75' />
                  </a>
              </li>
              <li>
                  <a className='cursor'>
                    <img src={setting} alt="setting" className='w-75' />
                  </a>
              </li>
            </ul>
            <ul className='list-unstyled position-relative   d-flex flex-column  rounded  shadow   align-items-center w-50' style={{height:'200px'}}>
                <ul className='list-unstyled  w-100 d-flex flex-column align-items-center justify-content-around' style={{height:"150px"}}>
                    <li>
                      <div className='mt-2'>
                        <img src={eli1} alt="eli1"  />
                      </div>
                  </li>
                  <li>
                      <div >
                        <img src={eli2} alt="eli2"  />
                      </div>
                  </li>
                  <li>
                      <div >
                        <img src={eli3} alt="eli3" />
                      </div>
                  </li>
                </ul>
              <li className='position-absolute bottom-0 '>
                  <div className='bg-warning rounded-circle cursor' >
                    <img src={plus} alt="plus" className='w-100' />
                  </div>
              </li>
            </ul>
            <div className=' d-flex justify-content-between align-items-center w-50'>
                <div className="form-check form-switch ">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                </div>
                <div>
                  <i className="fa-solid fa-right-from-bracket text-danger"></i>
                </div>
            </div>
        </div>
    </>
  )
}
