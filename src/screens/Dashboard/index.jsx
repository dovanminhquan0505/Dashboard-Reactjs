import React, { useRef, useState } from "react";
import DashboardBox from "./components/DashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { MdShoppingBag } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoIosTimer } from "react-icons/io";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const Dashboard = () => {
    const data = [
        { name: "2013", value: 1000 },
        { name: "2014", value: 1170 },
        { name: "2015", value: 660 },
        { name: "2016", value: 1030 },
        { name: "2017", value: 999 },
        { name: "2018", value: 333 },
        { name: "2019", value: 912 },
    ];

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
                            <DashboardBox
                                color={["#1da256", "#48d483"]}
                                icon={<FaUserCircle />}
                                grow={true}
                            />
                            <DashboardBox
                                color={["#c012e2", "#eb64fe"]}
                                icon={<IoCart />}
                            />
                            <DashboardBox
                                color={["#2c78e5", "#60aff5"]}
                                icon={<MdShoppingBag />}
                            />
                            <DashboardBox
                                color={["#e1950e", "#f3cd29"]}
                                icon={<BsStars />}
                            />
                        </div>
                    </div>

                    <div className="col-md-4 ps-0">
                        <div className="box graphBox">
                            <div className="d-flex align-items-center w-100 bottomElement">
                                <h4 className="text-white mb-0 mt-0 me-auto">
                                    Total Sales
                                </h4>
                                <div className="ms-auto">
                                    <Button
                                        className="ms-auto toggleIcon"
                                        onClick={handleClick}
                                    >
                                        <HiDotsVertical />
                                    </Button>
                                    <Menu
                                        className="dropdown__menu"
                                        id="long-menu"
                                        MenuListProps={{
                                            "aria-labelledby": "long-button",
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        slotProps={{
                                            paper: {
                                                style: {
                                                    maxHeight:
                                                        ITEM_HEIGHT * 4.5,
                                                    width: "20ch",
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

                            <div className="graphContainer">
                                <h3 className="text-white fw-bold mb-2">
                                    $3,787,666.00
                                </h3>
                                <p className="mb-4">$3,522.90 in last month</p>

                                <LineChart className="chart__container" width={340} height={200} data={data}>
                                    <XAxis dataKey="name" tick={{ fill: '#eee' }} />
                                    <YAxis tick={{ fill: '#eee' }} />
                                    <CartesianGrid strokeDasharray="3 3" stroke="#555555" />
                                    <Tooltip />
                                    <Legend labelStyle={{ color: '#eee' }} />
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#4da2ff"
                                        name="Total Sales"
                                    />
                                </LineChart>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card shadow border-0 p-3 mt-4">
                    <h3 className="hd">Best Selling Products</h3>

                    <div className="row">
                        <div className="col">
                            <h4>Show By</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
