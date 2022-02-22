import { BrowserRouter, Routes, Route, } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Store from "./Store";
import React from 'react';
import { useState } from 'react';
import About from "./About";

export const FinalOrder = React.createContext();



const RouteSwitch = () => {
    const [total, setTotal] = useState(0);
    const [waterBottles, setWaterBottles] = useState(0);
    const [beanies, setBeanies] = useState(0);
    const [pads, setPads] = useState(0);

    const value = {
        total: total,
        waterBottles: waterBottles,
        beanies: beanies,
        pads: pads,
        setTotal: setTotal,
        setWaterBottles: setWaterBottles,
        setBeanies: setBeanies,
        setPads: setPads,
    }

    return (
        <FinalOrder.Provider value={value}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route index element={<Store />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </FinalOrder.Provider>
    );
};

export default RouteSwitch;