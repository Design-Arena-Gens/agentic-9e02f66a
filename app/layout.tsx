import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const heading = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading"
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

const title = "Fjalë nga Imam Ibn Abd al-Barr";
const description =
  "Përzgjedhje e fjalëve të urta, këshillave dhe fragmenteve të Imam Ibn Abd al-Barr, të shoqëruara me kontekst dhe shpjegime.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "sq_AL",
    url: "https://agentic-9e02f66a.vercel.app",
    siteName: title
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq" className={`${heading.variable} ${bodyFont.variable}`}>
      <body className="font-body">
        <div className="min-h-screen bg-parchment-50">
          <div className="pointer-events-none fixed inset-0 -z-10 gradient-overlay opacity-80" aria-hidden="true" />
          {children}
        </div>
      </body>
    </html>
  );
}
