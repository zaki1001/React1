import React, { Fragment, Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';


class Movierow extends Component {
    constructor() {
        super()
    }

    render() {
        const style3 = {
            overflowY: 'hidden',
            maxHeight: '70px'
        }

        const style2 = {
            maxHeight: '250px'
        }
        return (
            <div className="col s6">
                <div class="card horizontal s6" key={this.props.movie.id}>
                    <div className="card-image">
                        <img src={this.props.movie.poster_src} className='responsive-img' style={{ minHeight: '250px' }}></img>
                        <span className="card-title" > {this.props.movie.original_title}</span>
                    </div>
                    <div class="card-stacked ">
                        <div class="card-content">
                            <span className="card-title" > {this.props.movie.original_title}</span>
                            <span className="card-title">{this.props.movie.vote_average}</span>
                            <h6 style={style3} className="card-content s2">{this.props.movie.overview}</h6>
                        </div>
                        <div class="card-action">
                            <a href={this.props.movielink}>open </a>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Movierow