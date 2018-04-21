// Import React
import React, { Component } from "react";
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
import API from "../../utils/API";

class Home extends Component {
    state = {
        query: "",
        begin: "",
        end: "",
        articles: [],
        results: [],
        error: ""
    };

    // Keep track of what user types into topic input field so that input can be grabbed later
    handleTopicChange = (event) => {
        this.setState({ query: event.target.value });
    }

    // Keep track of what user types into start year input field so that input can be grabbed later
    handleStartYearChange = (event) => {
        this.setState({ begin: event.target.value });
    }

    // Keep track of what user types into end year input field so that input can be grabbed later
    handleEndYearChange = (event) => {
        this.setState({ end: event.target.value });
    }


    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Getting NYT Articles");
        console.log("this.state.query: ", this.state.query);
        console.log("this.state.begin: ", this.state.begin);
        console.log("this.state.end: ", this.state.end);
        API.getArticles(this.state.query, this.state.begin, this.state.end)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ articles: res.data.response.docs, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    };

    render() {
        return (
            <div>
                <Jumbotron />
                <Container style={{ marginTop: 30 }}>
                    <Row>
                        <Col size="md-6">
                            <SearchForm 
                                handleFormSubmit={this.handleFormSubmit}
                                handleTopicChange={this.handleTopicChange}
                                handleStartYearChange={this.handleStartYearChange}
                                handleEndYearChange={this.handleEndYearChange}/>
                        </Col>

                        <Col size="md-6">
                            <ResultsList />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

// Export Home page.
export default Home;

