"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePacks } from "@/context/PackContext";
import { supabase } from "@/lib/supabase";


export default function CreateTexturePack() {


  const router = useRouter();

  const { addPack } = usePacks();



  const [name, setName] = useState("");
  const [creator, setCreator] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("PvP");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [zipFile, setZipFile] = useState<File | null>(null);

  const [uploading, setUploading] = useState(false);




  async function uploadFile(file: File, folder:string){


    const safeName = file.name
      .normalize("NFKD")
      .replace(/[^a-zA-Z0-9.-]/g, "-");


    const fileName =
      `${Date.now()}-${safeName}`;



    const path =
      `${folder}/${fileName}`;



    const upload =
      await supabase.storage
      .from("texturepacks")
      .upload(
        path,
        file,
        {
          cacheControl:"3600",
          upsert:false
        }
      );



    if(upload.error){

      throw new Error(
        upload.error.message
      );

    }



    const url =
      supabase.storage
      .from("texturepacks")
      .getPublicUrl(path);



    return url.data.publicUrl;


  }






  async function createPack(){



    if(
      !name ||
      !creator ||
      !price ||
      !description
    ){

      alert("Bitte alle Felder ausfüllen");
      return;

    }



    if(!zipFile){

      alert("Bitte Texture Pack ZIP auswählen");
      return;

    }





    try{


      setUploading(true);



      const zipUrl =
        await uploadFile(
          zipFile,
          "downloads"
        );





      addPack({

        id: Date.now().toString(),

        name,

        creator,

        price,

        category,

        description,

        image,

        download:zipUrl

      });





      alert("✅ Texture Pack erstellt!");

      router.push("/admin/packs");




    }catch(error){


      console.error(error);

      alert("❌ Upload fehlgeschlagen");


    }finally{


      setUploading(false);


    }


  }





  const inputClass = `
    w-full
    p-4
    rounded-2xl
    bg-black/60
    border
    border-white/10
    text-white
    outline-none
    focus:border-cyan-400
    transition
  `;





  return (

    <main className="
      min-h-screen
      bg-gradient-to-br
      from-black
      via-zinc-950
      to-cyan-950
      text-white
      pt-28
      px-6
    ">



      <div className="max-w-4xl mx-auto">



        <button

          onClick={() => router.push("/admin")}

          className="
            mb-6
            text-gray-400
            hover:text-white
          "

        >

          ← Zurück zum Admin Panel

        </button>






        <div className="
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-10
          backdrop-blur-xl
        ">



          <h1 className="
            text-5xl
            font-black
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
            bg-clip-text
            text-transparent
          ">

            ✨ Create Texture Pack

          </h1>




          <p className="mt-3 text-gray-400">

            Erstelle ein neues Premium Minecraft Texture Pack

          </p>






          <div className="
            mt-10
            space-y-5
          ">




            <input

              placeholder="Texture Pack Name"

              value={name}

              onChange={(e)=>setName(e.target.value)}

              className={inputClass}

            />





            <input

              placeholder="Creator Name"

              value={creator}

              onChange={(e)=>setCreator(e.target.value)}

              className={inputClass}

            />





            <input

              placeholder="Preis (€)"

              value={price}

              onChange={(e)=>setPrice(e.target.value)}

              className={inputClass}

            />






            <select

              value={category}

              onChange={(e)=>setCategory(e.target.value)}

              className={inputClass}

            >

              <option>PvP</option>
              <option>Premium Qualität</option>
              <option>16x</option>
              <option>32x</option>
              <option>64x</option>
              <option>128x</option>
              <option>256x</option>

            </select>







            <textarea

              placeholder="Beschreibung"

              value={description}

              onChange={(e)=>setDescription(e.target.value)}

              className={`${inputClass} h-32`}

            />






            <div>


              <label className="text-gray-400">

                🖼 Bild URL (Imgur)

              </label>



              <input

                placeholder="https://i.imgur.com/deinbild.png"

                value={image}

                onChange={(e)=>setImage(e.target.value)}

                className={inputClass}

              />


            </div>







            <div>


              <label className="text-gray-400">

                📦 Texture Pack ZIP

              </label>



              <input

                type="file"

                accept=".zip"

                onChange={(e)=>
                  setZipFile(
                    e.target.files?.[0] ?? null
                  )
                }

                className="mt-3"

              />





              {zipFile && (

                <p className="
                  text-green-400
                  mt-3
                ">

                  ✅ {zipFile.name}

                </p>

              )}



            </div>




          </div>







          <button

            onClick={createPack}

            disabled={uploading}

            className="
              mt-10
              w-full
              py-5
              rounded-2xl
              bg-gradient-to-r
              from-cyan-400
              to-purple-500
              text-black
              font-black
              text-lg
              hover:scale-105
              transition
            "

          >


            {uploading
              ? "⏳ Upload läuft..."
              : "🚀 Texture Pack veröffentlichen"
            }



          </button>




        </div>


      </div>


    </main>

  );


}