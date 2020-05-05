import React from 'react'
import Fragment from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


import Cards from '../components/cards/Cards'
import CardDesktop from '../components/cards/CardsDesktop'

import SearchMovie from '../components/searchMovie/searchMovies'
import Banner from '../components/banner/Banner'
import ItemDetail2 from '../components/ItenDetail/itemDetail2'
import Navbar from '../containers/Navbar/Navbar'
import './List.css'

class List extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            totalResults: 1,
            cont: 1,
            typeSearch: 'woman',
            error: false,
            ItemD: '',
            itemClick: false,
            traillers: null
        }

        this.sendSearch = this.sendSearch.bind(this)
        this.moreSearch = this.moreSearch.bind(this)
        this.movideDeatail = this.movideDeatail.bind(this)
        this.movieTitle = this.movieTitle.bind(this)
        this.redirecionHome = this.redirecionHome.bind(this)

        this.myRef = React.createRef()
    }


    async componentWillMount() {

        const url = `https://www.omdbapi.com/?i=tt3896198&apikey=257fadce&s=${this.state.typeSearch}`

        const respuests = await fetch(url)
        const resJSON = await respuests.json()
        console.log(typeof (resJSON.totalResults))
        this.setState({
            data: resJSON.Search
            // totalResults: parseInt(resJSON.totalResults)

        })

    }


    async sendSearch(term) {
        console.log(term)
        if (term == '') { return }


        const url = `https://www.omdbapi.com/?i=tt3896198&apikey=257fadce&s=${term}`

        const respuests = await fetch(url)
        const resJSON = await respuests.json()

        console.log(resJSON)
        if (resJSON.Error) return this.setState({ error: 'Error en la busqueda' })

        this.setState({
            data: resJSON.Search,
            totalResults: parseInt(resJSON.totalResults),
            typeSearch: term
        })
    }


    async  moreSearch() {

        console.log('llego -----')



        if (this.state.cont <= this.state.totalResults) {


            const url = `https://www.omdbapi.com/?i=tt3896198&page=${this.state.cont + 1}&apikey=257fadce&s=${this.state.typeSearch}`

            console.log(url)
            console.log(this.state.cont)
            console.log(this.state.totalResults)
            const respuests = await fetch(url)
            const resJSON = await respuests.json()

            console.log(resJSON)

            if (resJSON.Error) return this.setState({ error: 'Error en la busqueda' })

            const aux = this.state.data
            const aux2 = this.state.cont
            this.setState({
                data: aux.concat(resJSON.Search),
                cont: aux2 + 1
            })
        } else {
            this.setState({
                data: this.state.data.concat(resJSON.Search),
                cont: cont + 1
            })
        }
        console.log(this.state)
    }


    //    console.log(this.state)

    movideDeatail(movie) {
        console.log(movie)
        // this.setState({
        //     ItemD:movie,
        //     itemClick:true
        // })
        const urlDescription = `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=257fadce`

        fetch(urlDescription)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                this.setState({
                    ItemD: data
                })
                // this.props.movie=''
            })

    }


    movieTitle(movie) {
        console.log(movie)

        const urlYoutube = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=AIzaSyD-l4qJJHSg8jhv6zGUXQDRBhgRxYeFYow&q=trailer%20${movie.Title}`
        fetch(urlYoutube)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                this.setState({
                    traillers: data
                })
                // console.log(this.state)
            })
            .catch(err => {
                console.log(err)
            })


    }

    redirecionHome(){
        if(this.state.ItemD!=''){

            this.setState({
                ItemD:''
            })
        }
    }



    render() {
        // console.log(this.state)
        
        if (this.state.ItemD) {
            return (
                <div ref={this.myRef} >
                    <Navbar sendSearch={this.sendSearch} redirecionHome={this.redirecionHome} />



                    <div className="row">
                        <div className=" list-content-itendetail col-lg-9 col-md-8 col-sm-12 w-100" id="inicio">
                            <ItemDetail2 movie={this.state.ItemD} trailers={this.state.traillers} />
                        </div>

                        <div className="content-cards container col-lg-3 col-md-4 col-sm-12 col-12">
                        {this.state.data.map((d, i) => {
                                return (
                                    <CardDesktop movie={d} key={i}
                                        movideDeatail={this.movideDeatail}
                                        movieTitle={this.movieTitle}

                                        myRef={this.myRef}
                                    />
                                )
                            })}
                        </div>
                    </div>
                   
{/*                   

                    <div className="row ">
                        <div className=" parent-form col-lg-4  w-100">
             

                    </div>
                    </div> */}

                    <div className="row btn-vermas-conten">
                        <button type="button" onClick={this.moreSearch} class=" btn-vermas btn btn-primary w-100 mt-3 mb-3">Ver más</button>
                    </div>

                </div>

            )
        }


        return (
            <Router>
                <div>
                    <Navbar sendSearch={this.sendSearch} />

                    <Banner/>
                    {/* <Route exact path={`/view/trailer/:movie`} component={  ItemDetail2 } /> */}


                    <div className="row pt-5">
                        <div className=" parent-form  col-lg-12 containner text-center w-100">
                            {/* <SearchMovie sendSearch={this.sendSearch} /> */}

                        <div>

                        <h6 className="text-light pl-3 h5 float-sm-left"> Nuestros trailers </h6>
                        </div>
                        </div>
                        {/* <div className="content-card container list-content-itendetail " id="inicio">
                            <ItemDetail2 movie={this.state.ItemD} trailers={this.state.traillers} />
                        </div> */}

                        {this.state.data.map((d, i) => {
                            return (
                                <Cards movie={d} key={i}
                                    movideDeatail={this.movideDeatail}
                                    movieTitle={this.movieTitle}
                                    lg={2}
                                    myRef={this.myRef}
                                />
                            )
                        })}
                    </div>
                    <div className="row btn-vermas-conten">
                        <button type="button" onClick={this.moreSearch} class=" btn-vermas btn btn-primary w-100 mt-3 mb-3">Ver más</button>
                    </div>


                </div>
            </Router>
        )
    }
}


export default List