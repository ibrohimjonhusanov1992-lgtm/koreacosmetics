export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "80px",
        background: "#111",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "50px 20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "30px",
        }}
      >
        <div>
          <h3>Korea Cosmetics</h3>
          <p style={{ marginTop: "12px", color: "#ccc" }}>
            Original Korean beauty products.
          </p>
        </div>

        <div>
          <h4>Menu</h4>
          <p>Shop</p>
          <p>Brands</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Telegram: @koreacosmetics</p>
          <p>Email: info@koreacosmetics.uz</p>
        </div>
      </div>

      <p style={{ textAlign: "center", padding: "20px", color: "#999" }}>
        © 2026 KoreaCosmetics.uz. All rights reserved.
      </p>
    </footer>
  );
}
