import Popup from "./Popup";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React Popup with Cookie</h1>
      <h2>with 'react-cookie-consent' Libarary</h2>
      <h3>
        <a href="https://www.npmjs.com/package/react-cookie-consent">
          https://www.npmjs.com/package/react-cookie-consent{" "}
        </a>
      </h3>

      <Popup />
    </div>
  );
}
