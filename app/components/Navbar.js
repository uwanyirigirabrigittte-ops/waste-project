import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        {/* Clicking the main logo text will also safely take users back home */}
        <a href="/" className={styles.logoLink}>
          <span className={styles.logoText}>Gira<span className={styles.greenText}>Isuku</span></span>
        </a>
      </div>
      <nav className={styles.nav}>
        {/* 🏠 New Home Link Added Here */}
        <a href="/" className={styles.navLink}>Home</a>
        
        <a href="/schedule" className={styles.navLink}>Schedule Pickup</a>
        <a href="/companies" className={styles.navLink}>Waste Collection Companies</a>
        <a href="/about" className={styles.navLink}>About Us</a>
        <a href="/register-collector" className={styles.navLinkForCollectors}>For Collectors</a>
      </nav>
      <div className={styles.authContainer}>
        <a href="/auth" className={styles.loginBtn}>Login / Register</a>
      </div>
    </header>
  );
}
