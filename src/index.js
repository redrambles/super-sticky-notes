import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { NotesProvider } from "./context";

// New React 18 way of doing this
const root = createRoot(document.getElementById("root"));
root.render(
    <NotesProvider>
        <App tab='home' />
    </NotesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
