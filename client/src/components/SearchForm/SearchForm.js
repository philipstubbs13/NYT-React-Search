// Import React
import React from "react";

// Import styling for article search form.
import "./SearchForm.css";

// Import UI components from reactstrap framework.
import { Card, Button, CardHeader, CardBody,
    CardTitle, CardText, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// Search form component.
const SearchForm = (props) => {
  return (
    <div>
      <Card className="search-form main-content-section" id="search-form">
        <CardHeader>
            <h2 class="card-header">Search Articles</h2>
        </CardHeader>
        <CardBody>
            <Form>
                <FormGroup>
                    <Label for="topic">Topic</Label>
                    <Input type="text" name="topic" id="articleTopic" placeholder="" />
                </FormGroup>

                <FormGroup>
                    <Label for="startYear">Start year</Label>
                    <Input type="text" name="startYear" id="startYear" placeholder="" />
                </FormGroup>

                <FormGroup>
                    <Label for="endYear">End year</Label>
                    <Input type="text" name="endYear" id="endYear" placeholder="" />
                </FormGroup>

                <Button>Search</Button>
            </Form>

        </CardBody>
      </Card>
    </div>
  );
};

// export search form.
export default SearchForm;