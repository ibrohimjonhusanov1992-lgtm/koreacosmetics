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
      <h2 style={{ marginBottom: "25px" }}>Popular Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
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
