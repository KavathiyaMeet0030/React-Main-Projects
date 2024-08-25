import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
    <div className='container'>
    <div className="contact-container">
      <div className="contact-form p-5">
        <h2 className='welcome-font'>We would love to hear from you.</h2>
        <p className='p-font'>
          If you’ve got great products you're making or looking to work with us then drop us a line.
        </p>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit Now</button>
        </form>
      </div>
      
      <div className="contact-info p-3">
        <h4 className='welcome-font fs-3 fw-bold'>Office Address</h4>
        <p className='p-font'>795 NEW Katargam GIDC , Demolation Road , Near Gajera Circle , Surat - 395004</p>
        
        <h4 className='welcome-font fs-3 fw-bold'>Warehouse Address</h4>
        <p className='p-font'>795 NEW Katargam GIDC , Demolation Road , Near Gajera Circle , Surat , Gujarat - 395004</p>
        
        <h4 className='welcome-font fs-3 fw-bold'>Information</h4>
        <p className='p-font'>+91 75673 17298</p>
        <p className='p-font'>kavathiya9981@gmail.com</p>
        
        <h4 className='welcome-font fs-3 fw-bold'>Social Media</h4>
        <p className='p-font'>
          <a href="#" className='px-2 fs-2'><BsFacebook /></a> | 
          <a href="#" className='px-2 fs-2'><FaInstagram /></a> | 
          <a href="#" className='px-2 fs-2'><FaSquareWhatsapp /></a>
        </p>
        
        <h4 className='welcome-font fs-2 fw-bold'>We’re Open</h4>
        <p className='p-font'>Every day 10:00 AM to 06:30 PM</p>
      </div>
    </div>

    </div>
    </>
  );
};

export default Contact;
