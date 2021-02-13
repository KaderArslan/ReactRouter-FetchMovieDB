import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function Categories(props) {
  return (
    <div id="cardColumns">
      <Card as={Link} to={`/Category/${props.category}/0`}>
        <Card.Img src={props.url} />
      </Card>
    </div>
  );
}

export default Categories;
