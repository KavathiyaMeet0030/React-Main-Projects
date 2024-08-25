/* eslint-disable react/no-unescaped-entities */
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';


function App() {

    return (
        <>
            <div className="container py-5">
                <div className="app-container">
                    <div className="sidebar d-flex align-items-center justify-content-center">
                        <ul className="menu ">
                            <li className="menu-item active fs-2 welcome-font">Co-Ord Sets</li>
                            <li className="menu-item fs-2 welcome-font">Tops</li>
                            <li className="menu-item fs-2 welcome-font">Shirts</li>
                            <li className="menu-item fs-2 welcome-font">Dresses</li>
                            <li className="menu-item fs-2 welcome-font">Sarees</li>
                        </ul>
                    </div>

                    <div className="content ">
                        <div >
                            <h2 className="new-collection-title text-center welcome-font fs-3 py-2">New Collection</h2>
                            <div className="collection-items">
                                <div className="item">
                                    <img src={image1} alt="Chinon Mandarin Co-ord Sets" className="item-image" />
                                    <div className="item-description p-font">Elegance Unveiled: Chinon Mandarin Co-ord Sets</div>
                                </div>
                                <div className="item">
                                    <img src={image2} alt="Turquoise Blue Printed Co-ord Set" className="item-image" />
                                    <p className="item-description p-font">Turquoise Blue Printed Shirt Style Top With Pant Chinon Co-Ord Set</p>
                                </div>
                                <div className="item">
                                    <img src={image3} alt="Corduroy Floral Co-Ord Set" className="item-image" />
                                    <p className="item-description p-font">Women's Corduroy Floral Co-Ord Set Top With Long Skirt</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                            <button className="shop-button welcome-font fs-5">Shop Co-Ord Sets</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
