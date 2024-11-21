import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { createContext, useState } from "react";

const MyContext = createContext();

function App() {
    const [isToggleSidebar, setIsToggleSidebar] = useState(false);

    const values = {
        isToggleSidebar,
        setIsToggleSidebar,
    }

    return (
        <BrowserRouter>
            <MyContext.Provider value={values}>
                <Header />
                <div className="main d-flex">
                    <div className={`sidebarWrapper ${isToggleSidebar ? 'toggle' : ''}`}>
                        <Sidebar />
                    </div>

                    <div className={`content ${isToggleSidebar ? 'toggle' : ''}`}>
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
                        </Routes>
                    </div>
                </div>
            </MyContext.Provider>
        </BrowserRouter>
    );
}

export default App;
export {MyContext}; 