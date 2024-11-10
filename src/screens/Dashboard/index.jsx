import React, { useState } from "react";
import DashboardBox from "./components/DashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { MdShoppingBag } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoIosTimer } from "react-icons/io";

const Dashboard = () => {
    const ITEM_HEIGHT = 48;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className="right__content w-100">
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox color={["#1da256", "#48d483"]} icon={<FaUserCircle />} grow={true}/>
                            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<IoCart />}/>
                            <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<MdShoppingBag />}/>
                            <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<BsStars />}/>
                        </div>
                    </div>

                    <div className="col-md-4 ps-0">
                        <div className="box graphBox">
                        <div className="d-flex align-items-center w-100 bottomElement">
                            <h6 className="text-white mb-0 mt-0">Last Month</h6>
                            <div className="ms-auto">
                                <Button className="ms-auto toggleIcon" onClick={handleClick}><HiDotsVertical /></Button>
                                <Menu
                                    className="dropdown__menu"
                                    id="long-menu"
                                    MenuListProps={{
                                    'aria-labelledby': 'long-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    slotProps={{
                                    paper: {
                                        style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: '20ch',
                                        },
                                    },
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <IoIosTimer /> Last Day
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <IoIosTimer /> Last Week
                                    </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                        <IoIosTimer /> Last Month
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <IoIosTimer /> Last Year
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
