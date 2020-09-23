import React from 'react';
import Footer from '../components/Footer'
import Bar from '../components/Bar'
import Start from '../components/Start'
import CssBaseline from '@material-ui/core/CssBaseline';
import Game from '../components/Game'

const Main = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            {/* Header */}
            <Bar />
            {/* Contents */}
            <Start />
            <Game />
            {/* Footer */}
            <Footer />
        </React.Fragment>
    );
}

export default Main;
