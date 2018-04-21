// Import React.
import React from "react";

// Import styling for saved articles component.
import "./SavedArticles.css";

// Import UI components from reactstrap framework.
import { Card, CardHeader, CardBody } from 'reactstrap';

// Saved articles component.
const SavedArticles = props => (
    <Card className="saved-articles main-content-section" id="articles">
        <CardHeader>
            <h2 class="card-header">Saved articles</h2>
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

// Export saved articles component.
export default SavedArticles;
