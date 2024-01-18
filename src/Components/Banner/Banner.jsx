import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className='banner'>
            <div className="content">
                <h1 className='title'>Money <br /> Heist</h1>
                <div className='banner-btns'>
                    <button className='btn'>Play</button>
                    <button className='btn'>My List</button>
                </div>
                <h1 className='description'>
                    When the national mint and a touring school group are held hostage by robbers, police believe that the thieves have no way out. Little do they know that the thieves have a bigger plan in store.
                </h1>
            </div>
            <div className="fade">

            </div>
        </div>
    )
}

export default Banner