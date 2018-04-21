// Import React
import React from "react";
// Import Container component.
import Container from "../../components/Container";
// Import Row component.
import Row from "../../components/Row";
// Import Col component.
import Col from "../../components/Col";
// Import Jumbotron component.
import Jumbotron from '../../components/Jumbotron';
// Import SearchForm component.
import SearchForm from '../../components/SearchForm'
// Import ResultsList component.
import ResultsList from '../../components/ResultsList'
// Import Footer component.
import Footer from '../../components/Footer';

// Home Page
const Home = () => (
    <div>
        <Jumbotron />
        <Container style={{ marginTop: 30 }}>
            <Row>
                <Col size="md-6">
                    <SearchForm />
                </Col>

                <Col size="md-6">
                    <ResultsList />
                </Col>
            </Row>
        </Container>
        <Footer />
    </div>
);

// Export Home page.
export default Home;

