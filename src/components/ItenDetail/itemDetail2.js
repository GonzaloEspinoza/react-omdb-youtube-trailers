import React from 'react'
import './itemDetail.css'
import YoutubeApi from '../youtubeAPI/YoutubeAPI'
import { useParams } from 'react-router-dom'


class ItemDetail2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            traillers: null
        }

        const myRef = React.createRef()
    }


    render() {

        console.log(this.state)
        // var {movie} = this.props.match.params;
        // console.log(movie,'ñññññññññ')

        if (!this.props.movie) { return <h5 className="text-light pt-5">Loading...</h5> }

        return (
            <div className="card-container-detail pb-3  col-lg-12 col-sm-12 text-center ">

            <div className="image-card   col-lg-12 card bg-light text-white ">
                        {/* <img className="card-img h4-responsive" src={this.props.movie.Poster} style={{ width: '100%', height: '95%' }} alt="" /> */}

                        <div className="iframe-youtube-content  col-lg-12">

                            <YoutubeApi trailers={this.props.trailers} />

                        </div>
                       
                <div className="row p-0 m-0">
                    
                        <div className="row  title-card-detail text-center   w-100 col-lg-12 ">

                            <div className=" title-detail col-lg-12">
                                <div className="row">
                                    <h5 className="text-title-movie text-left text-light">{this.props.movie.Title}</h5>
                                
                                    <div className="star-rating col">
                                    <h2 className="text-white">
                                        <i class="fas fa-star fa-1x star-card"> </i>
                                        {this.props.movie.Ratings.length>0?this.props.movie.Ratings[0].Value:''}
                                    </h2>
                                </div>
                                </div>
                                <div className="detal-movie">
                                    <p className="text-white tipo"><strong className="strong-card">Tipo: </strong>{this.props.movie.Type}</p>
                                    <p className="text-white genero"><strong className="strong-card">Genero: </strong> {this.props.movie.Genre}</p>
                                    <p className="text-white ciudad"><strong className="strong-card">Ciudad: </strong> {this.props.movie.Country}</p>
                                    <p className="text-white año"><strong className="strong-card">Año: </strong> {this.props.movie.Year}</p>

                                <p className="card-text producido"><strong className="strong-card">Producido: </strong> {this.props.movie.Production}</p>
                                {/* <p className="card-text">Escrito por: {movie.Writer}</p> */}
                                <p className="card-text publicado"><strong className="strong-card"> Publicado: </strong> {this.props.movie.Released}</p>
                                <p className="card-text descripcion"> <strong className="strong-card"> Descripción: </strong>{this.props.movie.Plot}</p>

                     
                                </div>
                            </div>

                        </div>

                        </div>

                </div>

            </div>
        )
    }

}




export default ItemDetail2