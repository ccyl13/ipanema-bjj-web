import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { site } from "@/lib/content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "jiu-jitsu Gijón",
    "BJJ Gijón",
    "academia jiu-jitsu Gijón",
    "Ipanema BJJ",
    "Mathias Ribeiro Team",
    "jiu-jitsu brasileño Asturias",
  ],
  authors: [{ name: site.name }],
  robots: { index: true, follow: true },
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: "es_ES",
    siteName: site.name,
    images: ["/images/profesor-blanco-frente.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/images/profesor-blanco-frente.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${caveat.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-ink text-white antialiased">
        <div className="grain-overlay" aria-hidden />
        <CustomCursor />
        <a href="#main" className="skip-link">
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
