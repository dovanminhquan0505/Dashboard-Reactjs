import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo192.png";

const Header = () => {
    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center">
                        {/* Logo Wrapper */}
                        <div className="col-xs-3">
                            <Link to="/" className="d-flex align-items-center logo">
                                <img src={logo} alt="" />
                                <span className="ml-2">Dashboard</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
