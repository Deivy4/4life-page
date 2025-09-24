import type { Metadata } from "next";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import { AppProviders } from "@/context/AppProviders";
import "./globals.css";

export const metadata: Metadata = {
  title: "4Life protección inmunitaria",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <AppProviders>
          <TopBar />
          {children}
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
