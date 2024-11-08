import type { Metadata } from "next"; 
import {Jost} from 'next/font/google'
import "./globals.css";

const jost = Jost({ 
  subsets: ["latin"],
  variable: "--jost",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
 

export const metadata: Metadata = {
  title: "Fullstoks",
  description: "Fullstoks Fashion Store",
  icons: {
    icon: [
      { url: "/images/fullstoks-fav.svg", sizes: "16x16", type: "image/svg" },
      { url: "/images/fullstoks-fav.svg", sizes: "32x32", type: "image/svg" },
      {
        url: "/images/fullstoks-fav.svg",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: ["/images/fullstoks-fav.svg"],
    apple: [
      { url: "/images/fullstoks-fav.svg" },
      { url: "/images/fullstoks-fav.svg", sizes: "180x180", type: "image/svg" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/images/fullstoks-fav.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable}`}>
      <body className={`antialiased`} >
        <div className="px-5 overflow-hidden min-h-screen">
        {children}
        </div>
      </body>
    </html>
  );
}
