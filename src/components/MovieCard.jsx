import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function MovieCard(props) {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        {props.result.slice(0, 12).map((item, index) => (
          <Col id="cardColumns" ml={4} key={index} className="mb-5">
            <Card id="card">
              <Card.Img
                variant="center"
                src={[
                  "https://image.tmdb.org/t/p/original",
                  item.poster_path
                ].join("")}
                alt=" "
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MovieCard;
