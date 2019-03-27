import React from "react"
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class CurrentMovies extends React.Component {

    constructor() {
        super()
        this.state = {
            currentMovies: []
        }
    }

    componentDidMount() {
        const url = "https://api.themoviedb.org/3/movie/popular?api_key=c9eb92bd013f0908283e7d5956dfc4a5&language=en-US&page=1";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    currentMovies: data.results
                })
                console.log(this.state.currentMovies)
            })
    }

    truncateText(string) {
        if (string.length > 150) {
            return string.substring(0, 150) + '...';
        } else {
            return string;
        }
    }

    render() {
        // Image URL
        const url = "https://image.tmdb.org/t/p/w200/";
        return (



            <div className="row mt-5">

                <div className="col-12">
                    <h1>Currently In Theater</h1>
                </div>
                {this.state.currentMovies.map((item, key) =>

                    <Card key={item.id} style={{ width: '15rem', border: 'none', padding: 0, }}>
                        <Link results={item} className="mt-auto btn current-buttons" to={{ pathname: '/Movie', state: { results: item } }}>
                            <Card.Img variant="top" src={url + item.backdrop_path} alt={item.title} className="current-imgs" /></Link>
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>
                                <Link
                                    results={item}
                                    to={{
                                        pathname: '/movie',
                                        state: { results: item }
                                    }}>
                                    <h3>{item.title}</h3>
                                </Link>
                            </Card.Title>
                            <Card.Text>
                                {this.truncateText(item.overview)}
                            </Card.Text>

                        </Card.Body>
                    </Card>

                )}
            </div>
        )
    }
}

export default CurrentMovies