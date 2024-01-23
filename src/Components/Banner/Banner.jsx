import React, { useEffect, useState } from 'react'
import './Banner.css'
import { API_KEY } from '../../Constants/Constants'
import axios from '../../axios'
import { ImageUrl } from '../../Constants/Constants'

function Banner() {
    const [Movie, setMovie] = useState([])
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res) => {
            console.log(res.data)
            setMovie(res.data.results[0])
        })
    }, [])

    return (
        <div style={{
            backgroundImage: `url(${Movie ? ImageUrl + Movie.backdrop_path : ""})`,
            backgroundSize: `100% 40rem`, backgroundRepeat: `no-repeat`
        }} className='banner'>
            <div className="content">
                <h1 className='title'>{Movie ? Movie.title : ''}</h1>
                <div className='banner-btns'>
                    <button className='btn'>Play</button>
                    <button className='btn'>My List</button>
                </div>
                <h1 className='description'>{Movie ? Movie.overview : ''}</h1>
            </div>
            <div className="fade">
            </div>
        </div>
    )
}

export default Banner;