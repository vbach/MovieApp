import React from "react"
import { Nav, Navbar, Form, FormControl } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Search from "./Search"

const API_URL = "https://api.themoviedb.org/3/search/movie";
const API_KEY = "c9eb92bd013f0908283e7d5956dfc4a5"

class Header extends React.Component {

    state = {
        query: '',
        results: []
    }



    getInfo = () => {
        fetch(`${API_URL}?api_key=${API_KEY}&language=en-US&query=${this.state.query}&page=1&include_adult=false`)
            .then(response => response.json())
            .then(data => this.setState({ results: data.results }));

    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 2) {
                if (this.state.query.length % 3 === 0) {

                    this.getInfo()
                }
            }
        })
    }
    render() {
        return (
            <div>
                <Navbar className="nav" expand="lg">
                    <Navbar.Brand className="brand" href="/">Movie App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Form inline>
                            <span className="search-span">
                                <FontAwesomeIcon icon="search" />
                            </span>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2 search-input" ref={input => this.search = input} onChange={this.handleInputChange} />
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Search results={this.state.results} />
                {/* Button for submitting search. Use Link in Button to pass query and api. */}

            </div>
        )
    }
}

export default Header