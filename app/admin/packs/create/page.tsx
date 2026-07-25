"use client";

import { useState } from "react";


export default function CreatePack() {


  const [name, setName] = useState("");
  const [creator, setCreator] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [download, setDownload] = useState("");



  function handleFile(
    e: React.ChangeEvent<HTMLInputElement>,
    type: "image" | "download"
  ) {

    const file = e.target.files?.[0];

    if (!file) return;


    const reader = new FileReader();


    reader.onload = () => {

      if (type === "image") {

        setImage(reader.result as string);

      } else {

        setDownload(reader.result as string);

      }

    };


    reader.readAsDataURL(file);

  }





  function createPack() {


    const pack = {

      id: Date.now(),

      name,

      creator,

      price,

      image,

      download,

    };



    const old = JSON.parse(
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




        <div className="space-y-5">



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





          <div className="
            bg-white/10
            border
            border-white/20
            rounded-xl
            p-4
          ">

            <p className="mb-3 text-gray-400">
              🖼️ Bild auswählen
            </p>


            <input
              type="file"
              accept="image/*"
              onChange={(e)=>handleFile(e,"image")}
              className="w-full"
            />


            {image && (

              <img
                src={image}
                className="
                  mt-4
                  h-32
                  rounded-xl
                "
              />

            )}

          </div>





          <div className="
            bg-white/10
            border
            border-white/20
            rounded-xl
            p-4
          ">

            <p className="mb-3 text-gray-400">
              📦 Texture Pack ZIP auswählen
            </p>


            <input
              type="file"
              accept=".zip"
              onChange={(e)=>handleFile(e,"download")}
              className="w-full"
            />


            {download && (

              <p className="
                mt-3
                text-green-400
              ">
                ✅ Datei ausgewählt
              </p>

            )}

          </div>






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