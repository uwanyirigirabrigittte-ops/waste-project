import styles from "./schedule.module.css";

export default function SchedulePage() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.formHeader}>
        
        <h2>Waste Collection Schedule</h2>
      </header>

      <div className={styles.formBox}>
        <h3>Schedule a Pickup</h3>
        <p className={styles.subtitle}>Select your location zone and preferred time to organize your household waste collection.</p>
        
        <form className={styles.form}>
          <div className={styles.fieldGroup}>
            <label>Full Name</label>
            <input type="text" placeholder="e.g., Jean Claude" className={styles.basicInput} required />
          </div>

          <div className={styles.fieldGroup}>
            <label>Your District / Sector</label>
            <input type="text" placeholder="e.g., Kicukiro, Nyarugenge, Gasabo" className={styles.basicInput} required />
          </div>

          <div className={styles.fieldGroup}>
            <label>Neighborhood / Village</label>
            <input type="text" placeholder="e.g., Remera, Kimironko, Niboye" className={styles.basicInput} required />
          </div>

          {/* 📍 The Optional Street / House Code Field */}
          <div className={styles.fieldGroup}>
            <label>Location Identifier / Street Code (Optional)</label>
            <input type="text" placeholder="e.g., KK 506 St or KG 250 St" className={styles.basicInput} />
          </div>

          <div className={styles.fieldGroup}>
            <label>Preferred Pickup Day</label>
            <select className={styles.basicSelect} defaultValue="">
              <option value="" disabled>Select a day</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
            </select>
          </div>

          <div className={styles.fieldGroup}>
            <label>Specific Pickup Date (Optional)</label>
            <input type="date" className={styles.basicInput} />
          </div>

          <button type="submit" className={styles.submitBtn}>Confirm Schedule</button>
        </form>
      </div>
    </div>
  );
}
