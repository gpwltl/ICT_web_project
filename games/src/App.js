import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import HOME from './containers/Home'
import About from './containers/About'
import Review from './containers/Review'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}

        <Route component={HOME} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Review} path="/review" />
      </>


      // <BrowserRouter>
      //   <Header />
      //   {this.props.children}

      //   <div style={{ padding: 20, border: '5px solid gray' }}>
      //     <Link to="/">HOME</Link><br />
      //     <Link to="/about">ABOUT</Link><br />
      //     <Link to="/review">REVIEW</Link><br />
      //     <Switch>
      //       <Route exact path="/" component={Home} />
      //       <Route path="/about" component={About} />
      //       <Route path="/review" component={Review} />
      //     </Switch>
      //   </div>
      // </BrowserRouter>
    )
  }
}
// function Home({ match }) {
//   return <h2>홈</h2>
// }
export default App;