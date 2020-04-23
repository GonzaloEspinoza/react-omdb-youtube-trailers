import React from 'react'
import './itemDetail.css'
const ItemDetail2 = ({ movie }) => {


    console.log(movie)
    if (!movie) return null

    return (
        <div className="container card-container-detail pb-3 w-100 col-lg-12 text-center " id="inicio">

            <div className="row  title-card-detail text-center  w-100 col-lg-12 ">

                <div className=" title-detail col-lg-7">
                    <h5 className="text-title-movie text-left text-light">{movie.Title}</h5>
                </div>
                <div className="content-deatil col-lg-5">
                    <div className="star-rating">
                        <h2 className="text-white">
                            <i class="fas fa-star fa-1x star-card"> </i>
                            {movie.Ratings[0].Value}
                        </h2>
                    </div>
                    <div className="detal-movie">
                        <p className="text-white"><strong className="strong-card">Tipo: </strong>{movie.Type}</p>
                        <p className="text-white"><strong className="strong-card">Genero: </strong> {movie.Genre}</p>
                        <p className="text-white"><strong className="strong-card">Ciudad: </strong> {movie.Country}</p>
                        <p className="text-white"><strong className="strong-card">Año: </strong> {movie.Year}</p>
                    </div>
                </div>

            </div>
            <div className="row p-0 m-0">
                <div className="image-card col-lg-5 card bg-light text-white ">
                    <img className="card-img h4-responsive" src={movie.Poster} style={{ width: '100%', height: '95%' }} alt="" />
                </div>
                <div className="col-lg-7  card-body bg-light contend-youtube-more-datail">
                    <div className="row">
                        <div className="iframe-youtube-content col-lg-12">
                            <iframe className="iframe-youtube" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                            </iframe>
                        </div>
                        <div className="contend-more-detail col pt-3">
                            <h3 className=" title2 card-title">Título: {movie.Title}</h3>

                            <p className="card-text">Producido: {movie.Production}</p>
                            {/* <p className="card-text">Escrito por: {movie.Writer}</p> */}
                            <p className="card-text">Publicado: {movie.Released}</p>
                            <p className="card-text">Descripción: {movie.Plot}</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )

}




export default ItemDetail2