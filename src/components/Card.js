import React, { useRef } from 'react';
import { useContext } from 'react';
import { FinalOrder } from "../RouteSwitch";

function Card(props) {
    const cartBtn = useRef(0)
    const isrc = require(`./assets/${props.data.src}.png`)
    const items = React.useContext(FinalOrder);

    const total = () => {
        if (props.data.total > 0) {
            return (`(${props.data.total})`)
        }
        if (props.data.total <= 0) {
            return;
        }
    }

    const addToCart = () => {
        if (props.data.total > 0) {
            switch (props.data.src) {
                case "waterbottle":
                    items.setTotal(items.total + props.data.total);
                    items.setWaterBottles(items.waterBottles + props.data.total)
                    props.data.setTotal(0);
                    break;
                case "beanie":
                    items.setTotal(items.total + props.data.total);
                    items.setBeanies(items.beanies + props.data.total)
                    props.data.setTotal(0);
                    break;
                case "pad":
                    items.setTotal(items.total + props.data.total);
                    items.setPads(items.pads + props.data.total)
                    props.data.setTotal(0);
                    break;
                default:
                    break;
            }

        }
    }

    return (
        <div className="card">
            <img src={isrc} alt={props.data.name} style={{ width: '100%' }} />
            <h3>{props.data.name}</h3>
            <p className="price">${props.data.price}</p>
            <button onClick={props.add} style={{ width: '50%' }}>+</button>
            <button onClick={props.remove} style={{ width: '50%' }}>-</button>
            <p><button onClick={addToCart} ref={cartBtn}>Add to Cart {total()}</button></p>
        </div>

    );
}


export default Card;