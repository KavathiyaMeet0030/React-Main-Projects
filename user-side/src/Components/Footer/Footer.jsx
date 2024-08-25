import barat from '../../assets/images/made-in-bharat.png';
import commit from '../../assets/images/commitment.png';
import Authenticity from '../../assets/images/authenticity.png';
import Modern from '../../assets/images/modern.png';

const styles = {
  footer: {
    backgroundColor: '#f8f8f8',
    padding: '20px',
  },
  followUs: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  features: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#800020',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
  },
  input: {
    padding: '10px',
    marginRight: '10px',
  },
  socialMedia: {
    display: 'flex',
    gap: '10px',
  },
  copyright: {
    textAlign: 'center',
    marginTop: '20px',
  }
};


const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.followUs}>
        <h2 className='welcome-font py-2'>Follow us Instagram</h2>
        <p className='p-font'>Tag <strong>@Kavathiya_official</strong> in your Instagram photos for a chance to be featured here.</p>
        <button style={styles.button} className='rounded-3 welcome-font fs-6'>Follow @Kavathiya_official</button>
      </div>

      <div  className='col-12 d-flex flex-wrap align-items-center container py-5'>

        <div className='col-3 text-center'>
           <img src={barat} alt="barat" width={100} height={100} />
           <div className='p-font fs-4 py-3'>Proudly Made In Bharat</div>
        </div>

        <div className='col-3 text-center'>
           <img src={commit} alt="commit" />
           <div className='p-font fs-4 py-3'>Commitment</div>
        </div>

        <div className='col-3 text-center'>
           <img src={Authenticity} alt="Authenticity" />
           <div className='p-font fs-4 py-3'>Authenticity</div>
        </div>

        <div className='col-3 text-center'>
           <img src={Modern} alt="barat" />
           <div className='p-font fs-4 py-3'>Modern</div>
        </div>
       {/* <FooterSection   title="Proudly Made In Bharat" />
        <FooterSection icon="{}" title="Commitment" />
        <FooterSection icon="✅" title="Authenticity" />
        <FooterSection icon="👗" title="Modern" /> */}
      </div>

      <div style={styles.footerContent} className='py-3'>
        <div>
          <h3 className='welcome-font fs-3 fw-bold'>Quick link</h3>
          <ul className='list-unstyled'>
            <li><a href="#" className='text-decoration-none text-dark p-font'>Home</a></li>
            <li><a href="#" className='text-decoration-none text-dark p-font'>Products</a></li>
            <li><a href="#" className='text-decoration-none text-dark p-font'>Our Story</a></li>
            <li><a href="#" className='text-decoration-none text-dark p-font'>Contact Us</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className='welcome-font fs-3 fw-bold'>Useful Links</h3>
          <ul className='list-unstyled'>
            <li><a href="#" className='text-decoration-none text-dark p-font'>Login</a></li>
            <li><a href="#" className='text-decoration-none text-dark p-font'>Register</a></li>
            <li><a href="#" className='text-decoration-none text-dark p-font'>Reset Password</a></li>
            <li><a href="#" className='text-decoration-none text-dark p-font'>My Orders</a></li>
            <li><a href="#" className='text-decoration-none text-dark p-font'>Track Order</a></li>
            <li><a href="#" className='text-decoration-none text-dark p-font'>Return Order</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className='welcome-font fs-3 fw-bold '>Policies</h3>
          <ul className='list-unstyled'>
            <li><a href="#" className='text-decoration-none text-dark p-font'>Privacy Policy</a></li>
            <li><a href="#" className='text-decoration-none text-dark p-font'>Terms & Conditions</a></li>
            <li><a href="#" className='text-decoration-none text-dark p-font'>Return / Refund Policy</a></li>
            <li><a href="#" className='text-decoration-none text-dark p-font'>Shipping Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className='welcome-font fs-3 fw-bold '>Our Store</h3>
          <p className='p-font'>+91 75673 17298</p>
          <p><a href="mailto:highfyofficial5@gmail.com " className='text-decoration-none text-dark p-font'>kavathiya9981@gmail.com</a></p>
          <div style={styles.socialMedia}>
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-whatsapp"></i></a>
          </div>
        </div>
        
        <div>
          <h3 className='welcome-font fs-3 fw-bold '>Subscribe to our newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your e-mail" style={styles.input} className='rounded-2'/>
            <button type="submit" style={styles.button} className='rounded-2 welcome-font fs-6'>Subscribe now</button>
          </form>
        </div>
      </div>
      
      <div style={styles.copyright} className='py-0'>
        <p className='p-font'>&copy; 2024 Kavathiya. All Rights Reserved. Powered by Kavathiya.</p>
      </div>
    </footer>
  );
};



export default Footer;
