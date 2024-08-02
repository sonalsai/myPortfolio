/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar'
import Home from '../Home/Home'

function Index() {

    const [showHome, setShowHome] = useState(false);

    const handleDisplayHome = () => {
        setShowHome(true);
    }
    return (
        <div className='container'>
            <SideBar handleDisplayHome={handleDisplayHome} />
            {showHome && <Home />}
        </div>
    )
}

export default Index