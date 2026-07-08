"use client"; 
import { useState } from "react";
import styles from "./companies.module.css";

export default function CompaniesPage() {
  const [activeSchedule, setActiveSchedule] = useState(null);

  const operators = [
    {
      id: 1,
      name: "BAHEZA Ltd",
      zone: "Kicukiro & Secondary Cities",
      type: "Household & Commercial MSW",
      status: "Active",
      contact: "+250 78X XXX XXX",
      days: ["Monday (08:00 AM)", "Thursday (08:00 AM)"]
    },
    {
      id: 2,
      name: "COPED",
      zone: "Gasabo (Remera, Kimironko)",
      type: "Source-Sorted Organic & Plastic Waste",
      status: "Active",
      contact: "+250 78X XXX XXX",
      days: ["Tuesday (10:00 AM)", "Friday (10:00 AM)"]
    },
    {
      id: 3,
      name: "Enviroserve Rwanda",
      zone: "National Level (Green Park Bugesera)",
      type: "Electronic Waste (E-Waste)",
      status: "Active",
      contact: "+250 78X XXX XXX",
      days: ["Every First Saturday of the Month (Umuganda Day)"]
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.pageTitle}>Registered Waste Collection Companies</h2>
      
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
            
            <button 
              className={styles.scheduleBtn} 
              onClick={() => setActiveSchedule(company)}
            >
              View Collection Schedule
            </button>
          </div>
        ))}
      </div>

      
      {activeSchedule && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>{activeSchedule.name} Calendar</h3>
              <button 
                className={styles.closeBtn} 
                onClick={() => setActiveSchedule(null)}
              >
                ✕ Close
              </button>
            </div>
            
            <div className={styles.modalBody}>
              <p><strong>Assigned Zone:</strong> {activeSchedule.zone}</p>
              <h4>Weekly Scheduled Pickup Days:</h4>
              <ul className={styles.scheduleList}>
                {activeSchedule.days.map((day, index) => (
                  <li key={index} className={styles.scheduleItem}>{day}</li>
                ))}
              </ul>
              <p className={styles.noticeText}>
                * Ensure your collection bins are placed outside your gate by 07:00 AM on scheduled routes.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
