import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        {/* <video autoPlay muted width="100%" height="600">
          <source src="img/AscendingVersion.mp4" type="video/mp4"></source>
        </video> */}
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-offset-10 col-md-3 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#services"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
