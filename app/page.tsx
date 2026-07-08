import Header from "../components/Header";

export default function HomePage() {
  return (
    <>
      <Header />

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          Premium Korean Cosmetics
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#666",
            marginBottom: "40px",
          }}
        >
          100% Original Korean Beauty Products
        </p>

        <button
          style={{
            padding: "15px 35px",
            borderRadius: "10px",
            border: "none",
            background: "#111",
            color: "#fff",
            fontSize: "18px",
          }}
        >
          Shop Now
        </button>
      </main>
    </>
  );
}
