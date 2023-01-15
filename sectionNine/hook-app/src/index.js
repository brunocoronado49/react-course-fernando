import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { HookApp } from "./HookApp";
import { CounterApp } from "./01-useState/CounterApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* <HookApp /> */}
        <CounterApp />
    </React.StrictMode>
);
