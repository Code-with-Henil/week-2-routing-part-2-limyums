import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Category from "./Category";

export const products = [
  { id: 1, name: 'Smartphone', category: 'electronics', price: 1 },
  { id: 2, name: 'Laptop', category: 'electronics', price: 2 },
  { id: 3, name: 'T-Shirt', category: 'clothing', price: 3 },
  { id: 4, name: 'Jeans', category: 'clothing', price: 4 },
  { id: 5, name: 'Science Fiction Book', category: 'books', price: 5 },
  { id: 6, name: 'Mystery Novel', category: 'books', price: 6 },
];


function Product() {
  const { id } = useParams();
  console.log(id);
  if (id != 'all' ) {
    const tmpProduct = products.filter((product) => {
      return product.category == id;
    });

    return (
      <div>
        <Category />
        <h3>Products</h3>
        <ul>
          {tmpProduct.map((product) => (
            <li key={product.id}>
              <Link to={product.id}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  return (
    <div>
      <Category />
      <h3>Products</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default Product;