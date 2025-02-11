import { App } from "./app/App";
import { Career } from "./app/routes/Career";
import { Browse } from "./app/routes/Browse";
import { Contact } from "./app/routes/Contact";
import { Login } from "./app/routes/Login";
import { Register } from "./app/routes/Register";

import { Header } from "./components/Header";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/career" element={<Career />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
