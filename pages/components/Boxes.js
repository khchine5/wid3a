import React from "react";
import Box from "./Box";

class Boxes extends React.Component {
  render() {
    return (
      <div className="boxes">
        <div className="section_container">
          <div className="container">
            <div className="row">
              
              <Box></Box>
              
              <div className="col-lg-4 box_col">
                <div className="box">
                  <div className="box_image">
                    <img src="/static/images/box_2.jpg" alt />
                  </div>
                  <div className="box_title trans_200">
                    <a href="categories.html">eyewear collection</a>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4 box_col">
                <div className="box">
                  <div className="box_image">
                    <img src="/static/images/box_3.jpg" alt />
                  </div>
                  <div className="box_title trans_200">
                    <a href="categories.html">basic pieces</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Boxes;
