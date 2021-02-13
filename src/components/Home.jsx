import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Categories from "./Categories";

export default function Home(props) {
  return (
    <Container>
      <Row className="justify-content-center">
        <div className="text">
          <h1 className="text-dark mt-3">Popüler Filmler</h1>
        </div>
      </Row>
      <Container>
        <Row className="mt-3 justify-content-center">
          <Col md={4}>
            <Categories
              category="popular"
              url="https://image.tmdb.org/t/p/original/zoadcVjLOpsUOm3N9Ajz4D2uIRV.jpg"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
