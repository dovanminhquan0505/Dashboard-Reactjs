import React from "react";
import DashboardBox from "./components/DashboardBox";

const Dashboard = () => {
    return (
        <>
            <div className="right__content w-100">
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox color={["#1da256", "#48d483"]}/>
                            <DashboardBox color={["#c012e2", "#eb64fe"]}/>
                            <DashboardBox color={["#2c78e5", "#60aff5"]}/>
                            <DashboardBox color={["#e1950e", "#f3cd29"]}/>
                        </div>
                    </div>

                    <div className="col-md-4 ps-0">
                        <div className="box"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
