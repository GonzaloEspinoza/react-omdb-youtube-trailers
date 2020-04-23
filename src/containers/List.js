import React from 'react'
import Cards from '../components/cards/Cards'

import SearchMovie from '../components/searchMovie/searchMovies'
import ItemDetail2 from '../components/ItenDetail/itemDetail2'
import './List.css'

class List extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            totalResults: 1,
            cont: 1,
            typeSearch: 'marvel',
            error: false,
            ItemD: '',
            itemClick: false
        }

        this.sendSearch = this.sendSearch.bind(this)
        this.moreSearch = this.moreSearch.bind(this)
        this.movideDeatail = this.movideDeatail.bind(this)
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
        const urlDescription = `https://www.omdbapi.com/?i=${movie.imdbID}&plot=full&apikey=257fadce`

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

    render() {
        console.log(this.state)
        return (
            <div>


                <div className="row">
                    <div className=" parent-form col-lg-12 containner text-center w-100">
                        <SearchMovie sendSearch={this.sendSearch} />
                    </div>
                    <div className="content-card container" id="inicio">

                        <ItemDetail2 movie={this.state.ItemD} />

                    </div>
                    {this.state.data.map((d, i) => {
                        return (
                            <Cards movie={d} key={i}
                                movideDeatail={this.movideDeatail}
                            />
                        )
                    })}
                </div>
                <div className="row">
                    <button type="button" onClick={this.moreSearch} class="btn btn-primary w-100 mt-3 mb-3">Ver más</button>
                </div>
            </div>
        )
    }
}


export default List