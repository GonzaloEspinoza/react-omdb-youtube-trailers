import React from 'react'
import { Link } from 'react-router-dom'

import './Cards.css'



const Card = ({ movie, movideDeatail, movieTitle, lg, myRef}) => {
    
    return (
        <div className={`col-md-4 col-lg-${lg} col-sm-4 col-6 mt-1 mb-1`} href="#inicio" >

            <div onClick={()=>{movideDeatail(movie), movieTitle(movie)}} className="card card-conrtent" >
                
                
                <img src={movie.Poster} alt={movie.Title} className="card-img btn p-0" width="100" />
            
              
                <div className="card-body card-body2">
                    <h4 className="title-cards"> {movie.Title}-{movie.Year}</h4>
                    <p> {movie.Type} </p>
                </div>
            </div>
        </div>
    )
}


export default Card