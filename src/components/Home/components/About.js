import React from "react";
// import GitHubCalendar from "react-github-calendar";
// import ReactTooltip from "react-tooltip";
import Footer from "./LandingPage/components/Footer";

const About = () => {
  return (
    <div>
      <br />
      <br />
      <div className="d-flex justify-content-center py-4">
        <div>
          <h2>Our Team</h2>
        </div>
      </div>
      <div className="d-flex flex-wrap w-75 justify-content-around rounded mx-auto py-4 my-4">
        <div className="d-flex p-2 my-2 mx-2 pb-4 pt-4 mb-4 justify-content-center bg-light rounded w-25 shadow">
          <div className="d-block">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://github.com/dave-vazquez.png"
                alt="Dave Vazquez"
                className="img-responsive rounded-circle"
                width="150px"
              />
            </div>
            <div className="d-flex justify-content-center">
              <h5>Dave Vazquez</h5>
            </div>
            <div className="d-flex justify-content-center">
              <div className="w-25">
                <i className="fa fa-github fa-large text-dark"></i>
              </div>
              <a href="https://github.com/dave-vazquez">Github</a>
            </div>
          </div>
        </div>

        <div className="d-flex p-2 my-2 mx-2 pt-4 mb-4 pb-4 justify-content-center bg-light rounded w-25 shadow">
          <div className="d-block">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://github.com/alesslongaretti.png"
                alt="Alessandra Longaretti"
                className="img-responsive rounded-circle"
                width="150px"
              />
            </div>
            <div className="d-flex justify-content-center">
              <h5>Alessandra Longaretti</h5>
            </div>
            <div className="d-flex justify-content-center">
              <div className="w-25">
                <i className="fa fa-github fa-large text-dark"></i>
              </div>
              <a href="https://github.com/alesslongaretti">Github</a>
            </div>
          </div>
        </div>
        <div className="d-flex p-2 my-2 mx-2 pt-4 mb-4 pb-4 justify-content-center bg-light rounded w-25 shadow">
          <div className="d-block">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://github.com/taty2010.png"
                alt="Taty Novell"
                className="img-responsive rounded-circle"
                width="150px"
              />
            </div>
            <div className="d-flex justify-content-center">
              <h5>Taty Novell</h5>
            </div>
            <div className="d-flex justify-content-center">
              <div className="w-25">
                <i className="fa fa-github fa-large text-dark"></i>
              </div>
              <a href="https://github.com/taty2010">Github</a>
            </div>
          </div>
        </div>

        <div className="d-flex p-2 my-2 mx-2 pt-4 mb-4 pb-4 justify-content-center bg-light rounded w-25 shadow">
          <div className="block">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://github.com/ccsmith13.png"
                alt="Christine Smith"
                className="img-responsive rounded-circle"
                width="150px"
              />
            </div>
            <div className="d-flex justify-content-center">
              <h5>Christine Smith</h5>
            </div>
            <div className="d-flex justify-content-center">
              <div className="w-25">
                <i className="fa fa-github fa-large text-dark"></i>
              </div>
              <a href="https://github.com/ccsmith13">Github</a>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center p-2 my-2 mx-2 pt-4 mb-4 pb-4 bg-light rounded w-25 shadow">
          <div className="d-block">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://github.com/afrodo1.png"
                alt="Dominic Bridgette"
                className="img-responsive rounded-circle"
                width="150px"
              />
            </div>
            <div className="d-flex justify-content-center">
              <h5>Dominic Bridgette</h5>
            </div>
            <div className="d-flex justify-content-center">
              <div className="w-25">
                <i className="fa fa-github fa-large text-dark"></i>
              </div>
              <a href="https://github.com/afrodo1">Github</a>
            </div>
          </div>
        </div>

        <div className="d-flex p-2 my-2 mx-2 pt-4 mb-4 pb-4 justify-content-center bg-light rounded w-25 shadow">
          <div className="d-block">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://github.com/dillonp23.png"
                alt="Dillon Petretti"
                className="img-responsive rounded-circle"
                width="150px"
              />
            </div>
            <div className="d-flex justify-content-center">
              <h5>Dillon Petretti</h5>
            </div>
            <div className="d-flex justify-content-center">
              <div className="w-25">
                <i className="fa fa-github fa-large text-dark"></i>
              </div>
              <a href="https://github.com/dillonp23">Github</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
