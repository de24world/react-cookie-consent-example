import React from "react";
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
        location="bottom"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
      </CookieConsent>
    </div>
  );
};

export default Popup;
