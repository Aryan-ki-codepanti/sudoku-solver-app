import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GridWrapper } from "./Context/GridContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GridWrapper>
            <App />
        </GridWrapper>
    </React.StrictMode>
);
