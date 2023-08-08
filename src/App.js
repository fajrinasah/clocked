/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import TestPage from "./components/04-templates/TestPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header></header>
      <Routes>
        <Route path="/test" element={<TestPage />} />
      </Routes>
      <main></main>
      <Toaster />
    </div>
  );
}

export default App;
