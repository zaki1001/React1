import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import dark from './dark.jpg';
import avengers from './avengers.jpg';
import avengerse from './avengerse.jpg';
import avengersi from './avengersi.jpg';
import Movierow from './Movierow.js';
import axios from 'axios';
import $ from 'jquery';
import './index.css';
import './css/tailwind.css';


class App extends Component {
  constructor(props) {
    super(props)
    console.log("sssss")
    this.state = { row: [] }

    this.searchChangeHandler = this.searchChangeHandler.bind(this)
    // const movies = [{
    //   id: 0, image: avengers, title: "Avengers", Description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
    // }, {
    //   id: 1, image: avengerse, title: "Avengers Endgame", Description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
    // }, {
    //   id: 2, image: avengersi, title: "Avengers Infinity War", Description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."
    // }, {
    //   id: 3, image: avengersi, title: "Avengers Infinity War", Description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."
    // }]

    // var movierows = []
    // movies.forEach((movie) => {
    //   const movierow = <Movierow movie={movie} />


    //   movierows.push(movierow)

    // })


    // this.state = { row: movierows }










  }
  performSearch(searchTerm) {
    console.log("its working yo")
    // const urls = "http://www.omdbapi.com/?i=tt3896198&apikey=b5a67d6c&s=" + searchTerm
    const urls = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
    $.ajax({
      url: urls,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        //console.log(searchResults)
        // const result = searchResults.Search
        const result = searchResults.results


        var movierows = []

        result.forEach((movie) => {
          // const movielink = 'https://www.imdb.com/title/' + movie.imdbID
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path


          const movierow = <Movierow movie={movie} key={movie.id} />

          movierows.push(movierow)



        })
        this.setState({ row: movierows })

      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  // componentDidMount() {
  //   console.log("Perform search using moviedb")
  //   axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=b5a67d6c&s=avengers').then(res => {
  //     console.log(res.data.Search);



  //   })
  // }
  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }


  render() {
    const styles1 = {
      background: '#212121',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '2000px'
    }

    const pushdown = {
      padding: '7px',
      marginLeft: '5px',
      marginRight: '5px',

    }

    return (
      <div className='app'>
        <Fragment>
          <header className='header'>
            <nav class="nav-wrapper grey darken-2 ">
              <div class="container">
                <a href="" class="brand-logo">Logo</a>
                <a href="" class="sidenav-trigger" data-target="mobile-menu">
                  <i class="material-icons">menu</i>
                </a>
                <ul class="right hide-on-med-and-down">
                  <li><a href="">About</a></li>
                  <li><a href="">Skills</a></li>
                  <li><a href="">Contact</a></li>
                  <li><a href="">Movie cards</a></li>
                </ul>
                <ul class="sidenav grey lighten-2" id="mobile-menu">
                  <li><a href="">About</a></li>
                  <li><a href="">Skills</a></li>
                  <li><a href="">Contact</a></li>
                  <li><a href="">Movie cards</a></li>
                </ul>
              </div>
            </nav>

            <div className="container"><div className='col '> <div className="card s12 " style={pushdown}><input type="text" className="white grey-text autocomplete" placeholder="Search Movies" onChange={this.searchChangeHandler} ></input></div></div><div className="row">{this.state.row}</div></div>

          </header>
        </Fragment>
      </div>
    )
  }
}

export default App;