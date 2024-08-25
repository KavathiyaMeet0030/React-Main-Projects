import React from 'react';
import barat from '../../assets/images/made-in-bharat.png';
import commit from '../../assets/images/commitment.png';
import authenticity from '../../assets/images/authenticity.png';
import modern from '../../assets/images/modern.png';
import logo from '../../assets/images/letter-k.png';
import banner from '../../assets/images/story-banner.webp'

const Story = () => {

    const styles = {
        container: {
          display: 'flex',
          alignItems: 'center',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
        },
        leftSection: {
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
        },
        logo: {
          width: '150px',
          height: '150px',
        },
        rightSection: {
          flex: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        },
        principle: {
          display: 'flex',
          alignItems: 'flex-start',
        },
        icon: {
          width: '50px',
          height: '50px',
          marginRight: '20px',
        },
      };
      
  return (

    <>
    {/* dnsndjsds banner start */}
      
      <div className='container d-flex justify-content-center align-items-center py-4 mt-5'>
            <div className='w-12 '>
                <img src={banner} alt="banner" className='banner-width-story'/>
            </div>
      </div>
      
    {/* dnsjndjsd */}
    <div style={styles.container}>
      {/* Left Section with Logo */}
      <div style={styles.leftSection}>
        <img 
          src={logo} 
          alt="Highfy Logo" 
          style={styles.logo} 
        />
      </div>
      
      {/* Right Section with Principles */}
      <div style={styles.rightSection} className='p-5'>
        <div style={styles.principle}>
          <img src={barat} alt="Proudly Made in Bharat" style={styles.icon} />
          <div>
            <h2 className='welcome-font fw-bold fs-1'>Proudly Made In Bharat</h2>
            <p className='p-font'>At Kavathiya, we take immense pride in our commitment to showcasing the rich heritage and artistry of India. Every product we offer is meticulously crafted within the borders of our beloved nation...</p>
          </div>
        </div>

        <div style={styles.principle}>
          <img src={commit} alt="Commitment" style={styles.icon} />
          <div>
            <h2 className='welcome-font fw-bold fs-1'>Commitment</h2>
            <p className='p-font'>Craftsmanship lies at the very core of Kavathiya, with unwavering dedication and meticulous attention to detail, we strive to deliver products that epitomize the highest standards of excellence...</p>
          </div>
        </div>

        <div style={styles.principle}>
          <img src={authenticity} alt="Authenticity" style={styles.icon} />
          <div>
            <h2 className='welcome-font fw-bold fs-1'>Authenticity</h2>
            <p className='p-font'>Authenticity is the guiding principle that drives us at Kavathiya. We believe in the genuine expression of individuality and originality...</p>
          </div>
        </div>

        <div style={styles.principle}>
          <img src={modern} alt="Modern" style={styles.icon} />
          <div>
            <h2 className='welcome-font fw-bold fs-1'>Modern</h2>
            <p className='p-font'>While honoring tradition, Kavathiya also embraces the spirit of innovation and contemporary design...</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


export default Story;
