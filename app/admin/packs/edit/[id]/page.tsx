"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePacks } from "@/context/PackContext";



export default function EditPack(){


  const router = useRouter();

  const params = useParams();

  const id = params.id as string;



  const {
    getPack,
    updatePack
  } = usePacks();




  const [name,setName] = useState("");
  const [creator,setCreator] = useState("");
  const [price,setPrice] = useState("");
  const [category,setCategory] = useState("");
  const [description,setDescription] = useState("");





  useEffect(()=>{


    const pack = getPack(id);



    if(pack){


      setName(pack.name);
      setCreator(pack.creator);
      setPrice(pack.price);
      setCategory(pack.category);
      setDescription(pack.description);


    }



  },[id]);








  function save(){



    updatePack(

      id,

      {

        name,

        creator,

        price,

        category,

        description

      }

    );



    alert("✅ Texture Pack aktualisiert!");



    router.push("/admin/packs");



  }







  const inputClass = `

    w-full
    p-4
    rounded-2xl
    bg-black/60
    border
    border-white/20
    text-white
    outline-none
    focus:border-cyan-400

  `;







  return (

    <main className="

      min-h-screen

      bg-black

      text-white

      pt-36

      px-6

    ">



      <div className="

        max-w-3xl

        mx-auto

        bg-white/5

        border

        border-white/20

        rounded-3xl

        p-10

        backdrop-blur-xl

      ">




        <button

          onClick={()=>router.back()}

          className="

            text-gray-400

            mb-6

          "

        >

          ← Zurück

        </button>






        <h1 className="

          text-5xl

          font-black

          bg-gradient-to-r

          from-white

          to-cyan-400

          bg-clip-text

          text-transparent

        ">

          ✏ Texture Pack bearbeiten

        </h1>







        <div className="

          mt-10

          space-y-5

        ">




          <input

            value={name}

            onChange={(e)=>setName(e.target.value)}

            placeholder="Texture Pack Name"

            className={inputClass}

          />





          <input

            value={creator}

            onChange={(e)=>setCreator(e.target.value)}

            placeholder="Creator"

            className={inputClass}

          />





          <input

            value={price}

            onChange={(e)=>setPrice(e.target.value)}

            placeholder="Preis"

            className={inputClass}

          />







          <select

            value={category}

            onChange={(e)=>setCategory(e.target.value)}

            className={inputClass}

          >

            <option>PvP</option>

            <option>HT1</option>

            <option>HT2</option>

            <option>HT3</option>

            <option>HT4</option>

            <option>Premium</option>

          </select>








          <textarea

            value={description}

            onChange={(e)=>setDescription(e.target.value)}

            placeholder="Beschreibung"

            className={`

              ${inputClass}

              h-40

            `}

          />






        </div>







        <button

          onClick={save}

          className="

            mt-10

            w-full

            py-5

            rounded-2xl

            bg-gradient-to-r

            from-white

            to-cyan-400

            text-black

            font-black

            text-lg

            hover:scale-105

            transition

          "

        >

          💎 Änderungen speichern

        </button>






      </div>



    </main>

  );

}