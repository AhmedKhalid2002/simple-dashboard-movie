import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import SidebarRight from '../right sidbar/SiderbarRigt'

export default function Layout() {
  return (
        <>
           <div >
                <div >
                    <div className="">
                        <Sidebar/>
                    </div>
                    <div style={{ width: 'calc(100% - 310px)',marginLeft:"120px" }}>
                        <Outlet/>
                    </div>
                    <div >
                        <SidebarRight/>
                    </div>
                </div>
           </div>
        </>
  )
}
