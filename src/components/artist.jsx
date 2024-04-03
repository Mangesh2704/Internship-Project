import React from "react";

export const Artist = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
        <div className="about-text">
              <h2>Artist of the Month</h2>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/john.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
          <br/>
            <h3>John Doe</h3>
            <p>John Doe is a contemporary visual artist known for his striking use of color and innovative mixed-media techniques. Born and raised in a small town, John discovered his passion for art at a young age and pursued formal training at the prestigious Art Institute. His works often explore themes of identity, nature, and the human experience, reflecting his diverse cultural influences and personal journey.</p>
           
              {/* <p>{props.data ? props.data.paragraph : "loading..."}</p> */}
              <h3>Notable Achievements:</h3>
              <p><li>Winner of the 2023 Contemporary Artist Award.</li>
                <li>Featured in numerous solo and group exhibitions across the country. </li>
                <li>His artwork has been collected by private collectors and art enthusiasts worldwide.</li></p>
              <h3>Current Projects:</h3>
              <p>John is currently working on a series of large-scale canvases exploring the theme of environmental conservation. Through his art, he aims to raise awareness about pressing environmental issues and inspire positive change in society.</p>
              <div className="list-style">
                {/* <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;