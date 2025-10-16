import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";

import "./index.css";

import AppMegathread from "./pages/AppMegathread.jsx";
import AppTinySoft from "./pages/AppTinySoft";
import useScript from "./scripts/useScript"

function Background() {
  //useScript("/src/js/noise.min.js");
  //useScript("/src/js/shift.js");
  //useScript("/src/js/util.js");

  return (
    <div className="content content--canvas" tabIndex="0" style={{ zIndex: -900 + "!important", position: "absolute" }}></div>
  );
}

function Header() {
  useScript("/src/script.js");
  return (
    <>
      <div className="grid">
        <h1 id="site-title">trevi's megathread</h1>
        <nav id="nb-links">
          <NavLink to="/" end>home</NavLink>
          <NavLink to="/tinysoft" end>software</NavLink>
        </nav>
        {/*<div id="fancytoggle">
          <p>fancy style</p>
          <input id="fancy-checkbox" type="checkbox" onClick={CheckCBox} defaultChecked />
        </div>*/}
      </div>
    </>
  );
}

let container = null;

document.addEventListener("DOMContentLoaded", function (event) {
  if (!container) {
    container = document.getElementById("root");
    const root = createRoot(container);
    root.render(
      <StrictMode>
        <Background />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppMegathread />} />
          <Route path="/tinysoft" element={<AppTinySoft />} />
        </Routes>
      </BrowserRouter>
      </StrictMode>,
    );
  }
});

export { Background, Header };
