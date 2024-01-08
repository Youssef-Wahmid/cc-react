import img3 from "../images/3.jpeg";
import img4 from "../images/4.jpeg";
import img5 from "../images/5.jpeg";
import img11 from "../images/11.jpeg";
import img22 from "../images/22.jpeg";

export default function Slider() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide container-fluid mt-1"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 3"
          ></button>
        </div>
        <div
          className="carousel-inner "
          style={{ width: "90%", margin: "auto" }}
        >
          <div className="carousel-item active">
            <img
              src={img4}
              className="d-block w-100"
              alt=""
              style={{ height: "550px" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src={img22}
              alt=""
              className="d-block w-100"
              style={{ height: "550px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img11}
              alt=""
              className="d-block w-100"
              style={{ height: "550px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img5}
              alt=""
              className="d-block w-100"
              style={{ height: "550px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              alt=""
              className="d-block w-100"
              style={{ height: "550px" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
