"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function AdminLogin() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function login() {

    if (
      email === "Elijah.noderer@gmail.com" &&
      password === "Elijah61170"
    ) {

      localStorage.setItem("admin", "true");

      alert("✅ Admin Login erfolgreich!");

      router.push("/admin");

    } else {

      alert("❌ Falsche Email oder Passwort!");

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
        max-w-md
        w-full
        bg-white/5
        border
        border-white/20
        rounded-3xl
        p-8
        backdrop-blur-xl
      ">


        <h1 className="
          text-4xl
          font-black
        ">
          🔐 Admin Login
        </h1>


        <p className="
          mt-3
          text-gray-400
        ">
          Nur für Marketplace Administratoren.
        </p>



        <input

          placeholder="Email"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

          className="
            mt-8
            w-full
            p-4
            rounded-xl
            bg-white/10
            border
            border-white/20
          "

        />



        <input

          placeholder="Passwort"

          type="password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

          className="
            mt-4
            w-full
            p-4
            rounded-xl
            bg-white/10
            border
            border-white/20
          "

        />



        <button

          onClick={login}

          className="
            mt-6
            w-full
            py-4
            rounded-xl
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
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