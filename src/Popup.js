import React from "react";
import "./Popup.scss";
// Basic
// import CookieConsent from "react-cookie-consent";

// Option
import CookieConsent, { Cookies } from "react-cookie-consent";

const Popup = () => {
  return (
    <div className="popup">
      {/* Basic */}
      {/* <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent> */}

      {/* option */}
      <CookieConsent
        disableStyles
        location="none"
        buttonText="Akzeptieren"
        cookieName="myAwesomeCookieName2"
        overlay
        overlayClasses="overlayclass"
        // style={{ background: "#2B373B" }}
        // buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        // expires={150}
      >
        Wir nutzen auf unseren Webseiten Cookies und Trackingtechnologien. Diese
        dienen der Optimierung unserer Website, der Weiterentwicklung von
        Services und Marketingzwecken. Der Einsatz bestimmter Cookies ist für
        die uneingeschränkte Nutzung unserer Website technisch erforderlich.
        Durch Klick auf „Akzeptieren“ stimmen Sie zu, dass auch Cookies zu
        Analyse-, Marketing- und Social Media-Zwecken gesetzt werden. Die
        Einwilligung können Sie jederzeit widerrufen. Weitere Informationen
        sowie die Widerspruchsmöglichkeit finden Sie in unserer
        Datenschutzinformation .<button>Einstellung</button>
      </CookieConsent>
    </div>
  );
};

export default Popup;
