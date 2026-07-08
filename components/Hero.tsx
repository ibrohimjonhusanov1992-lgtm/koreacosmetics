export default function Hero() {
  return (
    <section
      style={{
        padding: "120px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #f7fbf8, #eef7f1, #ffffff)",
      }}
    >
      <p style={{ color: "#3f8f5b", fontWeight: "bold", marginBottom: "15px" }}>
        100% Original Korean Cosmetics
      </p>

      <h1 style={{ fontSize: "58px", fontWeight: "bold", marginBottom: "22px" }}>
        Korean Beauty Starts Here
      </h1>

      <p style={{ fontSize: "20px", color: "#666", marginBottom: "40px" }}>
        Premium skincare and beauty products from Korea.
      </p>

      <button
        style={{
          background: "#111",
          color: "#fff",
          border: "none",
          padding: "16px 42px",
          borderRadius: "999px",
          fontSize: "17px",
        }}
      >
        Shop Now
      </button>
    </section>
  );
}
