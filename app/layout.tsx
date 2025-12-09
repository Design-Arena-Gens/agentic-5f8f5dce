import type { Metadata } from "next";
import { Baloo_2, Poppins } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["devanagari", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-baloo"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "आम वाला & पुलिस वाला | AI Cartoon",
  description:
    "एक गर्मी की दोपहर में आम वाले और पुलिस वाले की दोस्ती का AI कार्टून अनुभव, इंटरैक्टिव संगीत और जीवंत इलस्ट्रेशन के साथ।",
  metadataBase: new URL("https://agentic-5f8f5dce.vercel.app"),
  openGraph: {
    title: "आम वाला & पुलिस वाला | AI Cartoon",
    description:
      "गर्मी की दोपहर में दोस्ती की मीठी कहानी को AI शैली के कार्टून में महसूस कीजिए।",
    url: "https://agentic-5f8f5dce.vercel.app",
    siteName: "AI Cartoon कथा",
    locale: "hi_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "आम वाला & पुलिस वाला | AI Cartoon",
    description:
      "गर्मी की दोपहर में दोस्ती की मीठी कहानी को AI शैली के कार्टून में महसूस कीजिए।"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className={`${baloo.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
