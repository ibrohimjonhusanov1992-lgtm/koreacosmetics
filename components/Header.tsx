export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#ffffffee",
        backdropFilter: "blur(15px)",
        borderBottom: "1px solid #eee",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "18px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          Korea Cosmetics
        </h2>

        <nav
          style={{
            display: "flex",
            gap: "25px",
            fontSize: "16px",
          }}
        >
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/brands">Brands</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>

        <div
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
          }}
        >
          🌐 🇺🇿
          ❤️
          🛒
          👤
        </div>
      </div>
    </header>
  );
}
