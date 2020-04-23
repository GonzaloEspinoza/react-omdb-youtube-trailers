import React from 'react'
import './searchMovies.css'

class SearchMovie extends React.Component {

    constructor(props) {
        super(props)
        this.state = { dataSearch: '' };
    }


    inputSearch(event) {
        this.setState({
            dataSearch: event.target.value
        })

    }

    onSubmitForm(e) {
        e.preventDefault()
        console.log('search:' + this.state.dataSearch)

        this.props.sendSearch(this.state.dataSearch)
    }


    render() {
        return (
            <div className="form-c2">
                <form onSubmit={this.onSubmitForm.bind(this)} className="form-search" >
                    <input className="input-search fa fa-search " type="text" aria-hidden="true" placeholder="Buscar"
                        name="dataSearch"
                        value={this.state.dataSearch}
                        onChange={this.inputSearch.bind(this)}
                    />
                </form>
            </div>
        )
    }
}


export default SearchMovie