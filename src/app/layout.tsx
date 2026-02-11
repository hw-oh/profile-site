import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteUrl = "https://hw-oh.github.io/profile-site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hyunwoo Oh | AI Developer & ML Engineer",
  description:
    "Senior AI Solution Engineer at Weights & Biases. ML Engineer with expertise in Reinforcement Learning, Medical AI, and Search Optimization. Previously at NAVER and VUNO.",
  keywords: [
    "Hyunwoo Oh",
    "오현우",
    "AI Engineer",
    "Machine Learning",
    "Reinforcement Learning",
    "Weights & Biases",
    "NAVER",
    "Medical AI",
    "ML Engineer",
  ],
  authors: [{ name: "Hyunwoo Oh" }],
  openGraph: {
    title: "Hyunwoo Oh | AI Developer & ML Engineer",
    description:
      "Senior AI Solution Engineer at Weights & Biases. Expertise in RL, Medical AI, and Search Optimization.",
    url: siteUrl,
    siteName: "Hyunwoo Oh",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyunwoo Oh | AI Developer & ML Engineer",
    description:
      "Senior AI Solution Engineer at Weights & Biases. Expertise in RL, Medical AI, and Search Optimization.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hyunwoo Oh",
  jobTitle: "Senior AI Solution Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Weights & Biases",
  },
  url: siteUrl,
  email: "tinkerrman@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/hyunwoo-oh-461462153",
    "https://github.com/hw-oh",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "The University of Tokyo",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "University of Tsukuba",
    },
  ],
  knowsAbout: [
    "Machine Learning",
    "Reinforcement Learning",
    "Contextual Bandit",
    "Medical AI",
    "Search Optimization",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
