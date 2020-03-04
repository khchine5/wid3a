import React from "react";
import About from "./About";
import Questions from "./Questions";
import Blog from "./Blog";
import Contact from "./Contact";
import Social from "./Social";
import Credit from "./Credit";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer_content">
          <div className="section_container">
            <div className="container">
              <div className="row">
                <About/>
                <Questions/>
                <Blog/>
                <Contact/>
              </div>
            </div>
          </div>
        </div>
        <Social/>
        <Credit/>
      </footer>
    );
  }
}

export default Footer;
