import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Review } from 'pages';
import Header from '../components/Header'

class App extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/review" component={Review} />

                {/* about안에 또 다른 router쓰고 싶을때 */}
                {/* <Switch>
                    <Route path="/about/:name" component={About} />
                    <Route path="/about" component={About} />
                </Switch> */}
            </div>
        );
    }
}

export default App;