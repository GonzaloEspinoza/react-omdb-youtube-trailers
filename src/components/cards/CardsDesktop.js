import React, { useEffect, useRef } from 'react'


import './Cards.css'


    
        
        const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
        
//    window.scrollTo(0, ref.current.offsetTop)
const useMountEffect = (fun) => useEffect(fun, [])



const CardDesktop = ({ movie, movideDeatail, movieTitle, lg, myRef }) => {


    // const myRef = useRef(null)



    useMountEffect(() => scrollToRef(myRef))


    return (
        <div className={`CardsDesktop col-md-12 col-lg-12 col-sm-9 col-10 `} >

            <div onClick={() => { movideDeatail(movie), movieTitle(movie) }}  className="card card-conrtent " >

                <div className="row">
                    <img src={movie.Poster} alt={movie.Title} onClick={() =>{if(screen.width>640)return scrollToRef(myRef)}}  
                        className="card-img btn p-0 col-lg-5 col-md-6 col-sm-12" width="100" 
                    />

                    <div className="card-body card-body2 col-lg-7 col-md-6 col-sm-12">
                        <h4 className="title-cards"> {movie.Title} </h4>
                        <p> {movie.Year} </p>
                        <p> {movie.Type} </p>
                    </div>

                </div>

            </div>
        </div>
    )
}


export default CardDesktop