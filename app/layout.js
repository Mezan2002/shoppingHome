import "./globals.css";
import { Montserrat } from "next/font/google";

const monstrrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Shop Smile | Home",
  description: "Home page of Shop Smile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monstrrat.className}>{children}</body>
    </html>
  );
}
