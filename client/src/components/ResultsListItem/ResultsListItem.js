import React from "react";
// Import Container component.
import Container from "../../components/Container";
// Import Row component.
import Row from "../../components/Row";
// Import Col component.
import Col from "../../components/Col";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
const ResultsListItem = props => (
    <li>
        <Container>
            <Row style={{marginTop: 40}}>
                <Col size="xs-8 sm-9">
                    <h3>{props.title}</h3>
                    <p>{props.snippet}</p>
                    <p>Published on {props.date}</p>
                    <a rel="noreferrer noopener" target="_blank" href={props.url}>
                        <button className="btn btn-primary">Continue reading</button>
                    </a>
                </Col>
            </Row>
        </Container>
    </li>
);

// Export search results list component.
export default ResultsListItem;
