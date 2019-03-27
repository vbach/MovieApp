import React from "react"
import TopMovies from './TopMovies';
import CurrentMovies from './CurrentMovies';

class Main extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-8">
                        <CurrentMovies />
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <TopMovies />
                    </div>

                </div>
            </div>
        )
    }
}

export default Main