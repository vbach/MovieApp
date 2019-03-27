import React from "react"
import { Link } from 'react-router-dom'
import { Media } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class TopMovies extends React.Component {

    constructor() {
        super()
        this.state = {
            topMovies: []
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/trending/all/day?api_key=c9eb92bd013f0908283e7d5956dfc4a5")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    topMovies: data.results
                })
                console.log(this.state.topMovies)
            })
    }

    truncateText(string) {
        if (string.length > 100) {
            return string.substring(0, 100) + '...';
        } else {
            return string;
        }
    }

    render() {

        const url = "https://image.tmdb.org/t/p/w200/";

        if (this.state.topMovies.results !== '') {
            return (

                <div className="top-movies mt-5">
                    <h1>Top Movies</h1>

                    {this.state.topMovies.map((item, key) =>


                        <Media key={item.id} className="mb-2">
                            <img src={url + item.poster_path} alt="Movie" key={item.id} className="mr-3 top-imgs" />

                            <Media.Body>
                                <h3>
                                    <Link
                                        key={item.id}
                                        results={item}
                                        to={{
                                            pathname: '/Movie',
                                            state: { results: item }
                                        }}>
                                        {item.title ? item.title : item.original_name}
                                        <span className="arrow-right">
                                            <FontAwesomeIcon icon="arrow-right"></FontAwesomeIcon>
                                        </span>
                                    </Link></h3>
                                <p>{this.truncateText(item.overview)}</p>


                            </Media.Body>
                        </Media>


                    )}

                </div>
            )
        }
    }
}

export default TopMovies