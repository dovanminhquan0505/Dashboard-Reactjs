import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import { emphasize, styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import Slider from "react-slick";
import productsImg01 from "../../assets/images/product-02.webp";
import productsImg01a from "../../assets/images/product-02-a.webp";
import productsImg01b from "../../assets/images/product-02-b.webp";
import productsImg01c from "../../assets/images/product-02-c.webp";
import productsImg01d from "../../assets/images/product-02-d.webp";
import { FaShop } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoIosColorPalette } from "react-icons/io";
import { FaTshirt } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { TbStarsFilled } from "react-icons/tb";
import { IoTime } from "react-icons/io5";

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

const ProductDetails = () => {
    var productSliderOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    var productSliderExtraOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <>
            <div className="right__content w-100">
                <div className="card card__products border-0 shadow flex-row p-4">
                    <h5 className="mb-0 fw-bold">Product View</h5>
                    <Breadcrumbs aria-label="breadcrumb" className="ms-auto breadcrumbs_">
                        <StyledBreadcrumb 
                            component="a"
                            href="#"
                            label="Dashboard"
                            icon={<HomeIcon fontSize="small" />}
                        />
                        <StyledBreadcrumb 
                            component="a"
                            href="#"
                            label="Products"
                            deleteIcon={<ExpandMoreIcon />}
                        />
                        <StyledBreadcrumb 
                            label="Product View"
                            deleteIcon={<ExpandMoreIcon />}
                        />
                    </Breadcrumbs>
                </div>

                <div className="card productDetailsSection">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="sliderWrapper pt-3 pb-3 ps-4 pe-4">
                                <h6 className="mb-4">Product Gallery</h6>
                                <Slider {...productSliderOptions} className="sliderBig mb-2">
                                    <div className="items">
                                        <img src={productsImg01} alt="" className="w-100" />
                                    </div>
                                </Slider>
                                <Slider {...productSliderExtraOptions} className="sliderSmall">
                                    <div className="items">
                                        <img src={productsImg01a} alt="" className="w-100" />
                                    </div>
                                    <div className="items">
                                        <img src={productsImg01b} alt="" className="w-100" />
                                    </div>
                                    <div className="items">
                                        <img src={productsImg01c} alt="" className="w-100" />
                                    </div>
                                    <div className="items">
                                        <img src={productsImg01d} alt="" className="w-100" />
                                    </div>
                                    <div className="items">
                                        <img src={productsImg01a} alt="" className="w-100" />
                                    </div>
                                    <div className="items">
                                        <img src={productsImg01b} alt="" className="w-100" />
                                    </div>
                                    <div className="items">
                                        <img src={productsImg01c} alt="" className="w-100" />
                                    </div>
                                    <div className="items">
                                        <img src={productsImg01d} alt="" className="w-100" />
                                    </div>
                                </Slider>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div className="pt-3 pb-3 ps-4 pe-4">
                                <h6 className="mb-4">Product Details</h6>
                                <h4>Formal suits for men wedding slim fit 3 piece dress business party jacket</h4>
                                <div className="productInfo mt-3">
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><FaShop /></span>
                                            <span className="name">Brand</span>
                                            <div className="dots">:</div>
                                        </div>
                                        <div className="col-sm-9">
                                            <span className="nameOfProductInfo">Ecstasy</span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                                <span className="icon"><MdCategory /></span>
                                                <span className="name">Category</span>
                                                <div className="dots">:</div>
                                        </div>
                                        <div className="col-sm-9">
                                            <span className="nameOfProductInfo">Man's</span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                                <span className="icon"><IoMdSettings /></span>
                                                <span className="name">Tags</span>
                                                <div className="dots">:</div>
                                        </div>
                                        <div className="col-sm-9">
                                            <span>
                                                <ul className="list list-inline tags sml">
                                                    <li className="list-inline-item">
                                                        <span>SUITE</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>PARTY</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>DRESS</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>SMART</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>MAN</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>STYLES</span>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                                <span className="icon"><IoIosColorPalette /></span>
                                                <span className="name">Color</span>
                                                <div className="dots">:</div>
                                        </div>
                                        <div className="col-sm-9">
                                            <span>
                                                <ul className="list list-inline tags sml">
                                                    <li className="list-inline-item">
                                                        <span>RED</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>BLUE</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>GREEN</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>YELLOW</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>PURPLE</span>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                                <span className="icon"><FaTshirt /></span>
                                                <span className="name">Size</span>
                                                <div className="dots">:</div>
                                        </div>
                                        <div className="col-sm-9">
                                            <span>
                                                <ul className="list list-inline tags sml">
                                                    <li className="list-inline-item">
                                                        <span>SM</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>M</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>L</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>X</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>XL</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>XXL</span>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                                <span className="icon"><IoMdPricetag /></span>
                                                <span className="name">Price</span>
                                                <div className="dots">:</div>
                                        </div>
                                        <div className="col-sm-9">
                                            <span className="nameOfProductInfo me-2">$37.00</span>
                                            <del className="text-danger">$42.00</del>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                                <span className="icon"><FaCartShopping /></span>
                                                <span className="name">Stock</span>
                                                <div className="dots">:</div>
                                        </div>
                                        <div className="col-sm-9">
                                            <span className="nameOfProductInfo">(68) units</span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                                <span className="icon"><TbStarsFilled /></span>
                                                <span className="name">Review</span>
                                                <div className="dots">:</div>
                                        </div>
                                        <div className="col-sm-9">
                                            <span className="nameOfProductInfo">(03) reviews</span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                                <span className="icon"><IoTime /></span>
                                                <span className="name">Published</span>
                                                <div className="dots">:</div>
                                        </div>
                                        <div className="col-sm-9">
                                            <span className="nameOfProductInfo">02 Feb 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    )
};

export default ProductDetails;