import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | VIRASAT Real Estate Developers",
    default: "VIRASAT — Creating Spaces. Building Legacies. | Premium Real Estate Varanasi",
  },
  description:
    "VIRASAT is Varanasi's premier luxury real estate developer, crafting generational plotted townships, signature residences, and prime commercial destinations across Eastern Uttar Pradesh.",
  keywords: [
    "Virasat Real Estate",
    "Luxury Plots Varanasi",
    "Real Estate Developer in Varanasi",
    "Residential Plots Ring Road Varanasi",
    "Virasat Ganga Enclave",
    "The Kashi Grandeur",
    "Virasat Developments",
    "Premium Properties Varanasi",
  ],
  authors: [{ name: "VIRASAT Developments" }],
  creator: "VIRASAT Developments",
  metadataBase: new URL("https://virasatdevelopments.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://virasatdevelopments.com",
    title: "VIRASAT — Creating Spaces. Building Legacies.",
    description:
      "Varanasi's premier luxury real estate developer. Explore curated plotted enclaves and signature residences built with timeless architectural distinction.",
    siteName: "VIRASAT Developments",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-virasat-ivory text-virasat-charcoal font-sans antialiased selection:bg-virasat-gold/30 selection:text-virasat-green-dark">
        {children}
      </body>
    </html>
  );
}
