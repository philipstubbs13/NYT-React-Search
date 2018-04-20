import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Jumbotron from '../../components/Jumbotron';

const Home = () => (
    <div>
        <Jumbotron />
        <Container style={{ marginTop: 30 }}>
            <Row>
                <Col size="md-12">
                </Col>
            </Row>
            <Row>
                <Col size="md-12">

                </Col>
            </Row>
        </Container>
    </div>
);

export default Home;

