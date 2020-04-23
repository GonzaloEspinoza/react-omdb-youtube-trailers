import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


import List from './containers/List'

import 'bootswatch/dist/lux/bootstrap.min.css'

const App =()=>{
    return(
        <main className="body-home">
            <div className="container">
            <List/>
            </div>
        </main>
    )
}


ReactDOM.render( <App/>, document.getElementById("root"))