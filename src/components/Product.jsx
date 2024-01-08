import { Link } from "react-router-dom";
import "./styleCard.css";
import { useState } from "react";

export default function Product(props) {
  const { product } = props;

  return (
    <>
      <div
        id="card"
        className="card "
        style={{
          width: "350px",
          margin: "10px",
          backgroundColor: "white",
          transition: "transform 0.5s ease",
        }}
      >
        <div className="card-img-top text-center">
          <img
            src={product.image}
            width={"200px"}
            height={"250px"}
            alt={product.title}
          />
        </div>

        <div className="card-body" style={{ height: "190px" }}>
          <h5 className="card-title" style={{ height: "100px", color: "gray" }}>
            {product.title}
          </h5>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h6>
              <span className="text-warning">★</span>
              {product.rating.rate}
            </h6>

            <Link
              to={`/detail/${product.id}`}
              className="btn btn-outline-primary"
            >
              More …
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
