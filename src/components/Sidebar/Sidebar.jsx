import React from 'react'
import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom';

const Sidebar = () => {
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
                <li>
                    <Link to="/" >
                        <Button className='w-100'>
                            <span className='icon'> <MdOutlineProductionQuantityLimits /></span>
                            Products
                            <span className='arrow'> <FaAngleRight /></span>
                        </Button>
                    </Link>
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
            </ul>
        </div>
    </>
  )
}

export default Sidebar