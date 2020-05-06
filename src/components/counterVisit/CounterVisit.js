import React, { useState, useEffect } from 'react'

import './main.css'
import anime from 'animejs'


const CounterVisit = () => {


    const [nun, setNun] = useState(0)

    useEffect(() => {
        const url = "https://email-api-rest.herokuapp.com/api/control/show/visitas/aplication=trailers"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setNun(data.visitas)
            })

        
        
    }, [])

    return (
        <div className="content-title">
            <div className="conter-visitas">
                <h6> Cantidad de visitas realizadas: <strong className="cantidad"> {nun}  </strong> </h6>
               
            </div>
        </div>
    )
}

export default CounterVisit