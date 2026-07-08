import { demoProducts } from "../lib/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "60px auto",
        padding: "20px",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          marginBottom: "10px",
        }}
      >
        Popular Products
      </h2>

      <p
        style={{
          color: "#666",
          marginBottom: "30px",
        }}
      >
        Best-selling Korean beauty products
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "22px",
        }}
      >
        {demoProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={`${product.price.toLocaleString()} so'm`}
          />
        ))}
      </div>
    </section>
  );
}
