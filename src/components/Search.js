import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


const Search = (props) => {

    const options = props.results.map(r => (


        <Card key={r.id} style={{ width: '18rem', margin: '0 auto' }}>
            <Link
                results={r}
                to={{
                    pathname: '/Movie',
                    state: { results: r }
                }}>
                <Card.Img
                    variant="top"
                    src={"https://image.tmdb.org/t/p/w200/" + r.poster_path}
                    onClick={() => {
                        document.getElementById("search").classList.add("hide")
                    }} />
            </Link>
        </Card>


    ))
    return <div className="row search" id="search">{options}</div>
}

export default Search