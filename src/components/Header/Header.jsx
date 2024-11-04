import React, { useState } from "react";
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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import { FaUser } from "react-icons/fa";
import { BsShieldFillExclamation } from "react-icons/bs";
import Logout from "@mui/icons-material/Logout";

const Header = () => {
    const [myAccountDrop, setMyAccountDrop] = useState(null);
    const [notifications, setNotifications] = useState(false);
    const [carts, setCarts] = useState(false);
    const openMyAccount = Boolean(myAccountDrop);
    const openNotifications = Boolean(notifications);
    const openCarts = Boolean(carts);
    // Account drop
    const handleOpenMyAccount = (event) => {
        setMyAccountDrop(event.currentTarget);
    };
    const handleCloseMyAccount = () => {
        setMyAccountDrop(null);
    };

    // Notifications drop
    const handleOpenNotifications = () => {
        setNotifications(true);
    };
    const handleCloseNotifications = () => {
        setNotifications(false);
    };

    // Carts drop
    const handleOpenCarts = () => {
        setCarts(true);
    };
    const handleCloseCarts = () => {
        setCarts(false);
    };

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
                            <div className="notificationWrapper position-relative">
                                <Button
                                    className="rounded-circle me-3"
                                    onClick={handleOpenNotifications}
                                >
                                    <FaRegBell />
                                </Button>
                                <Menu
                                    anchorEl={notifications}
                                    className="notifications dropdown__list"
                                    id="notifications-menu"
                                    open={openNotifications}
                                    onClose={handleCloseNotifications}
                                    onClick={handleCloseNotifications}
                                    slotProps={{
                                        paper: {
                                            elevation: 0,
                                            sx: {
                                                overflow: "visible",
                                                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                                mt: 1.5,
                                                "& .MuiAvatar-root": {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                "&::before": {
                                                    content: '""',
                                                    display: "block",
                                                    position: "absolute",
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: "background.paper",
                                                    transform:
                                                        "translateY(-50%) rotate(45deg)",
                                                    zIndex: 0,
                                                },
                                            },
                                        },
                                    }}
                                    transformOrigin={{
                                        horizontal: "right",
                                        vertical: "top",
                                    }}
                                    anchorOrigin={{
                                        horizontal: "right",
                                        vertical: "bottom",
                                    }}
                                >
                                    <div className="head ps-3 pb-1">
                                        <h4>Notifications (12)</h4>
                                    </div>

                                    <Divider className="mb-1" />

                                    <div className="scroll">
                                        <MenuItem
                                            onClick={handleCloseNotifications}
                                        >
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img
                                                                src={userImg}
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Minh Quân</b>{" "}
                                                            added to his
                                                            favorite list
                                                            <b>
                                                                Leather belt
                                                                steve madden
                                                            </b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">
                                                        few seconds ago
                                                    </p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleCloseNotifications}
                                        >
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img
                                                                src={userImg}
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Minh Quân</b>{" "}
                                                            added to his
                                                            favorite list
                                                            <b>
                                                                Leather belt
                                                                steve madden
                                                            </b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">
                                                        few seconds ago
                                                    </p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleCloseNotifications}
                                        >
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img
                                                                src={userImg}
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Minh Quân</b>{" "}
                                                            added to his
                                                            favorite list
                                                            <b>
                                                                Leather belt
                                                                steve madden
                                                            </b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">
                                                        few seconds ago
                                                    </p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleCloseNotifications}
                                        >
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img
                                                                src={userImg}
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Minh Quân</b>{" "}
                                                            added to his
                                                            favorite list
                                                            <b>
                                                                Leather belt
                                                                steve madden
                                                            </b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">
                                                        few seconds ago
                                                    </p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleCloseNotifications}
                                        >
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img
                                                                src={userImg}
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Minh Quân</b>{" "}
                                                            added to his
                                                            favorite list
                                                            <b>
                                                                Leather belt
                                                                steve madden
                                                            </b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">
                                                        few seconds ago
                                                    </p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleCloseNotifications}
                                        >
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img
                                                                src={userImg}
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Minh Quân</b>{" "}
                                                            added to his
                                                            favorite list
                                                            <b>
                                                                Leather belt
                                                                steve madden
                                                            </b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">
                                                        few seconds ago
                                                    </p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                    </div>

                                    <div className="pt-2 w-100">
                                        <Button className="btn-blue w-100">
                                            View All Notifications
                                        </Button>
                                    </div>
                                </Menu>
                            </div>
                        </div>

                        <div className="col-2 myAccWrapper">
                            <Button
                                className="myAccount d-flex align-items-center"
                                onClick={handleOpenMyAccount}
                            >
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
                            <Menu
                                anchorEl={myAccountDrop}
                                id="account-menu"
                                open={openMyAccount}
                                onClose={handleCloseMyAccount}
                                onClick={handleCloseMyAccount}
                                slotProps={{
                                    paper: {
                                        elevation: 0,
                                        sx: {
                                            overflow: "visible",
                                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                            mt: 1.5,
                                            "& .MuiAvatar-root": {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            "&::before": {
                                                content: '""',
                                                display: "block",
                                                position: "absolute",
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: "background.paper",
                                                transform:
                                                    "translateY(-50%) rotate(45deg)",
                                                zIndex: 0,
                                            },
                                        },
                                    },
                                }}
                                transformOrigin={{
                                    horizontal: "right",
                                    vertical: "top",
                                }}
                                anchorOrigin={{
                                    horizontal: "right",
                                    vertical: "bottom",
                                }}
                            >
                                <MenuItem onClick={handleCloseMyAccount}>
                                    <ListItemIcon>
                                        <FaUser fontSize="medium" />
                                    </ListItemIcon>
                                    My Account
                                </MenuItem>
                                <MenuItem onClick={handleCloseMyAccount}>
                                    <ListItemIcon>
                                        <BsShieldFillExclamation fontSize="medium" />
                                    </ListItemIcon>
                                    Reset Password
                                </MenuItem>
                                <MenuItem onClick={handleCloseMyAccount}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
