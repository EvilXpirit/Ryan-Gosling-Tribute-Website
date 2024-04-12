import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Carousel from "react-bootstrap/Carousel";
import blade from "../images/blader-runner.jpg";
import drive from "../images/drive2.jpg";
import lalaland from "../images/lalaland.jpeg";
import ken from "../images/ken-ryan.jpg";
import niceguys from "../images/the-nice-guys.jpg";
import onlygod from "../images/only-god-forgives.webp";
import firstman from "../images/first-man.webp";
import place from "../images/the-place-beyond.jpg";

function Career() {
  return (
    <>
      <h1 className="text-center mt-5 mb-5">
        Some Popular Movies of Ryan Gosling
      </h1>
      <Carousel className="mb-5">
        <Carousel.Item className="carousel-item" interval={1000}>
          <Image
            src={blade}
            className="d-block w-100 carousel-image"
            text="First slide"
          />
          <Carousel.Caption>
            <h3>Blade Runner 2049</h3>
            <p>
              Blade Runner 2049 is a 2017 American epic neo-noir science fiction
              film directed by Denis Villeneuve from a screenplay by Hampton
              Fancher and Michael Green, based on a story by Fancher.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Image
            src={drive}
            className="d-block w-100 carousel-image"
            text="Second slide"
          />
          <Carousel.Caption>
            <h3>Drive</h3>
            <p>
              Drive is a 2011 American action drama film directed by Nicolas
              Winding Refn. The film stars Ryan Gosling as an unnamed Hollywood
              stunt driver who moonlights as a getaway driver.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={lalaland}
            className="d-block w-100 carousel-image"
            text="Third slide"
          />
          <Carousel.Caption>
            <h3>La la Land</h3>
            <p>
              La La Land is a 2016 American musical romantic drama written and
              directed by Damien Chazelle. It stars Ryan Gosling and Emma Stone
              as a struggling jazz pianist and an aspiring actress who meet and
              fall in love while pursuing their dreams in Los Angeles.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={ken}
            className="d-block w-100 carousel-image"
            text="Third slide"
          />
          <Carousel.Caption>
            <h3>Barbie</h3>
            <p>
              Barbie is a 2023 fantasy comedy film directed by Greta Gerwig from
              a screenplay she wrote with Noah Baumbach. It stars Margot Robbie
              as the title character and Ryan Gosling as Ken, and follows them
              on a journey of self-discovery through both Barbieland and the
              real world following an existential crisis.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h2 className="mt-4 mb-4">More Movies</h2>

      <CardGroup className="cards gap-3 mb-3">
        <Card className="bg-dark text-white">
          <Card.Img variant="top" src={niceguys} />
          <Card.Body>
            <Card.Title>The Nice Guys</Card.Title>
            <Card.Text>
              The Nice Guys is a 2016 American neo-noir buddy action comedy film
              directed by Shane Black, who co-wrote the screenplay with Anthony
              Bagarozzi.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="bg-dark text-white">
          <Card.Img variant="top" src={onlygod} />
          <Card.Body>
            <Card.Title>Only God Forgives</Card.Title>
            <Card.Text>
              Only God Forgives is a 2013 action film written and directed by
              Nicolas Winding Refn and stars Ryan Gosling, Kristin Scott Thomas
              and Vithaya Pansringarm.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup className="cards gap-3">
        <Card className="bg-dark text-white">
          <Card.Img variant="top" src={firstman} />
          <Card.Body>
            <Card.Title>First Man</Card.Title>
            <Card.Text>
              First Man is a 2018 American biographical drama film directed by
              Damien Chazelle from a screenplay by Josh Singer, based on the
              2005 book of the same name.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="bg-dark text-white">
          <Card.Img variant="top" src={place} />
          <Card.Body>
            <Card.Title>The Place Beyond the Pines</Card.Title>
            <Card.Text>
              The Place Beyond the Pines is a 2012 American epic crime drama
              film directed by Derek Cianfrance with a screenplay by Cianfrance,
              Ben Coccio and Darius Marder from a story by Cianfrance and
              Coccio.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default Career;
