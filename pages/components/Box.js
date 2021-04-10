import React from "react";

class Box extends React.Component {
  render() {
    return (
      <div className="col-lg-4 box_col">
        <div className="box">
          <div className="box_image">
            <img src="/static/images/box_1.jpg" alt="" />
          </div>
          <div className="box_title trans_200">
            <a href="categories.html">summer collection</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Box;
