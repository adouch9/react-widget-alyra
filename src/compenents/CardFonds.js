import React from "react";
import Card from "./Cards";

const CardFonds = ({
  fonts,
  text,
  fontSize,
  selection,
}) => {
  const titleSort = () => {
    switch (selection) {
      case "date":
        return "Les plus récentes";
      case "popularity":
        return "Les plus populaires";
      case "trending":
        return "Top 10 trending";
      default:
        throw new Error("error: unknown selection");
    }
  };
  return (
    <div className="col-lg-9">
      <div className="row mb-5">
        <h2 className="mb3">
          <span className="badge bg-danger" value={selection}>
            {titleSort()}
          </span>
        </h2>
        {/* {loading && <p>Loading in progress...</p>}
        {error && <p>{error}</p>} */}

        <Card
          fonts={fonts}
          text={text}
          fontSize={fontSize}
          
        />
      </div>
    </div>
  );
};

export default CardFonds;