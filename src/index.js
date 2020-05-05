import React from 'react'
import ReactDOM from 'react-dom'
import Fragment from 'react'
import './index.css'


import List from './containers/List'
import Footer from './containers/footer/footer'
import Navbar from './containers/Navbar/Navbar'

import 'bootswatch/dist/lux/bootstrap.min.css'




const App =()=>{
    return(

            <main className="body-home">
                {/* <Navbar/> */}
                <div className="container col-md-12">
                    <List/>
                </div>
                <Footer />
            </main>
    )
}


ReactDOM.render( <App/>, document.getElementById("root"))