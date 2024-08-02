import React from "react";
import Nav from "./components/Nav";

import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Recipes from "./pages/Recipes";
import Details from "./pages/Details";
import Create from "./pages/CreateX";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Update from "./pages/Update";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
    return (
        <div className="w-[80%] m-auto ">
            <Nav />

            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/create-recipe" element={<Create />} />
                <Route path="/update-recipe" element={<Update />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/recipes/:id" element={<Details />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default App;
