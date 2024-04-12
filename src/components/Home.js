import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <section className="home">
      <Container className="mt-5">
        <Row className="d-flex justify-content-center">
          <Col className="mt-5 fs-5">
            He is rude, doesn’t say much, wears a leather jacket and has a cold
            look. That is the image of the sigma male, a kind of lone wolf
            archetype that has become popular online in recent years and that
            has an indisputable icon: Ryan Gosling. Who once was a teen idol, as
            unlikely as it may seem, is now the king of sad straight men.
          </Col>
          <Col>
            <iframe
            className="youtube-video"
              width="700"
              height="426"
              src="https://www.youtube.com/embed/Hq6I-xPwtU0"
              title='"literally me"'
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
