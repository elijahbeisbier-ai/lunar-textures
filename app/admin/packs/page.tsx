"use client";

import Link from "next/link";
import { usePacks } from "@/context/PackContext";


export default function ManagePacks() {


  const { packs, deletePack } = usePacks();



  function removePack(id:string){


    const confirmDelete = confirm(
      "Möchtest du dieses Texture Pack wirklich löschen?"
    );


    if(!confirmDelete) return;


    deletePack(id);


  }





  return (

    <main className="
      min-h-screen
      bg-black
      text-white
      pt-36
      px-6
      relative
      overflow-hidden
    ">


      <div className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[900px]
        h-[900px]
        bg-cyan-400/10
        blur-[220px]
        rounded-full
      "/>





      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
      ">



        <Link href="/admin">

          <button className="
            mb-8
            text-gray-400
            hover:text-white
          ">

            ← Zurück zum Admin Panel

          </button>

        </Link>





        <div className="
          flex
          justify-between
          items-center
          gap-5
        ">



          <div>

            <h1 className="
              text-5xl
              font-black
              bg-gradient-to-r
              from-white
              to-cyan-400
              bg-clip-text
              text-transparent
            ">

              💎 Texture Packs verwalten

            </h1>


            <p className="
              mt-3
              text-gray-400
            ">

              Bearbeite und verwalte deine Marketplace Packs.

            </p>


          </div>





          <Link href="/admin/packs/create">

            <button className="
              px-6
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-white
              to-cyan-400
              text-black
              font-black
              hover:scale-105
              transition
            ">

              ✨ Neues Pack

            </button>


          </Link>



        </div>







        {packs.length === 0 ? (


          <div className="
            mt-16
            bg-white/5
            border
            border-white/20
            rounded-3xl
            p-10
            text-center
          ">


            <h2 className="
              text-3xl
              font-bold
            ">

              Keine Texture Packs

            </h2>


            <p className="
              mt-3
              text-gray-400
            ">

              Erstelle dein erstes Premium Pack.

            </p>


          </div>



        ) : (



          <div className="
            mt-12
            grid
            md:grid-cols-3
            gap-8
          ">



            {packs.map((pack:any)=>(


              <div

                key={pack.id}

                className="
                  bg-white/5
                  border
                  border-white/20
                  rounded-3xl
                  p-6
                  backdrop-blur-xl
                "

              >




                {pack.image && (

                  <img

                    src={pack.image}

                    alt={pack.name}

                    className="
                      h-48
                      w-full
                      object-cover
                      rounded-2xl
                    "

                  />

                )}






                <h2 className="
                  mt-5
                  text-2xl
                  font-black
                ">

                  {pack.name}

                </h2>




                <p className="
                  text-gray-400
                  mt-2
                ">

                  Creator: {pack.profile?.username || pack.creator || "Unbekannt"}

                </p>



                <p className="
                  text-cyan-400
                  font-bold
                  mt-3
                ">

                  {pack.price}€

                </p>







                <div className="
                  mt-6
                  flex
                  gap-3
                ">



                  <Link

                    href={`/admin/packs/edit/${pack.id}`}

                    className="
                      flex-1
                      text-center
                      py-3
                      rounded-xl
                      bg-white/10
                      border
                      border-white/20
                      hover:border-cyan-400
                    "

                  >

                    ✏ Bearbeiten

                  </Link>





                  <button

                    onClick={() => removePack(pack.id)}

                    className="
                      flex-1
                      py-3
                      rounded-xl
                      bg-red-500/20
                      border
                      border-red-500/40
                      text-red-400
                    "

                  >

                    🗑 Löschen

                  </button>



                </div>





              </div>


            ))}



          </div>



        )}




      </div>



    </main>

  );

}