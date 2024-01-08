import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { idProduct } = useParams();
  const api_poduct = "http://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);
  // --

  useEffect(() => {
    fetch(`${api_poduct}/${idProduct}`)
      .then((res) => res.json())
      .then((prd) => setProduct([...product, prd]));
  }, [idProduct]);

  return (
    <>
      <h1 className="text-center">Product Details</h1>

      {product.map((product, i) => {
        return (
          <div key={i}>
            <div
              className="row "
              style={{
                border: "1px solid gray",
                borderRadius: "10px",
                margin: " 15px",
                padding: "10px",
              }}
            >
              <div className="col-md-6">
                <img
                  height={"500px"}
                  width={"500px"}
                  src={product.image}
                  alt=""
                />
                <div
                  style={{
                    height: "100%",
                    backgroundColor: "#48D1CC",
                    width: "3px",
                    float: "right",
                  }}
                ></div>
              </div>
              <div className="col-md-6 ps-5">
                <h3
                  style={{
                    textAlign: "center",
                    color: "#00008B",
                    margin: "30px 0",
                  }}
                >
                  <u>{product.title}</u>
                </h3>
                <p className="">{product.description} </p>

                <table width={300}>
                  <tr>
                    <td> category ➔ </td>
                    <td> {product.category} </td>
                  </tr>
                  <tr>
                    <td>Price ➔ </td>
                    <td>
                      <span style={{ fontWeight: "bold" }}>
                        {product.price}$
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td> Quantity ➔ </td>
                    <td>{product.rating.count} piece</td>
                  </tr>
                </table>
                <div
                  style={{
                    height: "2px",
                    backgroundColor: "#483D8B",
                    margin: "30px 5px",
                  }}
                ></div>
                <table width={"100%"}>
                  <tr>
                    <th>
                      <h6 style={{ fontWeight: "bolder", color: "#9400D3" }}>
                        TVA (%)
                      </h6>
                    </th>
                    <td style={{ textAlign: "end", color: "#00008B" }}>
                      <h6>20 % </h6>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <h6 style={{ fontWeight: "bolder", color: "#9400D3" }}>
                        Price HT ($)
                      </h6>
                    </th>
                    <td style={{ textAlign: "end", color: "#00008B" }}>
                      <h6>{product.price} $</h6>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <h6 style={{ fontWeight: "bolder", color: "#9400D3" }}>
                        Price with taxe ($)
                      </h6>
                    </th>
                    <td style={{ textAlign: "end", color: "#00008B" }}>
                      <h6>{product.price + product.price * 0.2} $ </h6>
                    </td>
                  </tr>
                </table>

                <div className="text-center mt-5">
                  <button className="btn btn-outline-info w-50">Buy now</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
