import React from "react";
import About from "./About";
import Questions from "./Questions";
import Blog from "./Blog";
import Contact from "./Contact";
import Social from "./Social";
import Cedit from "./Cedit";

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
        
        <Social></Social>
        
        <Cedit></Cedit>
      </footer>
    );
  }
}

export default Footer;
