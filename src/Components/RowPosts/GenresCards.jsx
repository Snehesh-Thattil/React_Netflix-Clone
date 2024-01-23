import React, { useEffect, useState } from 'react'
import './GenresCards.css'
import axios from '../../axios'
import { ImageUrl, API_KEY } from '../../Constants/Constants'
import Youtube from 'react-youtube'

function GenresCards(props) {
    const [Movie, setMovie] = useState([])
    const [Key, setKey] = useState('')

    useEffect(() => {
        axios.get(props.url).then((res) => {
            setMovie(res.data.results)
            console.log(res.data.results)
        }).catch((err) => {
            // alert('Error')
        })
    }, [])

    const movieTrailer = (movieId) => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`).then((res) => {

            var length = res.data.results.length
            if (length !== 0) {

                if (res.data.results[0].key) { //something err needs to fixed
                    setKey(res.data.results[length - 1].key)
                } else {
                    console.log('Err: data.results.key might be Empty')
                    console.log(res.data.results[length - 1])
                }

            } else {
                console.log('Err: data.results might be Empty')
            }
        })
    }
    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
            autoplay: 0,
        }
    }

    return (
        <div className='container'>
            <p className={props.isSmall ? 'miniHeader' : 'mainHeader'}>{props.title}</p>
            <div className="Posters">
                {Movie.map((Movies) => {
                    return (
                        <div>
                            <img onClick={() => movieTrailer(Movies.id)} className={props.isSmall ? 'miniPosters' : 'mainPosters'}
                                src={Movies.backdrop_path ? ImageUrl + Movies.backdrop_path :
                                    'https://image.tmdb.org/t/p/original/5QlPMpggN5pLAZWpae0doDgRNZi.jpg'} alt="Err" />
                            <p>{props.isSmall ? Movies.title : Movies.name}</p>
                        </div>
                    )
                })}
            </div>
            {Key && <Youtube videoId={Key} opts={opts} />}
        </div>
    )
}

export default GenresCards
