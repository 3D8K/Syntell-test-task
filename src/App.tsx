import React from "react";
import "./App.css";
import AutoCompleteControl from "./components/autoCompliteControl/AutoCompliteControl";
import FirstControl from "./components/firstControl/FirstControl";
import SecondControl from "./components/secondControl/SecondControl";

function App() {
  return (
    <div className="wrapper">
      <FirstControl />
      <SecondControl />
      <AutoCompleteControl />
    </div>
  );
}

export default App;
