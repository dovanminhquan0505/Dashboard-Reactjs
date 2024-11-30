import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import Pattern from "../../assets/images/signup-background.webp";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import googleIcon from "../../assets/images/Google_Icons.webp";
import facebookIcon from "../../assets/images/logo-facebook.png";
import { FaUserCircle } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { IoMdHome } from "react-icons/io";

const Signup = () => {
    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
    const context = useContext(MyContext);

    useEffect(() => {
        context.setIsHideSidebarAndHeader(true);
    }, []);

    const focusInput = (index) => {
        setInputIndex(index);
    };

    return (
        <>
            <img src={Pattern} alt="background" className="loginPattern" />
            <section className="loginSection signUpSection">
                <div className="row">
                    <div className="col-md-8 d-flex align-items-center justify-content-center flex-column left__content">
                        <h1>BEST UX/UI FASHION <strong>ECOMMERCE DASHBOARD</strong> & ADMIN PANEL</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Tenetur necessitatibus sint voluptas, laudantium provident aperiam. Vitae dolorum nam, 
                            inventore est deserunt eaque repellat incidunt, commodi itaque enim recusandae repudiandae dolor.
                        </p>

                        <div className="w-100 mt-3">
                            <Link to={"/"}><Button className="btn-blue btn-lg btn-lg-big"><IoMdHome />Go To Home</Button></Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="loginBox">
                            <div className="text-center">
                                <h5 className="fw-bold">
                                    Register a new account
                                </h5>
                            </div>

                            <div className="wrapper mt-3 card border">
                                <form>
                                    <div
                                        className={`form-group mb-3 position-relative ${
                                            inputIndex === 0 && "focus"
                                        }`}
                                    >
                                        <span className="icon">
                                            <FaUserCircle />
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="enter your name"
                                            onFocus={() => focusInput(0)}
                                            onBlur={() => setInputIndex(null)}
                                        />
                                    </div>

                                    <div
                                        className={`form-group mb-3 position-relative ${
                                            inputIndex === 1 && "focus"
                                        }`}
                                    >
                                        <span className="icon">
                                            <MdEmail />
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="enter your email"
                                            onFocus={() => focusInput(1)}
                                            onBlur={() => setInputIndex(null)}
                                        />
                                    </div>

                                    <div
                                        className={`form-group mb-3 position-relative ${
                                            inputIndex === 2 && "focus"
                                        }`}
                                    >
                                        <span className="icon">
                                            <RiLockPasswordFill />
                                        </span>
                                        <input
                                            type={`${
                                                isShowPassword
                                                    ? "text"
                                                    : "password"
                                            }`}
                                            className="form-control"
                                            placeholder="enter your password"
                                            onFocus={() => focusInput(2)}
                                            onBlur={() => setInputIndex(null)}
                                        />

                                        <span
                                            className="toggleShowPassword"
                                            onClick={() =>
                                                setIsShowPassword(
                                                    !isShowPassword
                                                )
                                            }
                                        >
                                            {isShowPassword ? (
                                                <FaEyeSlash />
                                            ) : (
                                                <FaEye />
                                            )}
                                        </span>
                                    </div>

                                    <div
                                        className={`form-group mb-1 position-relative ${
                                            inputIndex === 3 && "focus"
                                        }`}
                                    >
                                        <span className="icon">
                                            <IoShieldCheckmarkSharp />
                                        </span>
                                        <input
                                            type={`${
                                                isShowConfirmPassword
                                                    ? "text"
                                                    : "password"
                                            }`}
                                            className="form-control"
                                            placeholder="confirm your password"
                                            onFocus={() => focusInput(3)}
                                            onBlur={() => setInputIndex(null)}
                                        />

                                        <span
                                            className="toggleShowPassword"
                                            onClick={() =>
                                                setIsShowConfirmPassword(
                                                    !isShowConfirmPassword
                                                )
                                            }
                                        >
                                            {isShowConfirmPassword ? (
                                                <FaEyeSlash />
                                            ) : (
                                                <FaEye />
                                            )}
                                        </span>
                                    </div>

                                    <FormControlLabel
                                        control={<Checkbox
                                            sx={{
                                              "& .MuiSvgIcon-root": {
                                                fontSize: "22px",
                                                mr: "-5px",
                                                ml: "5px",
                                              },
                                            }}
                                          />}
                                        label="I agree to the all Terms & Conditions"
                                        className="mb-3"
                                        sx={{
                                            "& .MuiFormControlLabel-label": {
                                                fontSize: "14px",
                                                mt: "1px",
                                            },
                                        }}
                                    />

                                    <div className="form-group">
                                        <Button className="btn-blue btn-lg-big w-100">
                                            Sign Up
                                        </Button>
                                    </div>

                                    <div className="form-group text-center mt-3">
                                        <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                                            <span className="line"></span>
                                            <span className="txt">or</span>
                                            <span className="line"></span>
                                        </div>

                                        <Button
                                            variant="outlined"
                                            className="w-100 btn-lg btn-lg-big loginWithGoogle"
                                        >
                                            <img
                                                src={googleIcon}
                                                alt="google"
                                                className="img__Google"
                                            />{" "}
                                            &nbsp; Sign In With Google
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            className="w-100 btn-lg btn-lg-big loginWithFacebook mb-4"
                                        >
                                            <img
                                                src={facebookIcon}
                                                alt="facebook"
                                                className="img__Facebook"
                                            />{" "}
                                            &nbsp; Sign In With Facebook
                                        </Button>

                                        <span className="txt__register text-center">
                                            Already have an account?{" "}
                                            <Link
                                                to="/login"
                                                className="register__link"
                                            >
                                                Login
                                            </Link>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Signup;
