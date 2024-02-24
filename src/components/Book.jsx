import React from "react";

const Book = () => {
  return (
    <section className="book" id="book">
      <div className="container">
        <div className="main-text">
          <h1>
            <span>B</span>ook
          </h1>
        </div>

        <div className="row">
          <div className="col-md-6 py-3 py-md-0">
            <div className="card">
              <img src="public\assets\images\book-img.png" alt="" />
            </div>
          </div>

          <div className="col-md-6 py-3 py-md-0">
            <form action="#">
              <input
                type="text"
                className="form-control"
                placeholder="Where To"
                required
              />
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="How Many"
                required
              />
              <br />
              <input
                type="date"
                className="form-control"
                placeholder="Arrivals"
                required
              />
              <br />
              <input
                type="date"
                className="form-control"
                placeholder="Leaving"
                required
              />
              <br />
              <textarea
                className="form-control"
                rows="5"
                name="text"
                placeholder="Enter Your Name & Details"
              ></textarea>
              <input type="submit" value="Book Now" className="submit" required />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
