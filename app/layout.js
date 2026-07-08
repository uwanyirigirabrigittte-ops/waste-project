import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 

export const metadata = {
  title: "GiraIsuku",
  description: "Smart Waste Management platform for Rwanda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}>
        <Navbar /> 
        
        <div style={{ flex: 1 }}>
          {children} 
        </div>
        
        <Footer /> 
      </body>
    </html>
  );
}
