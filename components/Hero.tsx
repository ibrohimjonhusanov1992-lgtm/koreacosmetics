export default function Hero() {
  return (
    <section
      style={{
        padding: "100px 20px",
        textAlign: "center",
        background: "#f5f7f5",
      }}
    >
      <h1
        style={{
          fontSize: "56px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Discover Korean Beauty
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#666",
          marginBottom: "40px",
        }}
      >
        Original Korean skincare & cosmetics delivered to your door.
      </p>

      <button
        style={{
          background: "#111",
          color: "#fff",
          border: "none",
          padding: "16px 40px",
          borderRadius: "12px",
          fontSize: "18px",
        }}
      >
        Shop Now
      </button>
    </section>
  );
}
