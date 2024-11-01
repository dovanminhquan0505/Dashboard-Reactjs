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
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleOpenMyAccount = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccount = () => {
        setAnchorEl(null);
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
                            <Button className="rounded-circle me-3">
                                <FaRegBell />
                            </Button>
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
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
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
                                    <Avatar /> Profile
                                </MenuItem>
                                <MenuItem onClick={handleCloseMyAccount}>
                                    <Avatar /> My account
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleCloseMyAccount}>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    Add another account
                                </MenuItem>
                                <MenuItem onClick={handleCloseMyAccount}>
                                    <ListItemIcon>
                                        <Settings fontSize="small" />
                                    </ListItemIcon>
                                    Settings
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
