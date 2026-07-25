"use client";

import { useParams, useRouter } from "next/navigation";
import { usePacks } from "@/context/PackContext";
import Link from "next/link";



export default function ProductPage(){


  const params = useParams();

  const router = useRouter();

  const id = params.id as string;


  const {
    getPack
  } = usePacks();




  const pack = getPack(id);





  if(!pack){

    return (

      <main className="
        min-h-screen
        bg-black
        text-white
        pt-40
        text-center
      ">


        <h1 className="
          text-4xl
          font-black
        ">
          Texture Pack nicht gefunden
        </h1>


        <button

          onClick={()=>router.push("/marketplace")}

          className="
            mt-8
            px-8
            py-4
            rounded-xl
            bg-white
            text-black
            font-bold
          "

        >

          Zurück

        </button>


      </main>

    )

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



      {/* Quartz Glow */}

      <div className="

        absolute

        top-0

        left-1/2

        -translate-x-1/2

        w-[900px]

        h-[900px]

        bg-cyan-400/10

        blur-[200px]

        rounded-full

      "/>








      <div className="

        relative

        z-10

        max-w-6xl

        mx-auto

        grid

        md:grid-cols-2

        gap-10

      ">





        {/* Bild */}


        <div className="

          bg-white/5

          border

          border-white/20

          rounded-3xl

          p-6

          backdrop-blur-xl

        ">


          {pack.image && (

            <img

              src={pack.image}

              alt={pack.name}

              className="

                w-full

                rounded-2xl

              "

            />

          )}


        </div>








        {/* Informationen */}


        <div className="

          bg-white/5

          border

          border-white/20

          rounded-3xl

          p-10

          backdrop-blur-xl

        ">




          <div className="

            inline-block

            px-4

            py-2

            rounded-full

            bg-white/10

            border

            border-white/20

            text-cyan-400

          ">

            💎 Premium Pack

          </div>







          <h1 className="

            mt-6

            text-5xl

            font-black

            bg-gradient-to-r

            from-white

            to-cyan-400

            bg-clip-text

            text-transparent

          ">

            {pack.name}

          </h1>







          <p className="

            mt-4

            text-gray-400

          ">

            Erstellt von:

            <span className="text-white">

              {" "}{pack.creator}

            </span>

          </p>







          <div className="

            mt-6

            text-4xl

            font-black

            text-cyan-400

          ">

            {pack.price}€

          </div>







          <p className="

            mt-8

            text-gray-300

            leading-relaxed

          ">

            {pack.description}

          </p>







          <div className="

            mt-8

            flex

            gap-4

          ">




            <button

              className="

                flex-1

                py-4

                rounded-2xl

                bg-gradient-to-r

                from-white

                to-cyan-400

                text-black

                font-black

                hover:scale-105

                transition

              "

            >

              🛒 Kaufen

            </button>





            <Link href="/marketplace">

              <button

                className="

                  px-6

                  py-4

                  rounded-2xl

                  bg-white/10

                  border

                  border-white/20

                "

              >

                Zurück

              </button>


            </Link>




          </div>







        </div>





      </div>




    </main>

  );

}