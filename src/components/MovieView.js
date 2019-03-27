import React from "react"

class MovieView extends React.Component {

    // Load more button calls api to load movie details api information?
    // Or onClick in search results, loads api to return this information for that movie

    constructor() {
        super()
        this.state = {
            currentMovie: []
        }
    }

    componentDidMount() {
        const API_URL = "https://api.themoviedb.org/3/movie/";
        const API_KEY = "c9eb92bd013f0908283e7d5956dfc4a5";
        let API_ID = this.props.location.state.results.id;
        let url = `${API_URL}${API_ID}?api_key=${API_KEY}&language=en-US`;

        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ currentMovie: data })
            })
            .catch(err => console.log(err))
    }

    convertTime(duration) {
        let hours = (duration / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);

        return rhours + "hr(s) " + rminutes + " minute(s)"
    }

    render() {
        const imgUrl = "https://image.tmdb.org/t/p/w500/";
        const imdbUrl = "https://www.imdb.com/title/";
        return (

            <div className="container mt-5">
                <div className="row">

                    <div className="col-12 col-md-6">
                        {this.state.currentMovie.poster_path ? <img src={imgUrl + this.state.currentMovie.poster_path} alt={this.state.currentMovie.title} /> : <img src={imgUrl + this.state.currentMovie.backdrop_path} alt={this.state.currentMovie.title} />}

                    </div>

                    <div className="col-12 col-md-6">
                        <h1>{this.state.currentMovie.title}</h1>

                        <h2 className="tagline">{this.state.currentMovie.tagline}</h2>
                        <p>
                            {this.state.currentMovie.homepage ? <a href={this.state.currentMovie.homepage} rel="noopener noreferr er" target="_blank">Official Homepage </a> : ""}

                            | <a href={imdbUrl + this.state.currentMovie.imdb_id} rel="noopener noreferrer" target="_blank" >IMDB</a></p>

                        <p>{this.state.currentMovie.overview}</p>
                        <p>Budget: ${Number(this.state.currentMovie.budget).toLocaleString()}</p>
                        <p>Revenue: ${Number(this.state.currentMovie.revenue).toLocaleString()}</p>
                        <p>Popularity: {this.state.currentMovie.popularity}%</p>
                        <p>Duration: {this.convertTime(this.state.currentMovie.runtime)}</p>
                        <p>Released: {this.state.currentMovie.release_date}</p>
                    </div>
                </div>


            </div>
        )
    }
}

export default MovieView