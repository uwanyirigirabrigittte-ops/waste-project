"use client";
import { useState } from "react";
import styles from "./auth.module.css";

export default function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className={styles.pageContainer}>
  
      <header className={styles.formHeader}>
        
        <h2>GiraIsuku Portal</h2>
      </header>

      <div className={styles.formBox}>
     
        <div className={styles.tabGroup}>
          <button 
            className={`${styles.tabBtn} ${isLoginView ? styles.activeTab : ""}`}
            onClick={() => setIsLoginView(true)}
          >
            Login
          </button>
          <button 
            className={`${styles.tabBtn} ${!isLoginView ? styles.activeTab : ""}`}
            onClick={() => setIsLoginView(false)}
          >
            Register
          </button>
        </div>

        {isLoginView ? (
         
          <form className={styles.form}>
            <h3>Welcome Back</h3>
            <p className={styles.subtitle}>Enter your details to manage your schedules or route alerts.</p>
            
            <div className={styles.fieldGroup}>
              <label>Email Address</label>
              <input type="email" placeholder="e.g., name@domain.com" className={styles.basicInput} required />
            </div>

            <div className={styles.fieldGroup}>
              <label>Password</label>
              <input type="password" placeholder="Enter your account password" className={styles.basicInput} required />
            </div>

            <button type="submit" className={styles.submitBtn}>Sign In</button>
          </form>
        ) : (
          
          <form className={styles.form}>
            <h3>Create an Account</h3>
            <p className={styles.subtitle}>Register as a citizen or property manager to track trash trucks.</p>
            
            <div className={styles.fieldGroup}>
              <label>Full Name</label>
              <input type="text" placeholder="e.g., Mugisha Eric" className={styles.basicInput} required />
            </div>

            <div className={styles.fieldGroup}>
              <label>Email Address</label>
              <input type="email" placeholder="e.g., name@domain.com" className={styles.basicInput} required />
            </div>

            <div className={styles.fieldGroup}>
              <label>Phone Number</label>
              <input type="tel" placeholder="e.g., +250 78X XXX XXX" className={styles.basicInput} required />
            </div>

            <div className={styles.fieldGroup}>
              <label>Create Password</label>
              <input type="password" placeholder="Create a strong password" className={styles.basicInput} required />
            </div>

            <button type="submit" className={styles.submitBtn}>Create Account</button>
          </form>
        )}
      </div>
    </div>
  );
}
