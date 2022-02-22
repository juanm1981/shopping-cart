import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card"


const Store = () => {

    const [bottlesQty, setBottlesQty] = useState(0);
    const [beaniesQty, setBeaniesQty] = useState(0);
    const [padsQty, setPadsQty] = useState(0);

    let obj = {
        name: "",
        price: 0,
        src: "",
        total: 0,
    }

    // esto es una villereada, deberia ver como concentrar todo en solo un add y un remove generico
    const addWater = () => {
        setBottlesQty(bottlesQty + 1);
    }

    const removeWater = () => {
        setBottlesQty(bottlesQty - 1);
    }

    const addBeanies = () => {
        setBeaniesQty(beaniesQty + 1);
    }

    const removeBeanies = () => {
        setBeaniesQty(beaniesQty - 1);
    }

    const addPads = () => {
        setPadsQty(padsQty + 1);
    }

    const removePads = () => {
        setPadsQty(padsQty - 1);
    }

    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'></link>
            <Header />
            <div className="products">
                <Card data={obj = ({ name: "Water Bottle", price: 15, src: "waterbottle", total: bottlesQty, setTotal: setBottlesQty })}
                    add={addWater} remove={removeWater} />
                <Card data={obj = ({ name: "Stolen Linus Beanie", price: 99, src: "beanie", total: beaniesQty, setTotal: setBeaniesQty })} add={addBeanies} remove={removeBeanies} />
                <Card data={obj = ({ name: "God tier mousepad!!1", price: 20, src: "pad", total: padsQty, setTotal: setPadsQty })} add={addPads} remove={removePads} />
            </div>
        </div>
    );
};


export default Store;