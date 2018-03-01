import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/bootstrap/dist/js/bootstrap.min.js'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){    
        return (
            this.props.children
        );
    }
}

export default App