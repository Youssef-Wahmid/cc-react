import { Link, Outlet } from "react-router-dom";
import "./styleFooter.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light  ">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            <svg
              width="135"
              height="35"
              viewBox="0 0 135 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="37" height="35" rx="10" fill="#46E756" />
              <path
                d="M12.929 25V10.4545H23.071V13.3097H16.4446V16.2926H22.5526V19.1548H16.4446V22.1449H23.071V25H12.929Z"
                fill="white"
              />
              <path
                d="M48.2461 16.192V18.424L40.9261 19.552L41.0461 16.192H48.2461ZM55.4296 9.04L57.3496 17.728H57.5656L61.0216 9.112L62.9656 9.64L58.8376 19.36L57.9256 25.096L55.5256 25.336L54.7816 19.984L50.0296 9.688L55.4296 9.04ZM73.7159 20.584C73.7159 22.328 73.3319 23.6 72.5639 24.4C71.8119 25.184 70.4119 25.576 68.3639 25.576C66.3159 25.576 64.7159 25.112 63.5639 24.184C63.3239 23.032 63.2039 21.88 63.2039 20.728C63.2039 19.576 63.3639 18.496 63.6839 17.488C64.0199 16.464 64.4359 15.592 64.9319 14.872C65.9719 13.4 66.8999 12.464 67.7159 12.064C69.2519 12.848 70.6039 13.912 71.7719 15.256C73.0679 16.728 73.7159 18.504 73.7159 20.584ZM70.9319 19.936C70.9319 18.416 70.6119 17.024 69.9719 15.76C68.6439 16.464 67.5479 17.536 66.6839 18.976C65.8199 20.416 65.3879 21.872 65.3879 23.344C65.8999 23.44 66.6359 23.488 67.5959 23.488C68.5559 23.488 69.5399 23.32 70.5479 22.984C70.8039 22.008 70.9319 20.992 70.9319 19.936ZM83.39 22.192C83.982 21.424 84.39 20.592 84.614 19.696C84.838 18.8 84.95 18.024 84.95 17.368C84.95 16.696 84.854 15.4 84.662 13.48L89.798 12.688L88.262 25.144L85.886 25.36L85.406 20.8H85.238C84.054 23.968 82.166 25.552 79.574 25.552C79.19 25.552 78.87 25.488 78.614 25.36C77.798 24.368 77.238 22.688 76.934 20.32C76.63 17.936 76.478 15.56 76.478 13.192L81.278 12.832C80.99 15.632 80.846 17.728 80.846 19.12C80.846 20.512 80.966 22.008 81.206 23.608C82.086 23.416 82.814 22.944 83.39 22.192ZM92.9283 17.104C92.9283 15.056 94.0083 13.184 96.1683 11.488L100.104 14.128C98.3283 15.264 97.4403 16.456 97.4403 17.704C97.4403 18.36 97.8003 19.216 98.5203 20.272C99.2563 21.328 99.6243 22.152 99.6243 22.744C99.6243 24.84 98.1843 26.456 95.3043 27.592L94.2483 26.176C95.5123 25.488 96.1443 24.728 96.1443 23.896C96.1443 23.112 95.6083 22.12 94.5363 20.92C94.1363 20.472 93.7683 19.904 93.4323 19.216C93.0963 18.528 92.9283 17.824 92.9283 17.104ZM102.983 17.104C102.983 15.056 104.063 13.184 106.223 11.488L110.159 14.128C108.383 15.264 107.495 16.456 107.495 17.704C107.495 18.36 107.855 19.216 108.575 20.272C109.311 21.328 109.679 22.152 109.679 22.744C109.679 24.84 108.239 26.456 105.359 27.592L104.303 26.176C105.567 25.488 106.199 24.728 106.199 23.896C106.199 23.112 105.663 22.12 104.591 20.92C104.191 20.472 103.823 19.904 103.487 19.216C103.151 18.528 102.983 17.824 102.983 17.104ZM117.286 12.064C121.158 13.616 123.094 15.544 123.094 17.848C123.094 19.048 122.75 19.92 122.062 20.464C121.39 20.992 120.134 21.256 118.294 21.256C117.126 21.256 116.166 21.168 115.414 20.992C115.11 21.744 114.958 22.528 114.958 23.344C115.678 23.44 116.494 23.488 117.406 23.488C119.07 23.488 120.638 23.224 122.11 22.696L122.83 25.024C121.662 25.392 120.35 25.576 118.894 25.576C116.302 25.576 114.398 25.104 113.182 24.16C112.926 23.024 112.798 21.952 112.798 20.944C112.798 18.928 113.238 17.112 114.118 15.496C115.014 13.88 116.07 12.736 117.286 12.064ZM115.894 19.864C116.102 19.88 116.622 19.888 117.454 19.888C118.302 19.888 119.27 19.776 120.358 19.552C120.406 19.248 120.43 18.944 120.43 18.64C120.43 17.68 120.166 16.76 119.638 15.88C118.054 16.936 116.806 18.264 115.894 19.864ZM132.314 7L133.202 11.104C131.73 11.616 130.69 12.488 130.082 13.72L134.042 13.504L133.97 15.112L131.594 15.472L130.418 25.144L128.042 25.36L127.082 16.144L125.042 16.456L124.898 13.984L127.058 13.888C127.186 11.744 127.754 10.104 128.762 8.968C129.77 7.816 130.954 7.16 132.314 7Z"
                fill="black"
              />
            </svg>
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="link-nav"
                  to={"/"}
                  aria-current="page"
                >
                  Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="link-nav" to={"/search"}>
                  Search Product
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/about"} className="nav-link" id="link-nav">
                  Abaout
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contact"} className="nav-link" id="link-nav">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />

      <footer style={{ margin: "30px 0 0 0" }}>
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>My informations</p>
            <ul className="contact">
              <li>
                <i className="fa fa-map-marker"></i> Address, Layoune, Morocco
              </li>
              <li>
                <i className="fa fa-phone"></i> +212 696141176
              </li>
              <li>
                <i className="fa fa-envelope"></i> youssefwaahmid@gmail.com
              </li>
            </ul>
            <div className="socials">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section contact-form">
            <h2>Contact Us</h2>
            <form action="#" method="post">
              <input
                type="email"
                name="email"
                className="text-input contact-input"
                placeholder="Your email address"
              />
              <textarea
                rows="4"
                name="message"
                className="text-input contact-input"
                placeholder="Your message"
              ></textarea>
              <button type="submit" className="btn btn-big contact-btn">
                <i className="fa fa-envelope"></i>
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          & copy; 2023 E-commerce Youssef-WD | Designed by Youssef
        </div>
      </footer>
    </>
  );
}
export default Navbar;
