import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "../components/nav/Nav";
import Link from "next/link";
import { Footer } from "../components/footer/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: {
    template: '%s - Preston Sia',
    default: 'Preston Sia'
  },
  description: "I\'m Preston, a person from the Seattle/Tacoma area passionate about software, UI Design, and geospatial technologies.",
  keywords: ['Preston', 'software', 'Next.js', 'React', 'TypeScript', 'ArcGIS', 'Figma']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased`}
      >
        <header className="fixed top-0 w-screen">
          <Link
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-main focus:border focus:border-black focus:rounded-md" 
          >
            Skip to Main Content
          </Link>
          <Nav></Nav>
        </header>
        {children}

        <Footer></Footer>
      </body>
    </html>
  );
}
