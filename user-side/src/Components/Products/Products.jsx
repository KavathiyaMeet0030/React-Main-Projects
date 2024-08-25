import product1 from '../../assets/images/products1.jpg';
import product2 from '../../assets/images/products2.jpg';
import product3 from '../../assets/images/products3.jpg';
import product4 from '../../assets/images/products4.jpg';
import product5 from '../../assets/images/saree1.jpg';
import product6 from '../../assets/images/image12.jpg';



const products = [
  {
    id: 1,
    name: 'Floral Printed Georgette V-Neck Collar Shirt',
    price: '₹749.00',
    imageUrl: product1, 
  },
  {
    id: 2,
    name: 'Aqua Blue Floral Printed Georgette Mandarin Collar Shirt',
    price: '₹849.00',
    imageUrl: product2,
  },
  {
    id: 3,
    name: 'Light Brown Floral Printed Georgette Mandarin Collar Shirt',
    price: '₹999.00',
    imageUrl: product3,
  },
  {
    id: 4,
    name: 'Floral Printed Heavy Georgette Slanted Placket Shirt',
    price: '₹899.00',
    imageUrl: product4,
  },
  {
    id: 5,
    name: 'Traditional And Modern With This Soft Silk Saree',
    price: '₹2499.00',
    imageUrl: product5,
  },
  {
    id: 6,
    name: 'Elegance Unveiled: Chinon Mandarin Co-ord Sets',
    price: '₹1899.00',
    imageUrl: product6,
  }
];

function Products() {
  return (
    <div className="product-grid container col-12">
      {products.map((product) => (
        <div key={product.id} className="product-card col-3">
          <img src={product.imageUrl} alt={product.name} className="product-image" />
          <h2 className="product-name p-font">{product.name}</h2>
          <p className="product-price">{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
