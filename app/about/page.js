import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.pageContainer}>
      {/* Header back link */}
      <header className={styles.formHeader}>
       
        <h2>About GiraIsuku</h2>
      </header>

      {/* Main Content Box */}
      <div className={styles.contentBox}>
        <h3>Our Mission</h3>
        <p className={styles.paragraph}>
          <strong>GiraIsuku</strong> is a smart waste management platform built specifically to bridge the communication gap between citizens and waste collection companies in Rwanda. 
        </p>

        {/* Highlighted box with a green border */}
        <div className={styles.highlightBox}>
          <h4>The Problem We Solve</h4>
          <p>
            Currently, waste collection schedules operate manually. When a garbage truck breaks down or faces a sudden delay, residents are left waiting with no information. GiraIsuku gives licensed operators a simple portal to publish live schedules and broadcast immediate delay alerts to neighborhoods.
          </p>
        </div>

        <h3>Our Key Features</h3>
        <ul className={styles.featureList}>
          <li><strong>Live Tracking Alerts:</strong> Real-time operational statuses directly from your local zone operators.</li>
          <li><strong>Digital Scheduling:</strong> Easy lookup tools to find exact pickup days using neighborhood location identifiers.</li>
          <li><strong>Verified Operators:</strong> A secure registration channel ensuring only RURA-licensed sanitation providers serve the public.</li>
        </ul>

        <div className={styles.footerSection}>
          <p>Working together to keep Rwanda green, clean, and sustainable.</p>
        </div>
      </div>
    </div>
  );
}
