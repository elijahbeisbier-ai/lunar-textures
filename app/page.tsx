import Link from "next/link";

export default function Home() {
  return (
    <main className="
      relative
      min-h-screen
      bg-black
      text-white
      overflow-hidden
    ">

      {/* Quartz Glow */}

      <div className="
        absolute
        top-[-200px]
        left-1/2
        -translate-x-1/2
        w-[900px]
        h-[900px]
        bg-white/10
        blur-[200px]
        rounded-full
      "/>


      <div className="
        absolute
        right-0
        top-0
        w-[500px]
        h-[500px]
        bg-cyan-400/20
        blur-[180px]
        rounded-full
      "/>



      {/* Hero */}

      <section className="
        relative
        z-10
        pt-44
        px-6
        text-center
      ">


        <div className="
          inline-block
          px-5
          py-2
          rounded-full
          bg-white/10
          border
          border-white/20
          backdrop-blur-xl
          text-gray-300
        ">
          ◈ Premium Minecraft Marketplace
        </div>



        <h1 className="
          mt-8
          text-6xl
          md:text-8xl
          font-black
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
          max-w-3xl
          mx-auto
          text-xl
          text-gray-400
        ">
          Der Premium Minecraft Texture Pack Marketplace.
          Entdecke hochwertige HT1 - HT4 PvP Packs,
          schnelle Lieferung und einen sicheren Checkout.
        </p>



        <div className="
          mt-10
          flex
          justify-center
          gap-5
          flex-wrap
        ">


          <Link href="/marketplace">

            <button className="
              px-10
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
              💎 Marketplace
            </button>

          </Link>



          <Link href="/cart">

            <button className="
              px-10
              py-4
              rounded-2xl
              bg-white/10
              border
              border-white/20
              font-bold
              hover:bg-white/20
              transition
            ">
              🛒 Warenkorb
            </button>

          </Link>


        </div>


      </section>





      {/* Features */}

      <section className="
        relative
        z-10
        max-w-6xl
        mx-auto
        mt-32
        px-6
        grid
        md:grid-cols-3
        gap-8
      ">


      {[
        [
          "https://i.imgur.com/4NQqsoD.png",
          "100% Trusted Marketplace",
          "Ein sicherer Marketplace mit geprüften Packs und zuverlässigem Service."
        ],

        [
          "https://i.imgur.com/hvx529E.png",
          "HT1 - HT4 Packs",
          "Hochwertige PvP Texture Packs für Competitive Minecraft Spieler."
        ],

        [
          "https://i.imgur.com/pjWi8vZ.png",
          "User",
          "Genutzt von Spielern aus HugoSMP, WindSMP, DonutSMP und vielen weiteren Communities."
        ]

      ].map((item)=>(


        <div
          key={item[1]}
          className="
            bg-white/5
            border
            border-white/20
            rounded-3xl
            p-8
            backdrop-blur-xl
            hover:border-cyan-400
            hover:scale-105
            transition
          "
        >



          <div className="
            h-36
            flex
            items-center
          ">


            <img
              src={item[0]}
              alt={item[1]}
              className="
                h-32
                w-32
                object-contain
              "
            />


          </div>





          <h2 className="
            mt-5
            text-2xl
            font-bold
          ">
            {item[1]}
          </h2>




          <p className="
            mt-3
            text-gray-400
          ">
            {item[2]}
          </p>



        </div>


      ))}


      </section>







      {/* Kategorien */}

      <section className="
        relative
        z-10
        max-w-6xl
        mx-auto
        mt-32
        px-6
        pb-20
      ">


        <h2 className="
          text-4xl
          font-black
          text-center
        ">
          Kategorien
        </h2>




        <div className="
          mt-10
          grid
          md:grid-cols-4
          gap-5
        ">


        {[
          "⚔ HT1 PvP",
          "🏆 HT2 PvP",
          "🥇 HT3 PvP",
          "🥈 HT4 PvP",
          "✨ Premium Qualität",
          "🚀 FPS Boost",
          "💎 16x - 256x",
          "🔥 Competitive"
        ].map((item)=>(


          <Link
            href="/marketplace"
            key={item}
          >

            <div className="
              bg-white/5
              border
              border-white/20
              rounded-2xl
              p-6
              text-center
              backdrop-blur-xl
              hover:border-cyan-400
              hover:scale-105
              transition
            ">

              {item}

            </div>

          </Link>


        ))}


        </div>


      </section>


    </main>
  );
}