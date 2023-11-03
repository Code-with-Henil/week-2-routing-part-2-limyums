import { Link } from "react-router-dom";

export const categories = [
    { id: 'electronics', name: 'Electronics' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'books', name: 'Books' },
];


function Category() {
    return (
        <div>
            <h2>Categories</h2>
            <ul>
                <li key='all'>
                    <Link to={`/product/all`}>All</Link>
                </li>
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link to={`/product/${category.id}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default Category;