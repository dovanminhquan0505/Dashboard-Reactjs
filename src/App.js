import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { createContext, useState } from "react";
import Login from "./screens/Login";

const MyContext = createContext();

function App() {
    const [isToggleSidebar, setIsToggleSidebar] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);

    const values = {
        isToggleSidebar,
        setIsToggleSidebar,
        isLogin,
        setIsLogin,
        isHideSidebarAndHeader,
        setIsHideSidebarAndHeader,
    };

    return (
        <BrowserRouter>
            <MyContext.Provider value={values}>
                {isHideSidebarAndHeader !== true && <Header />}
                <div className="main d-flex">
                    {isHideSidebarAndHeader !== true && (
                        <div
                            className={`sidebarWrapper ${
                                isToggleSidebar ? "toggle" : ""
                            }`}
                        >
                            <Sidebar />
                        </div>
                    )}
                    <div
                        className={`content ${
                            isHideSidebarAndHeader === true && "full"
                        } ${isToggleSidebar ? "toggle" : ""}`}
                    >
                        <Routes>
                            <Route
                                path="/"
                                exact={true}
                                element={<Dashboard />}
                            />
                            <Route
                                path="/dashboard"
                                exact={true}
                                element={<Dashboard />}
                            />
                            <Route
                                path="/login"
                                exact={true}
                                element={<Login />}
                            />
                        </Routes>
                    </div>
                </div>
            </MyContext.Provider>
        </BrowserRouter>
    );
}

export default App;
export { MyContext };
