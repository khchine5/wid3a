import React from "react";

class Blog extends React.Component {
  render() {
    return (
      <div className="col-xxl-3 col-md-6 footer_col">
        <div className="footer_blog">
          <div className="footer_title">blog</div>
          <div className="footer_blog_container">
            
            <div className="footer_blog_item d-flex flex-row align-items-start justify-content-start">
              <div className="footer_blog_image">
                <a href="blog.html">
                  <img src="/static/images/footer_blog_1.jpg" alt />
                </a>
              </div>
              <div className="footer_blog_content">
                <div className="footer_blog_title">
                  <a href="blog.html">what shoes to wear</a>
                </div>
                <div className="footer_blog_date">june 06, 2018</div>
                <div className="footer_blog_link">
                  <a href="blog.html">Read More</a>
                </div>
              </div>
            </div>
            
            <div className="footer_blog_item d-flex flex-row align-items-start justify-content-start">
              <div className="footer_blog_image">
                <a href="blog.html">
                  <img src="/static/images/footer_blog_2.jpg" alt />
                </a>
              </div>
              <div className="footer_blog_content">
                <div className="footer_blog_title">
                  <a href="blog.html">trends this year</a>
                </div>
                <div className="footer_blog_date">june 06, 2018</div>
                <div className="footer_blog_link">
                  <a href="blog.html">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
