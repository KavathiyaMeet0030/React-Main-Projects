import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { SiGnuprivacyguard } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { SignInAsync } from '../../Services/Actions/ThunkAction';



function Login() {

    const {isLogin} = useSelector(state => state.ThunkReducers);
    console.log("islogin",isLogin);

    const [Userinput,setInputState] = useState({
        Email:'',
        Pass:''
    })

    const HandleChange = (e) =>{

        let name = e.target.name;
        let value = e.target.value;

        setInputState({ ...Userinput, [name]: value });

    }

     const dispatch = useDispatch();
     const navigate = useNavigate();

    const HandleSubmit = (e) =>{

        e.preventDefault();

        dispatch(SignInAsync(Userinput));

    }

    useEffect(()=>{

        if(isLogin){
            navigate(`/`)
        }

    },[isLogin])


    return (
        <>

            <div className="container py-5 " style={{width:500}}>

                <div className='w-35 bg-serach rounded-5 p-5 mx-auto mt-1'>
                    <Form onSubmit={HandleSubmit}>

                        <div>
                            <h1 className='text-center  py-3 welcome-font font-color'>
                                Login
                            </h1>
                            
                            <Form.Group className="mb-2 " controlId="formGroupPassword">
                                <Form.Label className='p-font fs-5 font-color'>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Your Email... " name='Email' onChange={HandleChange} className='border-login' />
                            </Form.Group>
                           
                            <Form.Group className="mb-2" controlId="formGroupEmail">
                                <Form.Label className='p-font fs-5 font-color'>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Your Password..." name='Pass' onChange={HandleChange}/>
                            </Form.Group>
                            

                        </div>
                        
                        <div className='py-4 d-flex align-items-center justify-content-center welcome-font'>

                             <Link to='/Signup' className='text-decoration-none fs-5'>Sign Up <span className='welcome-font'><SiGnuprivacyguard className='welcome-font'/></span></Link>

                        </div>


                        <div className='d-flex align-items-center justify-content-between py-2'>

                            <div className='w-25 text-center fs-1 p-2'>
                                 <Link className='font-color'><FcGoogle /></Link>
                            </div>

                            <div className='w-25 text-center fs-1 p-2'>
                                 <Link className='font-color'><FaFacebookSquare /></Link>
                            </div>

                            <div className='w-3 text-center fs-1 p-2'>
                                 <Link className='font-color'><FaSquareGithub /></Link>
                            </div>


                            <div className='w-3 text-center fs-1 p-2 '>
                                 <Link className='font-color'><FaInstagram font-color/></Link>
                            </div>

                        </div>


                        <div className='py-4 mb-2'>
                            <div className='position-relative'>
                                <button className='px-5 py-2 border-0 position-absolute top-50 start-50 translate-middle rounded-pill text-white welcome-font fs-5 women-addto-cart-btn'>
                                   Login
                                </button>
                            </div>

                        </div>
                    </Form>
                </div>

            </div>


        </>
    )
}

export default Login
