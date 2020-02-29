import React from "react";

class Language extends React.Component {
  render() {
    return (
      <div className="info_languages has_children">
        <div className="language_flag">
          <img
            src="/static/images/flag_1.svg"
            alt="https://www.flaticon.com/authors/freepik"
          />
        </div>
        <div className="dropdown_text">english</div>
        <div className="dropdown_arrow">
          <i className="fa fa-angle-down" aria-hidden="true" />
        </div>
        
        <ul>
          <li>
            <a href="#">
              <div className="language_flag">
                <img
                  src="/static/images/flag_2.svg"
                  alt="https://www.flaticon.com/authors/freepik"
                />
              </div>
              <div className="dropdown_text">french</div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="language_flag">
                <img
                  src="/static/images/flag_5.svg"
                  alt="https://www.flaticon.com/authors/freepik"
                />
              </div>
              <div className="dropdown_text">arabic</div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Language;
