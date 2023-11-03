import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import LinkMenu from "./Components/LinkComponent";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import Service from "./Components/Services";
import Contact from "./Components/Contact";
import RecipeList from "./Components/Recipe";
import RecipeDetatil from "./Components/RecipeDetail";
import Signup from "./Components/Signup";
import Welcome from "./Components/Welcome";
import LoginPage from "./Components/LoginPage";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <LinkMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={ <Product />} />  
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipe" element={<RecipeList />} />
          <Route path="/recipes/:id" element={ <RecipeDetatil />} />  
          <Route path="/signup" element={<Signup />} />
          <Route path="/welcome" element={<Welcome />} /> 
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Navigate to="/login" />} />
            
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;
