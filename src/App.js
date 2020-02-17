import React from "react";
import "./App.css";
import Navmenu from "./component/navmenu";

function App() {
  let nav = [
    { tag: "Home", subMenu: null },
    {
      tag: "Service",
      subMenu: ["For entrepreneurs", "For students", "For hobbyists"]
    },
    { tag: "Concat", subMenu: null }
  ];
  return (
    <div className="App">
      <div>
        {" "}
        {/* <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" /> */}
        <Navmenu navmenu={nav} />
      </div>
    </div>
  );
}

export default App;
