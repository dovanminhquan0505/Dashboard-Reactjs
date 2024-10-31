import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo192.png";
import Button from "@mui/material/Button";
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/ai";
import SearchBox from "../SearchBox/SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import userImg from "../../assets/images/userImg.jpg";

const Header = () => {
    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center">
                        {/* Logo Wrapper */}
                        <div className="col-2 part 1">
                            <Link
                                to="/"
                                className="d-flex align-items-center logo"
                            >
                                <img src={logo} alt="" />
                                <span className="ml-2">Admin</span>
                            </Link>
                        </div>

                        <div className="col-2 d-flex align-items-center pl-4 part2">
                            <Button className="rounded-circle me-3">
                                <MdOutlineMenuOpen />
                            </Button>
                            <SearchBox />
                        </div>

                        <div className="col-6 d-flex align-items-center justify-content-end ms-auto part3">
                            <Button className="rounded-circle me-3">
                                <MdOutlineLightMode />
                            </Button>
                            <Button className="rounded-circle me-3">
                                <IoCartOutline />
                            </Button>
                            <Button className="rounded-circle me-3">
                                <MdOutlineMailOutline />
                            </Button>
                            <Button className="rounded-circle me-3">
                                <FaRegBell />
                            </Button>
                        </div>

                        <Button className="col-2 myAccount d-flex align-items-center">
                            <div className="userImg">
                                <span className="rounded-circle">
                                    <img src={userImg} alt="" />
                                </span>
                            </div>

                            <div className="userInfo">
                                <h4>Minh Quân</h4>
                                <p>admin@gmail.com</p>
                            </div>
                        </Button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
