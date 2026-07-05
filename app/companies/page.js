import styles from "./companies.module.css";

export default function CompaniesPage() {
  // Mock data of real operators in Rwanda
  const operators = [
    {
      id: 1,
      name: "BAHEZA Ltd",
      zone: "Kicukiro & Secondary Cities",
      type: "Household & Commercial MSW",
      status: "Active",
      contact: "+250 78X XXX XXX"
    },
    {
      id: 2,
      name: "COPED",
      zone: "Gasabo (Remera, Kimironko)",
      type: "Source-Sorted Organic & Plastic Waste",
      status: "Active",
      contact: "+250 78X XXX XXX"
    },
    {
      id: 3,
      name: "Enviroserve Rwanda",
      zone: "National Level (Green Park Bugesera)",
      type: "Electronic Waste (E-Waste)",
      status: "Active",
      contact: "+250 252 XXX XXX"
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a href="/" className={styles.backBtn}>← Back to Home</a>
        <h2>Registered Waste Collection Companies</h2>
      </header>

      <div className={styles.grid}>
        {operators.map((company) => (
          <div key={company.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>{company.name}</h3>
              <span className={styles.statusBadge}>{company.status}</span>
            </div>
            <p><strong>Operating Zone:</strong> {company.zone}</p>
            <p><strong>Waste Type:</strong> {company.type}</p>
            <p><strong>Contact Support:</strong> {company.contact}</p>
            <button className={styles.scheduleBtn}>View Collection Schedule</button>
          </div>
        ))}
      </div>
    </div>
  );
}
