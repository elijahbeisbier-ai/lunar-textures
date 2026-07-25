"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  function login() {

    if (
      email === "elijah.beisbier@gmail.com" &&
      password === "admin123"
    ) {

      localStorage.setItem("isAdmin", "true");
      localStorage.setItem("username", "Elijah");

      alert("✅ Erfolgreich eingeloggt!");

      router.push("/admin");

    } else {

      alert("❌ Falsche Login-Daten!");

    }

  }



  return (

    <main className="
      min-h-screen
      bg-black
      text-white
      flex
      items-center
      justify-center
      px-6
    ">

      <div className="
        w-full
        max-w-md
        bg-white/5
        border
        border-white/20
        rounded-3xl
        p-8
      ">

        <h1 className="
          text-4xl
          font-black
          mb-8
        ">
          🔐 Login
        </h1>


        <input
          placeholder="E-Mail"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="
            w-full
            p-4
            mb-4
            rounded-xl
            bg-white/10
          "
        />


        <input
          placeholder="Passwort"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="
            w-full
            p-4
            mb-6
            rounded-xl
            bg-white/10
          "
        />


        <button
          onClick={login}
          className="
            w-full
            p-4
            rounded-xl
            bg-cyan-400
            text-black
            font-black
          "
        >
          Einloggen
        </button>


      </div>

    </main>

  );

}