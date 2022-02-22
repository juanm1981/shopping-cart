import React from "react";
import background from "./assets/background.png"

function Footer() {
    return (
        <footer className="footer">
            <img src={background} alt="Background" />
            <p>Copyright © 2021 ReactStore</p>
        </footer>
    );
}

export default Footer;