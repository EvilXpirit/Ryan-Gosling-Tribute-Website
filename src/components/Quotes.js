import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function Quotes() {
  const quotes = [
    {
      text: "I've learned it's important not to limit yourself. You can do whatever you really love to do, no matter what it is.",
      author: "The Place Beyond the Pines"
    },
    {
      text: "I'm letting life hit me until it gets tired.",
      author: "La La Land"
    },
    {
      text: "I Drive..",
      author: "Drive"
    },
    {
      text: "I don't know what space exploration will uncover, but I don't think it'll be exploration just for the sake of exploration",
      author: "First Man"
    }
  ];

  return (
    <Container>
        <h1 className="text-center mt-5 mb-5">
        Some Popular Quotes of from Different Movies
      </h1>
      {quotes.map((quote, index) => (
        <Row key={index} className="justify-content-center mt-3">
          <Col xs={10} md={8} lg={6}>
            <Card className="text-center bg-dark text-white">
              <Card.Body>
                <Card.Text>"{quote.text}"</Card.Text>
                <Card.Title>- {quote.author}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Quotes;
