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

                <div className="card">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="sliderWrapper pt-3 pb-3 ps-4 pe-4">
                                <h6 className="mb-3">Product Gallery</h6>
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
                                <h6 className="mb-3">Product Details</h6>
                                <h4>Formal suits for men wedding slim fit 3 piece dress business party jacket</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    )
};

export default ProductDetails;