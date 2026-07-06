import styles from "./register.module.css";

export default function RegisterCollectorPage() {
  return (
    <div className={styles.pageContainer}>
    
      <header className={styles.formHeader}>
        
        <h2>Waste Collector Portal</h2>
      </header>

      <div className={styles.formBox}>
        <h3>Company Registration Form</h3>
        <p className={styles.subtitle}>Fill in your formal company details to be listed on the GiraIsuku system.</p>
        
        <form className={styles.form}>
          <div className={styles.fieldGroup}>
            <label>Company Name</label>
            <input type="text" placeholder="e.g., BAHEZA Ltd or COPED" className={styles.basicInput} required />
          </div>

          <div className={styles.fieldGroup}>
            <label>RURA License Number</label>
            <input type="text" placeholder="Enter valid operator license ID" className={styles.basicInput} required />
          </div>

          <div className={styles.fieldGroup}>
            <label>Assigned Operating Zones / Sectors</label>
            <input type="text" placeholder="e.g., Kicukiro, Remera, Kimironko" className={styles.basicInput} required />
          </div>

          <div className={styles.fieldGroup}>
            <label>Official Phone Number</label>
            <input type="tel" placeholder="e.g., +250 78X XXX XXX" className={styles.basicInput} required />
          </div>

          <div className={styles.fieldGroup}>
            <label>Primary Waste Type Collected</label>
            <select className={styles.basicSelect} defaultValue="">
              <option value="" disabled>Select waste type</option>
              <option value="household">Household Solid Waste (MSW)</option>
              <option value="organic">Organic / Compostable Waste</option>
              <option value="plastic">Industrial Plastic Recycling</option>
              <option value="ewaste">Electronic Waste (E-Waste)</option>
            </select>
          </div>

          <button type="submit" className={styles.submitBtn}>Submit Application</button>
        </form>
      </div>
    </div>
  );
}
