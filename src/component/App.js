import React, {Component} from 'react';

class App extends Component {

    constructor(args) {
        super(args);

        this.state = {
            notes: []
        };
    }

    render() {
        return (
            <div>
                <h1>My note manage</h1>
            </div>
        );
    }
}

export default App;