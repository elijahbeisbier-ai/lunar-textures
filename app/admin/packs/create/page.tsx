"use client";

import { useState } from "react";


export default function CreatePack() {


  const [name, setName] = useState("");
  const [creator, setCreator] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [download, setDownload] = useState("");




  function createPack() {


    const pack = {

      id: Date.now(),

      name,

      creator,

      price,

      image,

      download,

    };




    const old =

      JSON.parse(

        localStorage.getItem("packs") || "[]"

      );




    localStorage.setItem(

      "packs",

      JSON.stringify([

        ...old,

        pack

      ])

    );




    alert("✅ Texture Pack erstellt!");



    setName("");

    setCreator("");

    setPrice("");

    setImage("");

    setDownload("");



  }





  return (

    <main className="
      min-h-screen
      bg-black
      text-white
      pt-32
      px-6
    ">


      <div className="
        max-w-3xl
        mx-auto
      ">


        <h1 className="
          text-5xl
          font-black
          mb-10
        ">
          🎨 Texture Pack erstellen
        </h1>




        <div className="
          space-y-5
        ">




          <input

            placeholder="Name"

            value={name}

            onChange={(e)=>setName(e.target.value)}

            className="
              w-full
              p-4
              rounded-xl
              bg-white/10
              border
              border-white/20
            "

          />





          <input

            placeholder="Creator"

            value={creator}

            onChange={(e)=>setCreator(e.target.value)}

            className="
              w-full
              p-4
              rounded-xl
              bg-white/10
              border
              border-white/20
            "

          />





          <input

            placeholder="Preis (€)"

            value={price}

            onChange={(e)=>setPrice(e.target.value)}

            className="
              w-full
              p-4
              rounded-xl
              bg-white/10
              border
              border-white/20
            "

          />





          <input

            placeholder="Bild URL"

            value={image}

            onChange={(e)=>setImage(e.target.value)}

            className="
              w-full
              p-4
              rounded-xl
              bg-white/10
              border
              border-white/20
            "

          />





          <input

            placeholder="Download URL"

            value={download}

            onChange={(e)=>setDownload(e.target.value)}

            className="
              w-full
              p-4
              rounded-xl
              bg-white/10
              border
              border-white/20
            "

          />





          <button

            onClick={createPack}

            className="
              w-full
              p-4
              rounded-xl
              bg-gradient-to-r
              from-cyan-400
              to-purple-500
              text-black
              font-black
              text-xl
            "

          >

            Erstellen

          </button>




        </div>



      </div>



    </main>

  );

}