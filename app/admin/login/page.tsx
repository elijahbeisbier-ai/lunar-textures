"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function AdminLogin() {


  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");



  function login(){


    if(
      email === "elijah.noderer@gmail.com" &&
      password === "Admin7777"
    ){

      localStorage.setItem(
        "admin",
        "true"
      );


      router.push("/admin");


    } else {

      alert("❌ Falsche Admin Daten");

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
      ">


        <h1 className="
          text-4xl
          font-black
        ">
          🔐 Admin Login
        </h1>



        <input
          placeholder="Admin Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="
            mt-8
            w-full
            p-4
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
            mt-4
            w-full
            p-4
            rounded-xl
            bg-white/10
          "
        />



        <button

          onClick={login}

          className="
            mt-6
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