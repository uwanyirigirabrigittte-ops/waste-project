import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 <span className={styles.blueText}>GiraIsuku</span> Rwanda. All rights reserved.</p>
      <p className={styles.footerNote}>Working together for a clean, green, and sustainable community.</p>
    </footer>
  );
}
