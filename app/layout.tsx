import type { Metadata } from "next";
import "./globals.css";
import { Footer, OverlayHud, PlexusBackground } from "./components";
import { Navbar } from "./components/";
import { LoadingProvider } from "./context/LoadingContext";


export const metadata: Metadata = {
  title: "Edwin Dijeont - Développeur Web Front-End",
  description: "Portfolio de Edwin Dijeont, développeur web front-end et architecte d'interfaces. Découvrez mes projets et mon expertise en développement web.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <LoadingProvider>
        <body>
          <Navbar />
          <PlexusBackground />
          {children}
          <OverlayHud />
          <Footer />
        </body>
      </LoadingProvider>
    </html>
  );
}
