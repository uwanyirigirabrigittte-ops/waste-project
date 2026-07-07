import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ⬅️ 1. Import your new Footer component

export const metadata = {
  title: "GiraIsuku",
  description: "Smart Waste Management platform for Rwanda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* We add a special CSS class here to allow flex layouts to push the footer down */}
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}>
        <Navbar /> 
        
        <div style={{ flex: 1 }}>
          {children} 
        </div>
        
        <Footer /> {/* ⬅️ 2. This locks the footer onto EVERY single page */}
      </body>
    </html>
  );
}
