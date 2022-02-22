import React, { useRef } from 'react';
import { useContext } from 'react';
import { FinalOrder } from "../RouteSwitch";

const Sidebar = (props) => {

    const items = React.useContext(FinalOrder);

    const closeSb = () => {
        props.sbBtn.current.style.width = "0px";
    }

    const orderItems = () => {
        let waterBottles = "";
        let beanies = "";
        let pads = "";
        let totalPrice = ((items.waterBottles * 15) + (items.beanies * 99) + (items.pads * 20));
        if (items.waterBottles > 0) {
            waterBottles = `Water bottles x${items.waterBottles} - ${15 * items.waterBottles}$`
        }
        if (items.beanies > 0) {
            beanies = `Stolen Beanie x${items.beanies} - ${99 * items.beanies}$`
        }
        if (items.pads > 0) {
            pads = `Mousepad x${items.pads} - ${20 * items.pads}$`
        }
        return <div>
            <p>{waterBottles}</p>
            <p>{beanies}</p>
            <p>{pads}</p>
            <h2>Order total: {totalPrice}$</h2>
        </div>
    }

    return (
        <div>
            <div ref={props.sbBtn} className="sidepanel">
                <p onClick={closeSb} className="closebtn">&times;</p>
                <h1>Cart:</h1>
                {orderItems()}
            </div>
        </div>
    );
}

export default Sidebar;