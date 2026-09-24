import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bethel Montessori Academy | 19 Akenzua Road, Benin City",
  description:
    "Welcome to Bethel Montessori Academy, 19 Akenzua Road Benin City. Leading Montessori nursery, primary, and secondary school. Grooming Africa's Brightest in Edo State, Nigeria.",
  keywords: [
    "Bethel Montessori Academy",
    "BMA Benin City",
    "19 Akenzua Road Benin City",
    "Best Montessori school in Benin City",
    "Edo State schools",
    "Montessori Nursery school",
    "Primary school",
    "Secondary school",
    "Summer Holiday School Benin City",
  ],
  applicationName: "Bethel Montessori Academy",
  openGraph: {
    title: "Bethel Montessori Academy Benin City | Official Website",
    description:
      "Welcome to Bethel Montessori Academy, 19 Akenzua Road Benin City. Leading Montessori nursery, primary, and secondary school.",
    siteName: "Bethel Montessori Academy",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <link rel="icon" href="/brand-icon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "School",
              name: "Bethel Montessori Academy",
              alternateName: "BMA Benin City",
              logo: "/header-logo.svg",
              description:
                "Bethel Montessori Academy is an educational institution devoted to nurturing brilliant minds through authentic Montessori-guided and globally relevant education in Benin City, Edo State, Nigeria.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "19 Akenzua Road",
                addressLocality: "Benin City",
                addressRegion: "Edo State",
                postalCode: "300001",
                addressCountry: "NG",
              },
              telephone: "+234-805-208-7011",
              areaServed: "Benin City, Edo State, Nigeria",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
