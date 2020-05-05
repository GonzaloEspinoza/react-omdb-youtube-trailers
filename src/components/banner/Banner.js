import React, { useState, useEffect } from 'react'

import './banner.css'

import anime from 'animejs'



const Banner = () => {

    const [objImages, setObjImages] = useState([]);


    useEffect(() => {
        const url = 'https://email-api-rest.herokuapp.com/api/imgs/show'

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setObjImages(data.images)
                console.log(data)
            })


            anime({
                targets: '.banner  .title',
                scale: [
                  {value: .2, easing: 'easeOutSine', duration: 1000},
                  {value: 1, easing: 'easeInOutQuad', duration: 1200}
                ],
                delay: anime.stagger(200, {grid: [14, 10], from: 'center'})
              });

    }, []);






    if (!objImages) return <div> loading ...</div>

    return (

        <div className="content-banner mascara float-sm-left" >
            <div className="mascara-humo"> </div>
            <div className="banner m2">
           <h2 className="title float-left"> DISFRUTA DE LAS MEJORES PELICULAS</h2>
                <div className="images ">
                    {
                        objImages.map((d, i) => {
                            return (
                                <img className="el" src={d.poster} key={i} alt="loading image" />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}



export default Banner