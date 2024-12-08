import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoLogOut } from "react-icons/io5";
import { MyContext } from '../../App';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    const context = useContext(MyContext);

    const isOpenSubmenu = (index) => {
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu);
    };

  return (
    <>
        <div className='sidebar'>
            <ul>
                <Link to="/">
                    <li>
                        <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`} 
                            onClick={() => isOpenSubmenu(0)} 
                        >
                            <span className='icon'><MdDashboard /></span>
                                Dashboard
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                </Link>
                <li>
                    <Button className={`w-100 ${activeTab === 1 && isToggleSubmenu === true ? 'active' : ''}`} 
                        onClick={() => isOpenSubmenu(1)} 
                    >
                        <span className='icon'><FaProductHunt /></span>
                        Products
                        <span className="arrow"> <FaAngleRight /></span>
                    </Button>
                    <div className={`subMenuWrapper ${activeTab === 1  && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                        <ul className="submenu">
                            <li>
                                <Link to="/products" >Product List</Link>
                            </li>
                            <li>
                                <Link to="/product-details" >Product View</Link>
                            </li>
                            <li>
                                <Link to="/product-upload" >Product Upload</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to="/" >
                        <Button className={`w-100 ${activeTab === 2 ? 'active' : ''}`}
                        onClick={() => isOpenSubmenu(2)}>
                            <span className='icon'> <FaShoppingCart /></span>
                            Orders
                            <span className='arrow'> <FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/" >
                        <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`}
                        onClick={() => isOpenSubmenu(3)}>
                            <span className='icon'> <AiFillMessage /></span>
                            Messages
                            <span className='arrow'> <FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/" >
                        <Button className={`w-100 ${activeTab === 4 ? 'active' : ''}`}
                        onClick={() => isOpenSubmenu(4)}>
                            <span className='icon'> <IoIosNotifications /></span>
                            Notifications
                            <span className='arrow'> <FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/" >
                        <Button className={`w-100 ${activeTab === 5 ? 'active' : ''}`}
                        onClick={() => isOpenSubmenu(5)}>
                            <span className='icon'> <IoMdSettings /></span>
                            Settings
                            <span className='arrow'> <FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab === 6 ? 'active' : ''}`}
                    onClick={() => isOpenSubmenu(6)}>
                        <span className='icon'> <MdDashboard /></span>
                        Dashboard
                        <span className='arrow'> <FaAngleRight /></span>
                    </Button>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab === 7 ? 'active' : ''}`}
                    onClick={() => isOpenSubmenu(7)}>
                        <span className='icon'> <FaProductHunt /></span>
                        Products
                        <span className='arrow'> <FaAngleRight /></span>
                    </Button>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab === 8 ? 'active' : ''}`}
                    onClick={() => isOpenSubmenu(8)}>
                        <span className='icon'> <FaShoppingCart /></span>
                        Orders
                        <span className='arrow'> <FaAngleRight /></span>
                    </Button>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab === 9 ? 'active' : ''}`}
                    onClick={() => isOpenSubmenu(9)}>
                        <span className='icon'> <AiFillMessage /></span>
                        Messages
                        <span className='arrow'> <FaAngleRight /></span>
                    </Button>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab === 10 ? 'active' : ''}`}
                    onClick={() => isOpenSubmenu(10)}>
                        <span className='icon'> <IoIosNotifications /></span>
                        Notifications
                        <span className='arrow'> <FaAngleRight /></span>
                    </Button>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab === 11 ? 'active' : ''}`}
                    onClick={() => isOpenSubmenu(11)}>
                        <span className='icon'> <IoMdSettings /></span>
                        Settings
                        <span className='arrow'> <FaAngleRight /></span>
                    </Button>
                </li>

                <br />

                <div className="logoutWrapper">
                    <div className="logoutBox">
                        
                        <Button variant="contained"><IoLogOut /> Logout</Button>
                    </div>
                </div>
            </ul>
        </div>
    </>
  )
}

export default Sidebar