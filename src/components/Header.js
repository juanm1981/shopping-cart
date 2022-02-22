import React from "react";
import { useRef } from "react";
import { FinalOrder } from "../RouteSwitch";
import Sidebar from "./Sidebar";

function Header(props) {

    const items = React.useContext(FinalOrder);
    const sbBtn = useRef(0);

    const openSb = () => {
        sbBtn.current.style.width = "350px";
    }

    return (
        <header>
            <div className="nav">
                <ul>
                    <li><h1>ReactStore</h1></li>
                    <li className="items" style={{ float: "right" }}><p onClick={openSb}>Items: {items.total}
                    </p></li>
                    <li style={{ float: "right" }}><a href="/about">About</a></li>
                    <li style={{ float: "right" }}><a href="/store">Products</a></li>
                    <li style={{ float: "right" }}><a href="/home">Home</a></li>
                </ul>
                <Sidebar sbBtn={sbBtn} />
            </div>
        </header>
    );
}

export default Header;