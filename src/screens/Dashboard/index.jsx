import React, { useEffect, useRef, useState } from "react";
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
import { Line } from "react-chartjs-2";
import { Chart, registerables, LinearScale} from 'chart.js';

const data = {
    labels: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"],
    datasets: [
        {
            label: "Total Sales",
            data: [1000, 1170, 660, 1030, 999, 333, 912],
            backgroundColor: "#4da2ff",
            borderColor: "#4da2ff",
            tension: 0.4,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
            display: false,
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                color: "#eee",
            },
        },
    },
    scales: {
        y: {
            type: "linear",
            beginAtZero: true,
            ticks: {
                color: "#eee", 
            },
            grid: {
                color: "#555555",
            },
        },
        x: {
            type: "linear",
            ticks: {
                color: "#eee",
                callback: function(value, index, ticks) {
                    return Math.trunc(value);
                },
            },
            grid: {
                color: "#555555",
            },
        },
    },
};

const Dashboard = () => {
    const ITEM_HEIGHT = 48;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const chartRef = useRef(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        Chart.register(...registerables, LinearScale);

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

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

                                <div className="chart-container" style={{ marginTop: '3rem' }}>
                                    <Line  ref={chartRef} key={Math.random()} data={data} options={options} />
                                </div>
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
