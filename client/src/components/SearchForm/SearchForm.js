// Import React
import React from "react";

// Import styling for article search form.
import "./SearchForm.css";

// Import UI components from reactstrap framework.
import { Card, Button, CardHeader, CardBody, Form, FormGroup, Label, Input, } from 'reactstrap';

// Search form component.
const SearchForm = (props) => {
  return (
    <div>
      <Card className="search-form" id="search-form">
        <CardHeader>
            <h2 className="card-header">Search Articles</h2>
        </CardHeader>
        <CardBody>
            <Form>
                <FormGroup>
                    <Label for="topic">Topic</Label>
                    <Input
                        value={props.query}
                        onChange={props.handleTopicChange}
                        type="text" 
                        name="topic" 
                        id="articleTopic" 
                        placeholder="" />
                </FormGroup>

                <FormGroup>
                    <Label for="startYear">Start year</Label>
                    <Input 
                        value={props.begin}
                        onChange={props.handleStartYearChange}
                        type="text" 
                        name="startYear" 
                        id="startYear" 
                        placeholder="" />
                </FormGroup>

                <FormGroup>
                    <Label for="endYear">End year</Label>
                    <Input 
                        value={props.end}
                        onChange={props.handleEndYearChange}
                        type="text" 
                        name="endYear" 
                        id="endYear" 
                        placeholder="" />
                </FormGroup>

                <Button
                    type="submit"
                    onClick={props.handleFormSubmit}
                    className="btn search-btn"
                >
                    Search
                </Button>
            </Form>

        </CardBody>
      </Card>
    </div>
  );
};

// export search form.
export default SearchForm;