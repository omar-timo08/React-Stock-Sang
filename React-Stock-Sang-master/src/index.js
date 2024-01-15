import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminProfile from "./adminProfile";
import AdminLogin from "./adminLogin";
import Stock from "./Stock";
import RendezVous from "./RendezVous";
import AjoutBanque from "./ajoutBanque";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/adminProfile" element={<AdminProfile/>} />
                <Route path="/adminLogin" element={<AdminLogin/>} />
                <Route path="/stock" element={<Stock/>} />
                <Route path="/rendezvous" element={<RendezVous/>} />
                <Route path="/ajoutBanque" element={<AjoutBanque/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
