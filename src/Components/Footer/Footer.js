import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <div  className="logo d-flex align-items-center">
                  <span>Suitcase Pro</span>
                </div>
                <p>
                  We are a team of passionate travelers and technology
                  enthusiasts who understand the importance of hassle-free
                  travel. Our mission is to make travel planning easy,
                  convenient, and affordable for everyone.
                </p>
                <div className="social-links d-flex  mt-3">
                  <a href="#" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-dash"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i> <a href="#">About us</a>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i> <a href="#">Services</a>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              {/* <div className="col-lg-2 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-dash"></i> <a href="#">Web Design</a>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>{" "}
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>{" "}
                    <a href="#">Product Management</a>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i> <a href="#">Marketing</a>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>{" "}
                    <a href="#">Graphic Design</a>
                  </li>
                </ul>
              </div> */}

              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022
                  <br />
                  Kollam <br />
                  <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> suitcasepro@admin.com
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-legal">
          <div className="container">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Suitcase Pro</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              Designed by{" "}
              <a href="https://mhdmuzammiln.github.io/mzml-portfolio">
                mzml.exe
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
