// Import React
import React from "react";
// Import Container component.
import Container from "../../components/Container";
// Import Row component.
import Row from "../../components/Row";
// Import Col component
import Col from "../../components/Col";
// Import Jumbotron component
import Jumbotron from '../../components/Jumbotron';
// Import SavedArticles component
import SavedArticles from '../../components/SavedArticles';
// Import Footer component.
import Footer from '../../components/Footer';

// Saved articles page.
const Saved = () => (
    <div>
        <Jumbotron />
        <Container style={{ marginTop: 30 }}>
            <Row>
                <Col size="md-12">
                    <SavedArticles />
                </Col>
            </Row>
        </Container>
        <Footer />
    </div>
);

// Export saved articles page.
export default Saved;