import React from "react";
import Carousel from 'react-bootstrap/Carousel';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home_slider_container">
          <Carousel>
            <Carousel.Item>
              <img
                src="/static/images/home_slider_1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <div className="home_content_container">
                  <div className="home_content">
                    <div className="home_discount d-flex flex-row align-items-end justify-content-start">
                      <div className="home_discount_num">20</div>
                      <div className="home_discount_text">Discount on the</div>
                    </div>
                    <div className="home_title">New Collection</div>
                    <div className="button button_1 home_button trans_200">
                      <a href="categories.html">Shop NOW!</a>
                    </div>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/static/images/home_slider_1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <div className="home_content_container">
                  <div className="home_content">
                    <div className="home_discount d-flex flex-row align-items-end justify-content-start">
                      <div className="home_discount_num">20</div>
                      <div className="home_discount_text">Discount on the</div>
                    </div>
                    <div className="home_title">New Collection</div>
                    <div className="button button_1 home_button trans_200">
                      <a href="categories.html">Shop NOW!</a>
                    </div>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/static/images/home_slider_1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <div className="home_content_container">
                  <div className="home_content">
                    <div className="home_discount d-flex flex-row align-items-end justify-content-start">
                      <div className="home_discount_num">20</div>
                      <div className="home_discount_text">Discount on the</div>
                    </div>
                    <div className="home_title">New Collection</div>
                    <div className="button button_1 home_button trans_200">
                      <a href="categories.html">Shop NOW!</a>
                    </div>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Home;
