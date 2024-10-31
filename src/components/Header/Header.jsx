import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo192.png";
import Button from '@mui/material/Button';
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/ai";
import SearchBox from "../SearchBox/SearchBox";

const Header = () => {
    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center">
                        {/* Logo Wrapper */}
                        <div className="col-2 part 1">
                            <Link to="/" className="d-flex align-items-center logo">
                                <img src={logo} alt="" />
                                <span className="ml-2">Admin</span>
                            </Link>
                        </div>

                        <div className="col-3 d-flex align-items-center pl-4 part2">
                            <Button className="rounded-circle me-3"><MdOutlineMenuOpen /></Button>
                            <SearchBox />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
