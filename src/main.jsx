import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RecipesProvider from "./context/RecipesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <RecipesProvider>
            <App />
        </RecipesProvider>
    </BrowserRouter>
);
