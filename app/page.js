import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
     
      
      <main className={styles.main}>
        
       
        <section className={styles.heroLeft}>
          <h1 className={styles.title}>
            Keep Rwanda Clean with <span className={styles.blueText}>GiraIsuku</span>
          </h1>
          
          <p className={styles.description}>
            Track licensed waste collectors in real-time, access neighborhood schedules, 
            and receive instant delay notifications directly from your local sanitation operator.
          </p>

         
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

        
          <div className={styles.heroImageWrapper}>
            <img 
              src="/waste.jpeg" 
              alt="Clean city environment green recycling truck" 
              className={styles.heroMainImage}
              width={100}
              height={100}
            />
             <img 
              src="/waste2.jpeg" 
              alt="Sanitation workers keeping the city clean" 
              className={styles.heroMainImage}
              width={100}
              height={100}
            />
          </div>
        </section>

        
        <section className={styles.rightColumnGroup}>
          
        
          <div className={styles.dashboardRight}>
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
          </div>

         
          <div className={styles.reportWasteBox}>
            <h4>Report Uncollected Waste</h4>
            <p>Has your trash container been left past your scheduled pickup day? Notify your local operator instantly.</p>
            <a href="/schedule" className={styles.reportBtn}>File a Report</a>
          </div>

        </section>
      
      </main>
    </div>
  );
}
