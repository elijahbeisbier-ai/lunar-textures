import Link from "next/link";


export default function Home() {


  const features = [
    [
      "https://i.imgur.com/4NQqsoD.png",
      "100% Trusted Marketplace",
      "Ein sicherer Marketplace mit geprüften Packs.",
      "🔒"
    ],

    [
      "https://i.imgur.com/hvx529E.png",
      "HT1 - HT4 Packs",
      "PvP Texture Packs für Competitive Minecraft.",
      "⚔️"
    ],

    [
      "https://i.imgur.com/pjWi8vZ.png",
      "User",
      "Genutzt von Minecraft Communities.",
      "🌎"
    ]
  ];



  return (

    <main className="
      relative
      min-h-screen
      bg-black
      text-white
      overflow-hidden
    ">


      {/* Background */}

      <div className="
        absolute
        -top-96
        left-1/2
        -translate-x-1/2
        w-[1200px]
        h-[1200px]
        bg-cyan-400/20
        blur-[250px]
        rounded-full
      "/>



      <div className="
        absolute
        right-[-300px]
        top-20
        w-[700px]
        h-[700px]
        bg-purple-500/20
        blur-[250px]
        rounded-full
      "/>




      {/* HERO */}


      <section className="
        relative
        z-10
        pt-48
        px-6
        text-center
      ">


        <div className="
          inline-flex
          items-center
          gap-2
          px-6
          py-3
          rounded-full
          bg-white/10
          border
          border-white/20
          backdrop-blur-2xl
          text-gray-300
          shadow-xl
        ">

          ✦ Premium Minecraft Marketplace

        </div>





        <h1 className="
          mt-10
          text-7xl
          md:text-[120px]
          font-black
          tracking-tight
          bg-gradient-to-r
          from-white
          via-gray-300
          to-cyan-400
          bg-clip-text
          text-transparent
        ">

          Lunar Textures

        </h1>





        <p className="
          mt-8
          max-w-2xl
          mx-auto
          text-xl
          text-gray-400
        ">

          Der Premium Minecraft Texture Pack Marketplace.
          Entdecke hochwertige PvP Packs,
          schnelle Lieferung und einen sicheren Checkout.

        </p>





        <div className="
          mt-12
          flex
          justify-center
          gap-5
          flex-wrap
        ">



          <Link href="/marketplace">

            <button className="
              px-12
              py-5
              rounded-2xl
              bg-gradient-to-r
              from-cyan-400
              to-purple-500
              text-black
              font-black
              text-lg
              shadow-[0_0_60px_rgba(34,211,238,0.35)]
              hover:scale-110
              transition
            ">

              💎 Marketplace

            </button>

          </Link>





          <Link href="/cart">

            <button className="
              px-12
              py-5
              rounded-2xl
              bg-white/10
              border
              border-white/20
              backdrop-blur-xl
              font-bold
              text-lg
              hover:bg-white/20
              transition
            ">

              🛒 Warenkorb

            </button>

          </Link>


        </div>



      </section>







      {/* FEATURES */}



      <section className="
        relative
        z-10
        max-w-7xl
        mx-auto
        mt-40
        px-6
        grid
        md:grid-cols-3
        gap-10
      ">



      {features.map((item)=>(


        <div
          key={item[1]}
          className="
            group
            relative
            rounded-[40px]
            p-[1px]
            bg-gradient-to-br
            from-white/30
            via-white/5
            to-cyan-400/50
            hover:-translate-y-4
            transition-all
            duration-500
          "
        >



          <div className="
            relative
            h-full
            rounded-[40px]
            bg-black/70
            backdrop-blur-3xl
            p-10
            overflow-hidden
          ">



          <div className="
            absolute
            -right-20
            -top-20
            w-60
            h-60
            bg-cyan-400/20
            blur-[80px]
            rounded-full
            group-hover:bg-cyan-400/40
            transition
          "/>




          <div className="
            relative
            z-10
          ">


            <div className="
              flex
              justify-between
              items-center
            ">


              <span className="
                text-4xl
              ">
                {item[3]}
              </span>



              <span className="
                px-4
                py-1
                rounded-full
                bg-white/10
                border
                border-white/20
                text-xs
                text-gray-300
              ">
                PREMIUM
              </span>


            </div>





            <div className="
              mt-10
              w-32
              h-32
              rounded-[35px]
              bg-white/10
              border
              border-white/20
              flex
              items-center
              justify-center
              group-hover:scale-110
              transition
            ">


              <img
                src={item[0]}
                alt={item[1]}
                className="
                  w-24
                  h-24
                  object-contain
                "
              />


            </div>





            <h2 className="
              mt-8
              text-3xl
              font-black
              bg-gradient-to-r
              from-white
              to-cyan-400
              bg-clip-text
              text-transparent
            ">

              {item[1]}

            </h2>





            <p className="
              mt-4
              text-gray-400
              text-lg
            ">

              {item[2]}

            </p>



          </div>


          </div>



        </div>


      ))}



      </section>



    </main>

  );

}