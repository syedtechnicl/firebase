import React from "react";

const Card = ({ title, year, poster, actor }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={poster} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{actor}</p>
          <a href="#" className="btn btn-primary">
            {year}
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
