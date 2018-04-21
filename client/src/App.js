// Import React since we are using React.
import React, { Component } from 'react';
// Import app css file.
import './App.css';
// Import home page.
import Home from './containers/Home';
// Import saved articles page.
import Saved from './containers/Saved';
// Import React Router to add page routes.
import { BrowserRouter as Router, Route } from 'react-router-dom';

// App components.
class App extends Component {
  render() {
    return (
      // Create routes for Home and Saved components/pages.
      <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
          </div>
      </Router> 
    );
  }
}

// Export the App component.
export default App;
