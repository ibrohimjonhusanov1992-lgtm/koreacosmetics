type ProductCardProps = {
  name: string;
  price: string;
};

export default function ProductCard({ name, price }: ProductCardProps) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "20px",
        padding: "18px",
        border: "1px solid #eee",
        boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          height: "230px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #f5f5f5, #e8f3ec)",
          marginBottom: "16px",
        }}
      />

      <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>{name}</h3>

      <p style={{ fontWeight: "bold", marginBottom: "14px" }}>{price}</p>

      <button
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "12px",
          border: "none",
          background: "#111",
          color: "#fff",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
