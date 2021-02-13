import React from "react";
import { useParams } from "react-router-dom";
import FetchMovie from "./FetchMovie";
function Category(props) {
  const params = useParams();
  const { query, id } = params;

  return (
    <div>
      <FetchMovie category={query} id={id} />
    </div>
  );
}

export default Category;
