// Import React
import React from "react";

// Import styling for search results list.
import "./ResultsList.css";

// Import UI commponents from the reactstrap framework.
import { Card, CardHeader, CardBody } from 'reactstrap';

// Search results list component.
const ResultsList = props => (
    <Card className="search-results" id="results" style={{marginTop: 50}}>
        <CardHeader>
            <h2 className="card-header">Search Results</h2>
        </CardHeader>
        <CardBody>
            <ul className="list-group">{props.children}</ul>
        </CardBody>
    </Card>
);

// Export search results list component.
export default ResultsList;
