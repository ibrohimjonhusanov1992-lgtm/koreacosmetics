export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "#ffffff",
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      <h2>Korea Cosmetics</h2>

      <nav
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/brands">Brands</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
