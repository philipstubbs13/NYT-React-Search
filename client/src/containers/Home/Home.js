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
import ResultsListItem from '../../components/ResultsListItem'

// Import Footer component.
import Footer from '../../components/Footer'
import api from "../../utils/API"

class Home extends Component {
    state = {
        query: "",
        begin: "",
        end: "",
        articles: [],
        results: [],
        error: "",
    };

    // Method for retrieving articles that were saved to the MongoDB database.
    getSavedArticles = () => {
        api.getSavedArticles()
            .then((res) => {
                this.setState({ articles: res.data });
            });
    }

    // Keep track of what user types into topic input field.
    handleTopicChange = (event) => {
        this.setState({ query: event.target.value });
    }

    // Keep track of what user types into start year input field.
    handleStartYearChange = (event) => {
        this.setState({ begin: event.target.value });
    }

    // Keep track of what user types into end year input field.
    handleEndYearChange = (event) => {
        this.setState({ end: event.target.value });
    }

    // When the user clicks the save article button, save the article to the database.
    handleSaveButton = id => {
        const article = this.state.articles.find(article => article._id === id);
        console.log("article: ", article);
        api.saveArticle(article).then(res => this.getSavedArticles());
    }
    

    // When user clicks search, get articles from new york times using nyt article search api.
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Getting NYT Articles");
        console.log("this.state.query: ", this.state.query);
        console.log("this.state.begin: ", this.state.begin);
        console.log("this.state.end: ", this.state.end);
        api.getArticles(this.state.query, this.state.begin, this.state.end)
            .then((res) => {
                this.setState({ articles: res.data.response.docs });
                console.log("this.state.articles: ", this.state.articles);
            });

    };


    render() {
        return (
            <div>
                <Jumbotron />
                <div className="main-content-section">
                    <Container style={{ marginTop: 30 }}>
                        <Row>
                            <Col size="md-12">
                                <SearchForm 
                                    handleFormSubmit={this.handleFormSubmit}
                                    handleTopicChange={this.handleTopicChange}
                                    handleStartYearChange={this.handleStartYearChange}
                                    handleEndYearChange={this.handleEndYearChange}/>
                            </Col>
                        </Row>

                        <Row>
                            <Col size="md-12">
                                <ResultsList>
                                    {this.state.articles.map(article => {
                                        return (
                                            <ResultsListItem
                                                _id={article._id}
                                                key={article._id}
                                                title={article.headline.main}
                                                date={article.pub_date}
                                                url={article.web_url}
                                                snippet={article.snippet}
                                                handleSaveButton={this.handleSaveButton}
                                            />
                                        );
                                    })}
                                </ResultsList>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}

// Export Home page.
export default Home;

