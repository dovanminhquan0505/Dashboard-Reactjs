import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { createContext, useEffect, useState } from "react";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

const MyContext = createContext();

function App() {
    const [isToggleSidebar, setIsToggleSidebar] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);
    const [isThemeMode, setIsThemeMode] = useState(true);

    useEffect(() => {
        if(isThemeMode === true) {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
            localStorage.setItem('isThemeMode', 'light');
        } else {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
            localStorage.setItem('isThemeMode', 'dark');
        }
    }, [isThemeMode])

    const values = {
        isToggleSidebar,
        setIsToggleSidebar,
        isLogin,
        setIsLogin,
        isHideSidebarAndHeader,
        setIsHideSidebarAndHeader,
        isThemeMode,
        setIsThemeMode,
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
                            <Route
                                path="/signup"
                                exact={true}
                                element={<Signup     />}
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
