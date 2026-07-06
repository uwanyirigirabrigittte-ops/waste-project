import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
     
      {/* ⚡ Split Screen Hero Section */}
      <main className={styles.main}>
        
        {/* Left Column: Messages & Search Block */}
        <section className={styles.heroLeft}>
          <h1 className={styles.title}>
            Keep Rwanda Clean with <span className={styles.blueText}>GiraIsuku</span>
          </h1>
          
          <p className={styles.description}>
            Track licensed waste collectors in real-time, access neighborhood schedules, 
            and receive instant delay notifications directly from your local sanitation operator.
          </p>

          {/* New Panel Component filling the layout empty space */}
          <div className={styles.quickSearchBox}>
            <h4>Find Collection Days in Your Sector</h4>
            <div className={styles.inputGroup}>
              <input 
                type="text" 
                placeholder="Enter your location (e.g., Kicukiro, Remera, Kimironko)" 
                className={styles.zoneInput} 
              />
              <button className={styles.searchBtn}>Search Zone</button>
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <a href="/schedule" className={styles.blueBtn}>Check Full Schedule</a>
            <a href="/companies" className={styles.greenBtn}>View Operators</a>
          </div>
        </section>

        {/* Right Column: Balanced Operational Dashboard */}
        <section className={styles.dashboardRight}>
          <div className={styles.boardHeader}>
            <h3>Live Operations Board</h3>
            <span className={styles.liveIndicator}>● Live Updates</span>
          </div>
          
          <div className={styles.alertCardDelayed}>
            <span className={styles.badgeDelayed}>DELAYED</span>
            <div className={styles.alertText}>
              <h4>BAHEZA Ltd — Kicukiro Sector</h4>
              <p>Delayed due to truck maintenance. Collection rescheduled from 09:00 AM to 02:00 PM today.</p>
            </div>
          </div>

          <div className={styles.alertCardOnTime}>
            <span className={styles.badgeOnTime}>ON TIME</span>
            <div className={styles.alertText}>
              <h4>COPED — Gasabo (Remera Zone)</h4>
              <p>Trucks currently tracking en route. Please ensure waste bins are placed outside.</p>
            </div>
          </div>
        </section>

      </main>
            {/* Add this right below your </main> tag */}
      <section className={styles.featuresSection}>
        <h2 className={styles.sectionHeading}>How GiraIsuku Keeps Your Neighborhood Clean</h2>
        
        <div className={styles.featuresGrid}>
          {/* Card 1 */}
          <div className={styles.featureCard}>
            <div className={styles.iconCircleBlue}>📍</div>
            <h4>Know Your Route</h4>
            <p>Enter your unique street code or neighborhood name to find exactly which licensed operator services your gate.</p>
          </div>

          {/* Card 2 */}
          <div className={styles.featureCard}>
            <div className={styles.iconCircleGreen}>📢</div>
            <h4>Real-Time Alerts</h4>
            <p>No more waiting blindly. Get immediate notifications from companies if mechanical breakdowns or traffic cause delays.</p>
          </div>

          {/* Card 3 */}
          <div className={styles.featureCard}>
            <div className={styles.iconCircleBlue}>🗓️</div>
            <h4>Flexible Scheduling</h4>
            <p>Need a bulk pickup or missed your regular trash morning? Book a direct, off-schedule collection window in minutes.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
