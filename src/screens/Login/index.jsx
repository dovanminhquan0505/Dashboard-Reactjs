import React, { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Pattern from "../../assets/images/login-background.jpg";

const Login = () => {
    const context = useContext(MyContext);

    useEffect(() => {
        context.setIsHideSidebarAndHeader(true);
    }, []);

    return (
        <>
            <img src={Pattern} alt="background" className="loginPattern" />
            <section className="loginSection">
                <div className="loginBox">
                    <div className="text-center">
                        <h5 className="fw-bold">Login to Dashboard</h5>
                    </div>
                </div>

                <div className="wrapper">
                    
                </div>
            </section>
        </>
    );
};

export default Login;
