import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

function App() {
  return (
    <div className="App">
        <p>
          I am still working, y'all!
        </p>
    </div>
  );
}

export default App;
