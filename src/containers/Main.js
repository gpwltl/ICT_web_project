import React from 'react';
import Footer from '../components/Footer'
import Bar from '../components/Bar'
import Start from '../components/Start'
import CssBaseline from '@material-ui/core/CssBaseline';
import Game from '../components/Game'
import Login from './Login'
import { Switch, Router } from 'react-router-dom'

const Main = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            {/* Header */}
            <Bar />
            <Switch>
                <Router path="/login" component={Login} />
            </Switch>
            {/* Contents */}
            <Start />
            <Game />
            {/* Footer */}
            <Footer />
        </React.Fragment>
    );
}

export default Main;
