import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoLogOut } from "react-icons/io5";

const Sidebar = () => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const toggleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen);
    }

  return (
    <>
        <div className='sidebar'>
            <ul>
                <li>
                    <Link to="/" >
                        <Button className='w-100'>
                            <span className='icon'> <MdDashboard /></span>
                            Dashboard
                            <span className='arrow'> <FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>
                <li className={isSubmenuOpen ? 'submenu-open' : ''}>
                    <Button className='w-100' onClick={toggleSubmenu}>
                        <span className='icon'> <MdOutlineProductionQuantityLimits /></span>
                        Products
                        <span className={`arrow ${isSubmenuOpen ? 'rotated' : ''}`}> <FaAngleRight /></span>
                    </Button>
                    <div className={`subMenuWrapper ${isSubmenuOpen ? 'open' : ''}`}>
                        <ul className="submenu">
                            <li>
                                <Link to="#" >Product List</Link>
                            </li>
                            <li>
                                <Link to="#" >Product View</Link>
                            </li>
                            <li>
                                <Link to="#" >Product Upload</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to="/" >
                        <Button className='w-100'>
                            <span className='icon'> <FaShoppingCart /></span>
                            Orders
                            <span className='arrow'> <FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/" >
                        <Button className='w-100'>
                            <span className='icon'> <AiFillMessage /></span>
                            Messages
                            <span className='arrow'> <FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/" >
                        <Button className='w-100'>
                            <span className='icon'> <IoIosNotifications /></span>
                            Notifications
                            <span className='arrow'> <FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/" >
                        <Button className='w-100'>
                            <span className='icon'> <IoMdSettings /></span>
                            Settings
                            <span className='arrow'> <FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Button className='w-100'>
                        <span className='icon'> <MdDashboard /></span>
                        Dashboard
                        <span className='arrow'> <FaAngleRight /></span>
                    </Button>
                </li>
                <li>
                    <Button className='w-100'>
                        <span className='icon'> <MdOutlineProductionQuantityLimits /></span>
                        Products
                        <span className='arrow'> <FaAngleRight /></span>
                    </Button>
                </li>
                <li>
                    <Button className='w-100'>
                        <span className='icon'> <FaShoppingCart /></span>
                        Orders
                        <span className='arrow'> <FaAngleRight /></span>
                    </Button>
                </li>
                <li>
                    <Button className='w-100'>
                        <span className='icon'> <AiFillMessage /></span>
                        Messages
                        <span className='arrow'> <FaAngleRight /></span>
                    </Button>
                </li>
                <li>
                    <Button className='w-100'>
                        <span className='icon'> <IoIosNotifications /></span>
                        Notifications
                        <span className='arrow'> <FaAngleRight /></span>
                    </Button>
                </li>
                <li>
                    <Button className='w-100'>
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