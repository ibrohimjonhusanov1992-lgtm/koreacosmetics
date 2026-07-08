type ProductCardProps = {
  name: string;
  price: string;
};

export default function ProductCard({
  name,
  price,
}: ProductCardProps) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        border: "1px solid #eee",
      }}
    >
      <div
        style={{
          height: "200px",
          background: "#f3f3f3",
          borderRadius: "10px",
          marginBottom: "15px",
        }}
      />

      <h3>{name}</h3>

      <p>{price}</p>

      <button>Add to Cart</button>
    </div>
  );
}
