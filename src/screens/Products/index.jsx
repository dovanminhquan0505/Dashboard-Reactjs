import React, { useState } from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import { emphasize, styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import DashboardBox from "../Dashboard/components/DashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import skirt from "../../assets/images/product-01.jpg";
import Pagination from '@mui/material/Pagination';
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

//Breadcrumbs customizations
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
        cursor: 'pointer',
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
});

const Products = () => {
    const [showBy, setShowBy] = useState('');
    const [categoryBy, setCategoryBy] = useState('');
    const [brandBy, setBrandBy] = useState('');

    return (
        <>
            <div className="right__content w-100">
                <div className="card card__products shadow border-0 w-100 flex-row p-4">
                    <h5 className="mb-0 fw-bold">Product List</h5>
                    <Breadcrumbs aria-label="breadcrumb" className="ms-auto breadcrumbs_">
                        <StyledBreadcrumb 
                            component="a"
                            href="#"
                            label="Dashboard"
                            icon={<HomeIcon fontSize="small" />}
                        />
                        <StyledBreadcrumb 
                            label="Products"
                            deleteIcon={<ExpandMoreIcon />}
                        />
                    </Breadcrumbs>
                </div>

                <div className="row dashboardBoxWrapperRow dashboardBoxWrapperRowV2 mt-3">
                    <div className="col-md-12">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox color={["#1da256", "#48d483"]} icon={<FaUserCircle />} grow={true} className="dashboardBox"/>
                            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<IoMdCart />} className="dashboardBox"/>
                            <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<MdShoppingBag />} className="dashboardBox"/>
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

                        <div className="d-flex table__footer">
                            <p>Showing <b>5</b> of <b>50</b> results</p>
                            <Pagination count={50} color="primary" className="pagination" showFirstButton showLastButton/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Products;
