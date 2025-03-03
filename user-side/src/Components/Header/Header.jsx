// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import logo from '../../assets/images/logo.jpeg';
import { IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Header() {
    const navlink =[{
        name : "Home",
        path : "/"
    },{
        name : "Women",
        path : "/women"
    },{
        name : "Men",
        path : "/men"
    },{
        name : "Our Story",
        path : "/story"
    },{
        name : "Contact Us",
        path : "/contact"
    }]


    return (
        <>
            {/* Header Start */}
            <div className='Main-Header w-100 col-12 header-bg '>
                <div className="row col-12">
                    <div className='left-header col-4 header-bg d-flex align-items-center justify-content-center'>

                        <ul className='list-unstyled d-flex gap-4  mt-4'>
                            {
                                navlink.map((data)=>{
                                    return(
                                        <Link to={data.path} className='text-decoration-none text-center icon-color '>
                                        <li className='text-decoration-none text-center icon-color '>{data.name}</li>
                                    </Link>
                                    )
                                    
                                })
                            }
                            {/* <li><a href="#" className='text-decoration-none text-center icon-color '>Home</a></li>
                            <li><a href="#" className='text-decoration-none text-center icon-color '>Women</a></li>
                            <li><a href="#" className='text-decoration-none text-center icon-color'>Men</a></li>
                            <li><a href="#" className='text-decoration-none text-center icon-color'>Our Story</a></li>
                            <li><a href="#" className='text-decoration-none text-center icon-color'>Contact Us</a></li> */}
                        </ul>

                    </div>
                    <div className='Middle-header col-4 header-bg text-center'>
                        <img src={logo} alt="logo" className=' logo-height' />
                    </div>
                    <div className='Right-header header-bg  col-4'>

                        <ul className='list-unstyled d-flex gap-5  mt-4'>
                            <li><a href="#" className='text-decoration-none text-center fs-3 icon-color'><IoSearchSharp /></a></li>
                            <li><a href="#" className='text-decoration-none text-center fs-3 icon-color'><Link to='/login' className='font-color'><FaUser /></Link></a></li>
                            <li><a href="#" className='text-decoration-none text-center fs-3 text-color-header icon-color'><FaRegHeart /></a></li>
                            <li> <a href="#" className='text-decoration-none text-center fs-3 text-color-header icon-color'><IoBagHandle /></a></li>
                        </ul>

                    </div>

                </div>
            </div >

        </>
    )
}

export default Header