import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"]})

export const metadata = {
  title: "Journal Next App",
  description: "Your daily companion for life",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="bg-[url('/paper.jpg')] opacity-50 fixed -z-10 inset-0">

        </div>
        
        <main>{children}</main>

      </body>
    </html>
  );
}
