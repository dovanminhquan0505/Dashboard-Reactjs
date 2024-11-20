import React, { useState } from "react";
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
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import skirt from "../../assets/images/product-01.jpg";

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
    const [showBy, setShowBy] = useState('');
    const [categoryBy, setCategoryBy] = useState('');
    const [brandBy, setBrandBy] = useState('');
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

                    <div className="row cardFilters mt-3">
                        <div className="col-md-3">
                            <h4>SHOW BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={showBy}
                                    onChange={(event) => setShowBy(event.target.value)}
                                    displayEmpty
                                    className="w-100"
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    labelId="demo-select-small-label"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="col-md-3">
                            <h4>CATEGORY BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={categoryBy}
                                    onChange={(event) => setCategoryBy(event.target.value)}
                                    displayEmpty
                                    className="w-100"
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    labelId="demo-select-small-label"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="col-md-3">
                            <h4>BRAND BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={brandBy}
                                    onChange={(event) => setBrandBy(event.target.value)}
                                    displayEmpty
                                    className="w-100"
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    labelId="demo-select-small-label"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className="table-responsive mt-3">
                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th>UID</th>
                                    <th>PRODUCT</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th>PRICE</th>
                                    <th>STOCK</th>
                                    <th>RATING</th>
                                    <th>ORDER</th>
                                    <th>SALES</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex product__box">
                                            <div className="imgWrapper">
                                                <img src={skirt} alt="" />
                                            </div>
                                            <div className="info ps-2">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set.</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans </td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$21.00</del>
                                        <span className="new text-danger">$21.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaEdit /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
