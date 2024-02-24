import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div class="container">
        <div class="main-txt">
          <h1>
            About <span>Us</span>
          </h1>
        </div>

        <div class="row" style={{ marginTop: "50px" }}>
          <div class="col-md-6 py-3 py-md-0">
            <div class="card">
              <img src="/assets/images/about-img.png" alt="" />
            </div>
          </div>

          <div class="col-md-6 py-3 py-md-0">
            <h2>How Travel Agency Work</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis dolorem, numquam earum at nam beatae voluptate natus
              consectetur facere, saepe cupiditate ut exercitationem deserunt,
              facilis quam perspiciatis autem iure illo harum minima. Quas,
              vitae aperiam laudantium alias asperiores nulla rerum, nihil
              eveniet perferendis sint illum accusamus officiis aliquam nam.
            </p>
            <button id="about-btn">Read More...</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
