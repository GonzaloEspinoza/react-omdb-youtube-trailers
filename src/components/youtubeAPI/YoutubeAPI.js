import React from 'react'

import './YoutubeAPI.css'


class YoutubeAPI extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            videosId: null
        }
        // this.idsVideo = this.idsVideo.bind(this)
    }

   

    render() {
        // this.nameMovie
        if(!this.props.trailers)return null

        const aux=[]
        if(!this.props.trailers.items[0])return <div className="text-dark loading-api" > 
                                <div className="title-loding">

                                <h5 className="text-white">Loading ... </h5> Eperando respuesta de la API de Youtube 
                                </div>
                              <div className="content-youtube">
                                <iframe className="iframe-youtube" src={`https://www.youtube.com/embed/dp7LAtVx-7M?autoplay=1`} allow='autoplay' allowfullscreen  >
                                </iframe>
                            </div>
                        </div>
        
        
        for (let i = 0; i < this.props.trailers.items.length; i++) {
            if(this.props.trailers.items[i].id.videoId){

                aux[i]=this.props.trailers.items[i].id.videoId        
            }
        }


        return (
            <div className="content-youtube">
                <iframe className="iframe-youtube" src={`https://www.youtube.com/embed/${aux[0]}?autoplay=1`} allow='autoplay' allowfullscreen  >
                </iframe>
            </div>
        )
    }

}


export default YoutubeAPI