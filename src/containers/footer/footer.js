import React, { Fragment } from 'react'
import './footer.css'


class Footer extends React.Component {

    render() {
        return (
            <Fragment>
                {/* Footer */}
                <footer className="page-footer font-small bg-dark ">
                    <div style={{ backgroundColor: '#6351ce' }}>
                        <div className="container">
                            {/* Grid row*/}
                            <div className="row py-4 d-flex align-items-center">
                                {/* Grid column */}
                                <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                    <h6 className="mb-0 text-light">Encuentranos en nuestras redes sociales!</h6>
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-6 col-lg-7 text-center text-md-right text-light">
                                    {/* Facebook */}
                                    <a className="fb-ic">
                                        <i className="fab fa-facebook-f white-text mr-4"> </i>
                                    </a>
                                    {/* Twitter */}
                                    <a className="tw-ic">
                                        <i className="fab fa-twitter white-text mr-4"> </i>
                                    </a>
                                    {/* Google +*/}
                                    <a className="gplus-ic">
                                        <i className="fab fa-google-plus-g white-text mr-4"> </i>
                                    </a>
                                    {/*Linkedin */}
                                    <a className="li-ic">
                                        <i className="fab fa-linkedin-in white-text mr-4"> </i>
                                    </a>
                                    {/*Instagram*/}
                                    <a className="ins-ic">
                                        <i className="fab fa-instagram white-text"> </i>
                                    </a>
                                </div>
                                {/* Grid column */}
                            </div>
                            {/* Grid row*/}
                        </div>
                    </div>
                    {/* Footer Links */}
                    <div className="container text-center text-md-left text-light mt-5">
                        {/* Grid row */}
                        <div className="row mt-3">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* Content */}
                                <h6 className="text-uppercase font-weight-bold text-light">GEBuild</h6>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                                <p>Si tienes alguna idea en mente y no sabes como plasmarlo en esta realidad, de seguro podemos ayudarte</p>
                            </div>
                         
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase font-weight-bold text-light">Contactanos</h6>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                                <p>
                                    <i className="fas fa-home mr-2" />Potosi, Bolivia</p>
                                <p>
                                    <i className="fas fa-envelope mr-2"/>gonis21990@gmail.com</p>
                                <p>
                                    <i class="fas fa-phone-alt"></i> +591 69651053</p>
                                <p>
                                    <i class="fas fa-mobile"></i> +591 69651053 </p>
                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                    {/* Footer Links */}
                    {/* Copyright */}
                    <div className="footer-copyright text-center text-light py-3 copyrigt-footer" style={{ backgroundColor: '#6351ce' }}>© 2020 Copyright:
                         <a className="text-light pb-3" href="https://gebuildv01.web.app/"> Gonzalo E.</a>
                    </div>
                    {/* Copyright */}
                </footer>
                {/* Footer */}
            </Fragment>
        )
    }
}

export default Footer