import ProductCard from "./ProductCard";

export default function ProductSection() {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "60px auto",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>Popular Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        <ProductCard
          name="Beauty of Joseon Relief Sun"
          price="199,000 so'm"
        />

        <ProductCard
          name="COSRX Snail 96 Essence"
          price="289,000 so'm"
        />

        <ProductCard
          name="SKIN1004 Ampoule"
          price="269,000 so'm"
        />

        <ProductCard
          name="Anua Heartleaf Toner"
          price="249,000 so'm"
        />
      </div>
    </section>
  );
}
