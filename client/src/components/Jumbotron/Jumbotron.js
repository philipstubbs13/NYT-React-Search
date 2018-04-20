import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

const NYTJumbotron = (props) => {
    return (
        <div>
            <Jumbotron className="text-center">
                <h1 className="display-3">New York Times React Search</h1>
                <p className="lead">Search, read, and annotate New York Times articles for free!</p>
                <hr className="my-2" />
            </Jumbotron>
        </div>
    );
};

export default NYTJumbotron;
