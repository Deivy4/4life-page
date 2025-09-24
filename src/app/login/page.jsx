"use client";

import Image from "next/image";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
export default function Login() {
  const [email1, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  const router = useRouter();
  const { login } = useAuth();
  const handleLogin = async () => {
    if (!email1 || !password) {
      setErrorLogin(true);
      setTimeout(() => setErrorLogin(false), 3000);
      return;
    }

    const result = await login(email1, password);
    if (result !== true) {
      setErrorLogin(true);
      setTimeout(() => setErrorLogin(false), 3000);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="mt-12 w-full h-dvh flex items-center justify-center">
      <div className="container-login container flex flex-col justify-center items-center">
        <div className="bg-slate-200 p-12 flex flex-col gap-8 rounded shadow shadow-black">
          <div className="flex">
            <div className="flex flex-col gap-5 sm:w-1/2 items-center">
              <div className="flex flex-col items-center">
                <FaUserCircle className="w-24 h-24 text-blue-800" />
                <h2 className="text-3xl">Log In</h2>
              </div>
              <input
                onChange={(e) => setEmail(e.target.value.trim())}
                type="text"
                placeholder="Email"
                className="w-full bg-transparent placeholder:text-black text-black text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              />
              <input
                onChange={(e) => setPassword(e.target.value.trim())}
                type="password"
                placeholder="Contraseña"
                className="w-full bg-transparent placeholder:text-black text-black text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              />
              {errorLogin && <p className="text-red-700">Login incorrecto</p>}
              <button
                onClick={handleLogin}
                className="bg-blue-800 text-white hover:bg-blue-700 mx-6 px-2 py-1 rounded w-1/2"
              >
                Log In
              </button>
            </div>
            <Image
              width={500}
              height={200}
              className="w-1/2 hidden sm:block"
              src="https://res.cloudinary.com/dt4pkrj5j/image/upload/v1738765036/photos/Transfer_Factor_Plus_fhjwde.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
