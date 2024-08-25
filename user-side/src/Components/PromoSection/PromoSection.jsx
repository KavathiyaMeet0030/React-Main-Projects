/* eslint-disable react/no-unescaped-entities */
// Make sure to create a corresponding CSS file for styles
import image1 from '../../assets/images/1.avif';
import image2 from '../../assets/images/2.jpg';
import image3 from '../../assets/images/image2.jpg'

function PromoSection() {
    return (
        <>
            <div className='promo-section-color py-5'>
                <div className="promo-section  container col-12 d-flex">

                    <div className="promo-text col-6 py-5">
                        <h4 className='p-font fs-2 fw-bold'>The Dress Edit</h4>
                        <h1 className='p-font fs-1  fw-bold'>Dresses You'll turn to again and again.</h1>
                        <p className='p-font fs-6'>
                            Here is your chance to upgrade your wardrobe with a variation of styles and fits that are both.
                        </p>
                        <button className="shop-button p-font fs-5">Shop Collection</button>
                    </div>
                    <div className="promo-images col-6 px-5">
                        <div className='col-12 d-flex '>
        
                                <img src={image1} alt="Dress 1" className="promo-image main-image col-4 w-12 " />
                                <img src={image2} alt="Dress 1" className="promo-image main-image col-4 w-12 " />
                                <img src={image3} alt="Dress 1" className="promo-image main-image col-4 w-12 " />
                
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default PromoSection;
