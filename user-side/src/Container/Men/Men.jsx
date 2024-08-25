/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import product1 from '../../assets/images/men1.jpg';
import product2 from '../../assets/images/men2.jpg';
import product3 from '../../assets/images/men3.jpg';
import product4 from '../../assets/images/men4.jpg';
import product5 from '../../assets/images/men5.jpg';
import product6 from '../../assets/images/men6.jpg';
import product7 from '../../assets/images/men-7.jpg';
import product8 from '../../assets/images/men8.jpg';
import product9 from '../../assets/images/men9.jpg';
import product10 from '../../assets/images/men10.jpg';
import product11 from '../../assets/images/men11.jpg';
import product12 from '../../assets/images/men12.jpg';
import product13 from '../../assets/images/men13.jpg';
import product14 from '../../assets/images/men14.jpg';
import product15 from '../../assets/images/men15.jpg';


const Men = () => {
  const [filters, setFilters] = useState({
    priceRange: [0, 2000],
    productType: [],
    size: [],
  });

  const products = [
  
    { id: 1, name: 'Textured Threads: Corduroy Charm Men`s Shirt', price: 899, image:product1, type: 'Shirts', size: ['S', 'M'] },
    { id: 2, name: 'Contemporary Tropical Printed Men`s Shirt', price: 799, image:product2, type: 'Shirts', size: ['M', 'L'] },
    { id: 3, name: 'Cosmic Corduroy: Illusionary Impressions Shirt Collection', price: 849, image:product3, type: 'Shirts', size: ['S', 'M'] },
    { id: 4, name: 'Textured Threads: Corduroy Charm Men`s Shirt', price: 949, image:product4, type: 'Shirts', size: ['S', 'M','L'] },
    { id: 5, name: 'Textured Threads: Corduroy Charm Men`s Shirt', price: 999, image:product5, type: 'Shirts', size: ['S', 'M','L'] },
    { id: 6, name: 'Cosmic Corduroy: Illusionary Impressions Shirt Collection', price: 1149, image:product6, type: 'Shirts', size: [ 'M'] },
    { id: 7, name: 'Contemporary Tropical Printed Men`s Shirt', price: 849, image:product7, type: 'Shirts', size: ['S', 'M','L'] },
    { id: 8, name: 'Cosmic Corduroy: Illusionary Impressions Shirt Collection', price: 719, image:product8, type: 'Shirts', size: ['S', 'M','L'] },
    { id: 8, name: 'Cosmic Corduroy: Illusionary Impressions Shirt Collection', price: 719, image:product8, type: 'Shirts', size: ['S', 'M','L'] },
    { id: 9, name: 'Contemporary Tropical Printed Men`s Shirt', price: 799, image:product10, type: 'Shirts', size: ['S', 'M'] },
    { id: 11, name: 'Cosmic Corduroy: Illusionary Impressions Shirt Collection', price: 999, image:product11, type: 'Shirts', size: ['S', 'M','L'] },
    { id: 12, name: 'Contemporary Tropical Printed Men`s Shirt', price: 749, image:product12, type: 'Shirts', size: ['M'] },
    { id: 13, name: 'Traditional And Modern With This Soft Shirt', price: 1349, image:product13, type: 'Shirts', size: ['S'] },
    { id: 14, name: 'Contemporary Tropical Printed Men`s Shirt', price: 849, image:product14, type: 'Shirts', size: ['L'] },
    { id: 15, name: 'Cosmic Corduroy: Illusionary Impressions Shirt Collection', price: 749, image:product15, type: 'Shirts', size: ['S','L'] },


   
  ];

  const handleFilterChange = (type, value) => {
    setFilters(prev => {
      return {
        ...prev,
        [type]: value
      };
    });
  };

  const filteredProducts = products.filter(product => {
    const isWithinPriceRange = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    const matchesProductType = filters.productType.length === 0 || filters.productType.includes(product.type);
    const matchesSize = filters.size.length === 0 || filters.size.some(size => product.size.includes(size));
    return isWithinPriceRange && matchesProductType && matchesSize;
  });

  return (
    <>
    

    <div className="product-listing container">
      <div className="filters pt-5">
        <h4 className='py-3 welcome-font fw-bold'>Filters</h4>
        <div className="filter-section py-2">
          <h5 className='welcome-font fw-bold fs-3'>Price</h5>
          <input 
            type="range" 
            min="0" 
            max="2000" 
            value={filters.priceRange[1]} 
            onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], e.target.value])} 
          />
          <div>₹ {filters.priceRange[0]} To ₹ {filters.priceRange[1]}</div>
        </div>

        <div className="filter-section py-5">
          <h5 className='welcome-font fw-bold fs-3'>Product Type</h5>
          
           <div><label className='welcome-font fs-4'><input type="checkbox" value="Shirts" onChange={(e) => handleFilterChange('productType', e.target.checked ? [...filters.productType, e.target.value] : filters.productType.filter(type => type !== e.target.value))} /> Shirts</label></div>
        </div>

        <div className="filter-section">
          <h5 className='welcome-font fw-bold fs-3'fw-bold>Size</h5>
          <div><label className='welcome-font fs-4'><input type="checkbox" value="S" onChange={(e) => handleFilterChange('size', e.target.checked ? [...filters.size, e.target.value] : filters.size.filter(size => size !== e.target.value))} /> S</label></div>
          <div><label className='welcome-font fs-4'><input type="checkbox" value="M" onChange={(e) => handleFilterChange('size', e.target.checked ? [...filters.size, e.target.value] : filters.size.filter(size => size !== e.target.value))} /> M</label></div>
          <div><label className='welcome-font fs-4'><input type="checkbox" value="L" onChange={(e) => handleFilterChange('size', e.target.checked ? [...filters.size, e.target.value] : filters.size.filter(size => size !== e.target.value))} /> L</label></div>
          {/* Add more sizes as needed */}
        </div>
      </div>

      <div className="product-grid justify-content-center">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card col-3 pb-3 ">
            <img src={product.image} alt={product.name}  className='w-100'/>
            <h5 className='welcome-font fs-5 fw-bold pt-2'>{product.name}</h5>
            <p className='p-font'>₹{product.price}</p>
            <button className='py-1 px-2 border-0 rounded-2 text-white women-addto-cart-btn p-font'>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Men;
