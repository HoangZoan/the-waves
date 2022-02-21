import { Fragment } from "react";

import { ContactSupport, Timelapse, Phone, Email } from "@mui/icons-material";
// import { useSelector } from "react-redux";

const Footer = () => {
  return (
    <footer className="bck_b_dark">
      <div className="container">
        <div className="logo">WAVES</div>

        <div className="wrapper">
          <div className="left">
            <h2>Contact information</h2>
            <div className="business_nfo">
              <div className="tag">
                <ContactSupport />
                <div className="nfo">
                  <div>Address</div>
                  <div>Some street 222</div>
                </div>
              </div>
              <div className="tag">
                <Timelapse />
                <div className="nfo">
                  <div>Working Hours</div>
                  <div>Always close</div>
                </div>
              </div>
              <div className="tag">
                <Phone />
                <div className="nfo">
                  <div>Phone</div>
                  <div>123 456 7890</div>
                </div>
              </div>
              <div className="tag">
                <Email />
                <div className="nfo">
                  <div>Email</div>
                  <div>hoang@abc.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="left">
            <h2>Be the first to know</h2>
            <div>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
