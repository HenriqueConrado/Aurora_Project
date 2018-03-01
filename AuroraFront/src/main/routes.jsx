<<<<<<< HEAD
import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Jogo from './../jogo/jogo'
import Dado from './../dado/dado'

export default props => (
    <Router history={hashHistory}>
        <Route path='/jogo' component={Jogo} />
        <Route path='/dado' component={Dado} />
        <Redirect from='*' to='/jogo' />
    </Router>
=======
import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Jogo from './../jogo/jogo'
import Dado from './../dado/dado'

export default props => (
    <Router history={hashHistory}>
        <Route path='/jogo' component={Jogo} />
        <Route path='/dado' component={Dado} />
        <Redirect from='*' to='/jogo' />
    </Router>
>>>>>>> 62ed0eb85a0536e4867d50fc8b7e04cd4ebf041a
)