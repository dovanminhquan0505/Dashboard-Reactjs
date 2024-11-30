import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import Pattern from "../../assets/images/login-background.jpg";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import googleIcon from "../../assets/images/Google_Icons.webp"                                                                                                                                                                                                                          
import facebookIcon from "../../assets/images/logo-facebook.png"

const Login = () => {
    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(false);
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
            <section className="loginSection">
                <div className="loginBox">
                    <div className="text-center">
                        <h5 className="fw-bold">Login to Dashboard</h5>
                    </div>

                    <div className="wrapper mt-3 card border">
                        <form>
                            <div
                                className={`form-group mb-3 position-relative ${
                                    inputIndex === 0 && "focus"
                                }`}
                            >
                                <span className="icon">
                                    <MdEmail />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="enter your email"
                                    onFocus={() => focusInput(0)}
                                    onBlur={() => setInputIndex(null)}
                                />
                            </div>

                            <div
                                className={`form-group mb-4 position-relative ${
                                    inputIndex === 1 && "focus"
                                }`}
                            >
                                <span className="icon">
                                    <RiLockPasswordFill />
                                </span>
                                <input
                                    type={`${isShowPassword ? 'text' : 'password'}`}
                                    className="form-control"
                                    placeholder="enter your password"
                                    onFocus={() => focusInput(1)}
                                    onBlur={() => setInputIndex(null)}
                                />

                                <span
                                    className="toggleShowPassword"
                                    onClick={() =>
                                        setIsShowPassword(!isShowPassword)
                                    }
                                >
                                    {isShowPassword ? (
                                        <FaEyeSlash />
                                    ) : (
                                        <FaEye />
                                    )}
                                </span>
                            </div>

                            <div className="form-group">
                                <Button className="btn-blue btn-lg-big w-100">Sign In</Button>
                            </div>

                            <div className="form-group text-center mt-3">
                                <Link to="/forgot-password" className="link">FORGOT PASSWORD</Link>
                                <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                                    <span className="line"></span>
                                    <span className="txt">or</span>
                                    <span className="line"></span>
                                </div>

                                <Button variant="outlined" className="w-100 btn-lg btn-lg-big loginWithGoogle">
                                    <img src={googleIcon} alt="google" className="img__Google" /> &nbsp;
                                    Sign In With Google
                                </Button>

                                <Button variant="outlined" className="w-100 btn-lg btn-lg-big loginWithFacebook mb-4">
                                    <img src={facebookIcon} alt="facebook" className="img__Facebook" /> &nbsp;
                                    Sign In With Facebook
                                </Button>

                                <span className="txt__register text-center">
                                    Don't have an account? <Link to="/signup" className="register__link">Register</Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
