import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import gosling1 from "../images/drive.jpg";
import gosling2 from "../images/gosling.webp";
import gosling3 from "../images/gosling-oscar.jpg";

function About() {
  return (
    <>
    <section className="about">
    <h1 className="text-center mt-5 mb-5">
        About
      </h1>
    <Row className="gap-3 mt-3">
        <Col className="mb-5">
          <h2>Early Life</h2>
          <p>
            Born Ryan Thomas Gosling on November 12, 1980, in London, Ontario,
            Canada, he is the son of Donna (Wilson), a secretary, and Thomas Ray
            Gosling, a traveling salesman. Ryan was the second of their two
            children, with an older sister, Mandi. His ancestry is
            French-Canadian, as well as English, Scottish, and Irish. The
            Gosling family moved to Cornwall, Ontario, where Ryan grew up and
            was home-schooled by his mother. He also attended Gladstone Public
            School and Cornwall Collegiate & Vocational School, where he
            excelled in Drama and Fine Arts. The family then relocated to
            Burlington, Ontario, where Ryan attended Lester B. Pearson High
            School.
          </p>
        </Col>
        <Col>
          <Image className="image" src={gosling1} alt="Ryan Gosling" fluid />
        </Col>
      </Row>
      <Row>
        <Col className="mb-5">
          <Image className="image" src={gosling2} alt="Ryan Gosling" fluid />
        </Col>
        <Col className="mt-5">
          <h2>Acting Career</h2>
          <p>
            Ryan first performed as a singer at talent contests with Mandi. He
            attended an open audition in Montreal for the TV series "The Mickey
            Mouse Club" (The All New Mickey Mouse Club (1989)) in January 1993
            and beat out 17,000 other aspiring actors for a a spot on the show.
            While appearing on "MMC" for two years, he lived with co-star Justin
            Timberlake's family.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="mb-5">
          <h2>Awards and Recognition</h2>
          <p>
            Though he received no formal acting training, after "MMC," Gosling
            segued into an acting career, appearing on the TV series Young
            Hercules (1998) and Breaker High (1997), as well as the films The
            Slaughter Rule (2002), Murder by Numbers (2002), and Remember the
            Titans (2000). He first attracted serious critical attention with
            his performance as the Jewish neo-Nazi in the controversial film The
            Believer (2001), which won the Grand Jury Prize at the 2001 Sundance
            Film Festival. He was cast in the part by writer-director Henry
            Bean, who believed that Gosling's strict upbringing gave him the
            insight to understand the character Danny, whose obsessiveness with
            the Judaism he was born into turns to hatred. He was nominated for
            an Independent Spirit Award as Best Male Lead in 2002 for the role
            and won the Golden Aries award from the Russian Guild of Film
            Critics.
          </p>
        </Col>
        <Col className="mt-5">
          <Image className="image" src={gosling3} alt="Ryan Gosling" fluid />
        </Col>
      </Row>
    </section>
    </>
  );
}

export default About;
