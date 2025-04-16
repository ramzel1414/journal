import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"]})

export const metadata = {
  title: "Journal Next App",
  description: "Your daily companion for life",
};

export default function RootLayout({ children }) {
  
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <div className="bg-[url('/paper.jpg')] opacity-50 fixed -z-10 inset-0">

          </div>
          <Header/>
          <main className="min-h-screen container mx-auto">{children}</main>
          <Toaster richColors />

          <footer className="bg-green-300 bg-opacity-10 py-12">
            <div className=" text-center text-gray-700">
              <p>Made by: Ramonito Paulito</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>

  );
}
