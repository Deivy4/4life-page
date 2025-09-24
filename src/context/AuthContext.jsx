"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

/**
 * AuthProvider envuelve la app y mantiene el estado del usuario
 * @param {React.ReactNode} children
 * @param {Object|null} initialUser usuario inicial (opcional)
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Comprobar sesión al cargar la app
  useEffect((async) => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json().catch(() => null);
        setUser(data?.user || null);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Función de login
  const login = async (email, password) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      let data = null;
      try {
        data = await res.json();
      } catch {
        return "Error en la respuesta del servidor";
      }

      if (res.ok) {
        setUser(data.user);
        return true;
      } else {
        setUser(null);
        return data.error || "Error de login";
      }
    } catch (err) {
      console.error("Login error:", err);
      setUser(null);
      return "Error de conexión";
    }
  };

  // Función de logout
  const logout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para consumir el contexto
export const useAuth = () => useContext(AuthContext);
