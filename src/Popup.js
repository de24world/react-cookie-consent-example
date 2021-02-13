import React from "react";
import "./Popup.scss";
// Basic
// import CookieConsent from "react-cookie-consent";

// Option
import CookieConsent, { Cookies } from "react-cookie-consent";

const Popup = () => {
  return (
    <div>
      {/* Basic */}
      {/* <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent> */}

      {/* option */}
      <CookieConsent
        disableStyles
        location="none"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        // style={{ background: "#2B373B" }}
        // buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        // expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    </div>
  );
};

export default Popup;
