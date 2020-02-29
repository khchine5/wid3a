import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="col-xxl-3 col-md-6 footer_col">
        <div className="footer_about">
          
          <div className="footer_logo">
            <a href="#">
              <div>
                a<span>star</span>
              </div>
            </a>
          </div>
          <div className="footer_about_text">
            <p>
              Donec vitae purus nunc. Morbi faucibus erat sit amet congue
              mattis. Nullam fringilla faucibus urna, id dapibus erat iaculis
              ut. Integer ac sem.
            </p>
          </div>
          <div className="cards">
            <ul className="d-flex flex-row align-items-center justify-content-start">
              <li>
                <a href="#">
                  <img src="/static/images/card_1.jpg" alt />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/static/images/card_2.jpg" alt />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/static/images/card_3.jpg" alt />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/static/images/card_4.jpg" alt />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/static/images/card_5.jpg" alt />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
