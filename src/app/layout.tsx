import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import { AppProviders } from "@/context/AppProviders";
import "./globals.css";

export const metadata = {
  title: {
    default: "Protección inmunitaria",
    template: "%s | Protección inmunitaria",
  },
  description:
    "Descubre productos 4Life para mejorar tu bienestar con Impacto Saludable.",
  openGraph: {
    title: "Protección inmunitaria",
    description:
      "Productos originales 4Life para fortalecer tu salud y energía.",
    url: "https://sientetebien4life.com/",
    siteName: "Protección inmunitaria",
    images: [
      {
        url: "https://sientetebien4life.com/images-icons/SB_4life_1200x630.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Impacto Saludable - Bienestar con 4Life",
    description:
      "Bienestar, energía y salud con productos originales de 4Life.",
    images: [
      "https://sientetebien4life.com/images-icons/SB_4life_1200x630.png",
    ],
  },
  icons: {
    icon: "/images-icons/logo.jpg",
  },
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
