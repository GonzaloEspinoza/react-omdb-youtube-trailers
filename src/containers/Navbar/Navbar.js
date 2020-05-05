import React from 'react'
import SeacrhMovie from '../../components/searchMovie/searchMovies'
import './Navbar.css'

class Navbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <nav>
                <nav className=" navbar-content navbar fixed-top navbar-expand navbar-dark  ">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    
                    <i class="logo-traillers-icon fas fa-film "></i>
                    <a className="navbar-brand " onClick={()=>this.props.redirecionHome()} >Trailers</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <SeacrhMovie sendSearch={this.props.sendSearch} />
                    </div>
                </nav>
            </nav>
        )
    }
}

export default Navbar