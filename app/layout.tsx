import type { Metadata } from "next";
// styles
import "styles/global.css";
// components
import { Navbar } from "./navbar";

export const metadata: Metadata = {
  title: {
    default: "Sriram Veeraghanta",
    template: "%s | Sriram Veeraghanta",
  },
  description: "Developer, Product Designer and Machine Learning Enthusiast.",
  openGraph: {
    title: "Sriram Veeraghanta",
    description: "Developer, Product Designer and Machine Learning Enthusiast.",
    url: "https://vsriram.me",
    siteName: "Sriram Veeraghanta",
    images: [
      {
        url: "https://vsriram.me/images/profile.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Sriram Veeraghanta",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="text-black bg-white dark:text-white  dark:bg-[#111010]"
    >
      <body className="antialiased w-100">
        <Navbar />
        <main className="min-w-0 mt-6 md:mt-0 px-2 md:px-0">{children}</main>
      </body>
    </html>
  );
}
