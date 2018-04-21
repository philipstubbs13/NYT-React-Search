// Import React
import React from 'react';

// Import UI components from reactstrap framework.
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

// Import the Container component. 
import Container from "../../components/Container";

// Footer component
const Footer = (props) => {
    return (
        <div>
            <Container>
                <Card style={{ marginTop: 80 }}>
                    <CardBody>
                        <CardTitle>
                            New York Times React Search
                        </CardTitle>
                        <CardText><b>Copyright 2018</b></CardText>
                        <Button>GitHub Repo</Button>
                        <Button style={{ marginLeft: 10 }}>LinkedIn</Button>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

// export Footer component.
export default Footer;
