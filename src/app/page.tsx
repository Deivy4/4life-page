import { Lato } from "next/font/google";
import Home from "@/components/Home";

// Configuración de la fuente
const lato = Lato({
  subsets: ["latin"], // importante para caracteres latinos
  weight: ["400", "700"], // puedes agregar más variantes si quieres
});

export default function PageInit() {
  return (
    <main className={lato.className}>
      <Home />
    </main>
  );
}
