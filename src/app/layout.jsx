import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Renan Borsato | Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  description: "Renan Borsato, IT student at Ensign College. Explore my résumé, robotics and teaching experience, and commitments to service, learning, and integrity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="page-shell">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
