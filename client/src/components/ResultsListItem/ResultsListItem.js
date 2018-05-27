import React from "react";
// Import Container component.
import Container from "../../components/Container";
// Import Row component.
import Row from "../../components/Row";
// Import Col component.
import Col from "../../components/Col";
// Import css
import './ResultsListItem.css';

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
const ResultsListItem = ({ _id, handleSaveButton, title, snippet, date, url }) => (
    <li>
        <Container>
            <Row style={{marginTop: 40}}>
                <Col size="xs-8 sm-9">
                    <h3>{ title }</h3>
                    <p>{ snippet }</p>
                    <p>Published on { date }</p>
                    <a rel="noreferrer noopener" target="_blank" href={ url }>
                        <button className="btn btn-primary">Continue reading</button>
                    </a>
                    <button id = { _id } className = "btn btn-primary save-btn" onClick = {() => handleSaveButton(_id)} > Save article </button>
                </Col>
            </Row>
        </Container>
    </li>
);

// Export search results list component.
export default ResultsListItem;
