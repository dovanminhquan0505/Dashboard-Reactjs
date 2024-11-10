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
import { Chart } from "react-google-charts";

export const data = [
    ["Year", "Sales"],
    ["2013", 1000],
    ["2014", 1170],
    ["2015", 660],
    ["2016", 1030],
];

export const options = {
    'backgroundColor': 'transparent',
    'chartArea': {'width': '75%', 'height': '75%'},
    'legend': {'position': 'none'},
    'hAxis': {
        'textStyle': {'color': '#b8b8b8', 'fontSize': 14},
        'gridlines': {'color': '#2a2a2a', 'count': 4},
        'baselineColor': '#2a2a2a'
    },
    'vAxis': {
        'textStyle': {'color': '#b8b8b8', 'fontSize': 14},
        'gridlines': {'color': '#2a2a2a', 'count': 5},
        'baselineColor': '#2a2a2a',
        'minValue': 0,
        'maxValue': 1500
    },
    'lineWidth': 4,
    'pointSize': 6,
    'colors': ['#4da2ff'],
    'areaOpacity': 0.4,
    'fill': 'gradient',
    'gradient': {
        'type': 'linear',
        'x1': '0%',
        'y1': '0%',
        'x2': '0%',
        'y2': '100%',
        'stops': [
            {'color': '#4da2ff', 'offset': '0%'},
            {'color': '#1a4d8c', 'offset': '100%'}
        ]
    },
    'chartCurveType': 'function',
    'animation': {
        'startup': true,
        'duration': 1000,
        'easing': 'out'
    }
};

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
                                <h4 className="text-white mb-0 mt-0 me-auto">Total Sales</h4>
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

                            <div className="graphContainer">
                                <h3 className="text-white fw-bold mb-2">$3,787,666.00</h3>
                                <p className="mb-4">$3,522.90 in last month</p>

                                <Chart
                                    chartType="LineChart"
                                    width="100%"
                                    height="170px"
                                    data={data}
                                    options={options}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card shadow border-0 p-3 mt-4">
                    <h3 className="hd">Best Selling Products</h3>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
