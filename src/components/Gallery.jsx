import React from "react";

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="main-txt">
          <h1>
            <span>G</span>allery
          </h1>
        </div>

        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src="/assets/images/g1.png" alt="" height="230px" />
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src="/assets/images/g2.png" alt="" height="230px" />
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src="/assets/images/g3.png" alt="" height="230px" />
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src="/assets/images/g4.png" alt="" height="230px" />
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src="/assets/images/g5.png" alt="" height="230px" />
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src="/assets/images/g6.png" alt="" height="230px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
