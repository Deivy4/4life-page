"use client";
import { createContext, useContext, useState } from "react";
import afiliadosColombia from "../app/data/afiliados.json";
const AfiliadosContext = createContext();

export function AfiliadosProvider({ children }) {
  const [currentAfiliado, setCurrentAfiliado] = useState(null);

  const GenerarAfiliado = () => {
    return afiliadosColombia[
      Math.floor(Math.random() * afiliadosColombia.length)
    ];
  };
  const GetAfiliado = () => {
    if (currentAfiliado == null) {
      const afiliado = GenerarAfiliado();
      setCurrentAfiliado(afiliado);
      return afiliado;
    }

    return currentAfiliado;
  };
  return (
    <AfiliadosContext.Provider
      value={{ currentAfiliado, setCurrentAfiliado, GetAfiliado }}
    >
      {children}
    </AfiliadosContext.Provider>
  );
}
export const useAfiliados = () => useContext(AfiliadosContext);
