"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function ProfilePage() {

  const router = useRouter();

  const [username, setUsername] = useState("");
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {

    const savedUsername =
      localStorage.getItem("username") || "";

    setUsername(savedUsername);

    setLoaded(true);

  }, []);



  function saveProfile() {

    localStorage.setItem(
      "username",
      username
    );


    alert("✅ Profil gespeichert!");

    router.push("/");

  }



  if (!loaded) {
    return null;
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
          👤 Profil
        </h1>


        <p className="
          mt-3
          text-gray-400
        ">
          Dein Creator Name für Texture Packs.
        </p>



        <input

          value={username}

          onChange={(e)=>setUsername(e.target.value)}

          placeholder="Dein Name"

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



        <button

          onClick={saveProfile}

          className="
            mt-6
            w-full
            py-4
            rounded-xl
            bg-gradient-to-r
            from-white
            to-cyan-400
            text-black
            font-black
          "

        >
          Profil speichern
        </button>


      </div>


    </main>

  );

}