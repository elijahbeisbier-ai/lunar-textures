"use client";

import { usePacks } from "@/context/PackContext";
import { useCart } from "@/context/CartContext";


export default function Marketplace() {


  const { packs } = usePacks();

  const { addToCart } = useCart();




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





      <section className="
        relative
        z-10
        max-w-7xl
        mx-auto
      ">



        <h1 className="
          text-6xl
          font-black
          text-center
          bg-gradient-to-r
          from-white
          via-gray-300
          to-cyan-400
          bg-clip-text
          text-transparent
        ">
          💎 Quartz Marketplace
        </h1>




        <p className="
          mt-5
          text-center
          text-gray-400
          text-lg
        ">
          Premium Minecraft Texture Packs für Competitive Spieler.
        </p>







        {packs.length === 0 ? (


          <div className="
            mt-20
            text-center
            bg-white/5
            border
            border-white/20
            rounded-3xl
            p-10
          ">

            <h2 className="
              text-3xl
              font-bold
            ">
              Noch keine Packs verfügbar
            </h2>


            <p className="
              mt-3
              text-gray-400
            ">
              Neue Premium Packs werden bald hinzugefügt.
            </p>


          </div>



        ) : (



        <div className="
          mt-14
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
              hover:border-cyan-400
              hover:scale-105
              transition
            "

          >





            {pack.image && (

              <img

                src={pack.image}

                alt={pack.name}

                className="
                  w-full
                  h-56
                  object-cover
                  rounded-2xl
                "

              />

            )}







            <div className="
              mt-5
              flex
              justify-between
              items-center
            ">


              <span className="
                px-4
                py-1
                rounded-full
                bg-white/10
                border
                border-white/20
                text-sm
                text-gray-300
              ">
                {pack.category}
              </span>



              <span className="
                text-cyan-400
                font-bold
              ">
                💎 Premium
              </span>


            </div>








            <h2 className="
              mt-5
              text-2xl
              font-black
            ">
              {pack.name}
            </h2>






            <p className="
              mt-2
              text-gray-400
            ">
              von {pack.creator}
            </p>







            <p className="
              mt-4
              text-gray-300
            ">
              {pack.description}
            </p>







            <div className="
              mt-6
            ">


              <div className="
                text-3xl
                font-black
                mb-4
              ">
                {pack.price}€
              </div>







              <button

                onClick={() => addToCart(pack)}

                className="
                  w-full
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-400
                  to-purple-500
                  text-black
                  font-black
                  hover:scale-105
                  transition
                  cursor-pointer
                "

              >

                🛒 In den Warenkorb

              </button>



            </div>







          </div>



        ))}



        </div>



        )}



      </section>


    </main>

  );

}