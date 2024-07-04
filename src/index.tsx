import React, { StrictMode } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root")!;
//index htmlの<div id="root" >
const root = ReactDOM.createRoot(rootElement);

render(<App />, rootElement);

//strictmode消したら再レンダリングするようになった。
//stirct mode 警告が増えたり、挙動が変わったりする　(react.44)

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
