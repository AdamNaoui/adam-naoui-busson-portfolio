import { NfNav } from "@/components/nf/nav";
import { NfFooter } from "@/components/nf/footer";
import { ProfileProvider } from "@/components/nf/profile-provider";
import { LocaleProvider } from "@/components/locale-provider";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Bebas_Neue, Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
  weight: "400",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} - Mobile & Software Engineer`,
    template: `%s | ${DATA.name}`,
  },
  description:
    typeof DATA.description === "string" ? DATA.description : DATA.description.en,
  openGraph: {
    title: `${DATA.name}`,
    description:
      typeof DATA.description === "string"
        ? DATA.description
        : DATA.description.en,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
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
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-nf-ground font-sans text-white antialiased",
          bebas.variable,
          figtree.variable,
          jetbrainsMono.variable
        )}
      >
        <LocaleProvider>
          <ProfileProvider>
            <NfNav />
            {children}
            <NfFooter />
          </ProfileProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
