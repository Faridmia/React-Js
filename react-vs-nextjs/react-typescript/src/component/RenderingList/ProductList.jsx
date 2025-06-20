import { v4 as uuidv4 } from "uuid";

export default function ProductList() {
  const products = [
    { id: uuidv4(), name: "iPhone 14", price: 999, category: "electronics" },
    { id: 2, name: "Nike Sneakers", price: 129, category: "fashion" },
    { id: 3, name: "MacBook Pro", price: 1999, category: "electronics" },
    { id: 4, name: "T-shirt", price: 25, category: "fashion" },
    {
      id: 5,
      name: "Bluetooth Headphones",
      price: 199,
      category: "electronics",
    },
  ];

  const electronics = products.filter(
    (product) => product.category === "electronics"
  );

  return (
    <div>
      <h2>Electronics Products</h2>
      <ul>
        {electronics.map((product) => (
          <li key={product.id}>
            <b>{product.name}</b> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
