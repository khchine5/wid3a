import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="col-xxl-3 col-md-6 footer_col">
        <div className="footer_contact">
          <div className="footer_title">Contact</div>
          <div className="footer_contact_list">
            <ul>
              <li className="d-flex flex-row align-items-start justify-content-start">
                <span>C.</span>
                <div>Wid3a Ltd</div>
              </li>
              <li className="d-flex flex-row align-items-start justify-content-start">
                <span>A.</span>
                <div>
                  2619  Saints Alley Tampa, Florida 33614, P.O. BOX 68
                </div>
              </li>
              <li className="d-flex flex-row align-items-start justify-content-start">
                <span>T.</span>
                <div>+1 813-774-0787</div>
              </li>
              <li className="d-flex flex-row align-items-start justify-content-start">
                <span>E.</span>
                <div>office@youremail.com</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
