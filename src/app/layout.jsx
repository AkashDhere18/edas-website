import "@fontsource-variable/montserrat";
import "@fontsource-variable/inter";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
export const metadata = {
  // DEMO ONLY: remove this line when the site goes live on the client's domain
  robots: { index: false, follow: false },
  title: { default: "EDAS Projects | Real Estate Advisory & Turnkey Solutions", template: "%s | EDAS Projects" },
  description:
    "EDAS Projects Pvt. Ltd. — real estate advisory and turnkey contracting solutions across Mumbai, Pune and Western Maharashtra. Innovate. Build. Inspire.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
