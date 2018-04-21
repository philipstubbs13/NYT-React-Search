// Import React
import React from "react";

// Import styling for search results list.
import "./ResultsList.css";

// Import UI commponents from the reactstrap framework.
import { Card, CardHeader, CardBody } from 'reactstrap';

// Search results list component.
const ResultsList = props => (
    <Card className="search-results main-content-section" id="results">
        <CardHeader>
            <h2 class="card-header">Search Results</h2>
        </CardHeader>
        <CardBody>
            {/* <ul className="list-group search-results">
                {props.results.map(result => (
                    <li key={result} className="list-group-item">
                        <p />
                    </li>
                ))}
            </ul> */}
        </CardBody>
    </Card>
);

// Export search results list component.
export default ResultsList;
