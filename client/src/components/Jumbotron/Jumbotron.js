// Import React
import React from 'react';

// Import the Jumbotron UI component from the reactstrap framework.
import { Jumbotron } from 'reactstrap';

// Import Jumbotron style sheet.
import './Jumbotron.css';

// Jumbotron component
const NYTJumbotron = (props) => {
    return (
        <div className="header">
            <Jumbotron className="text-center jumbotron">
                <h1 className="display-3">New York Times React Search</h1>
                <p className="lead">Search, read, and annotate New York Times articles for free!</p>
            </Jumbotron>
        </div>
    );
};

// Export Jumbotron component.
export default NYTJumbotron;

