import "./globals.css";
import Navbar from "./components/Navbar"; // ⬅️ Import your new header

export const metadata = {
  title: "GiraIsuku",
  description: "Smart Waste Management platform for Rwanda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* ⬅️ This keeps the navbar fixed on EVERY page */}
        {children} {/* ⬅️ This dynamically swaps your page.js content below it */}
      </body>
    </html>
  );
}
