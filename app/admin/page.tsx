"use client";

import Link from "next/link";
import { usePacks } from "@/context/PackContext";


export default function AdminDashboard() {


  const { packs } = usePacks();



  const stats = [

    {
      title: "Texture Packs",
      value: packs.length,
      icon: "💎"
    },

    {
      title: "Orders",
      value: "0",
      icon: "🛒"
    },

    {
      title: "Umsatz",
      value: "0.00€",
      icon: "💰"
    },

    {
      title: "Premium Status",
      value: "Aktiv",
      icon: "✨"
    }

  ];





  const buttons = [


    {
      title: "Texture Packs verwalten",
      description:
      "Bearbeiten, löschen und kontrolliere deine Packs",
      icon:"📦",
      link:"/admin/packs"
    },



    {
      title:"Create Texture Pack",
      description:
      "Erstelle ein neues Premium Minecraft Texture Pack",
      icon:"✨",
      link:"/admin/packs/create"
    }



  ];






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
        bg-white/10
        blur-[220px]
        rounded-full
      " />





      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
      ">





        <h1 className="
          text-6xl
          font-black
          bg-gradient-to-r
          from-white
          via-gray-300
          to-cyan-400
          bg-clip-text
          text-transparent
        ">
          ◈ Quartz Admin Panel
        </h1>



        <p className="
          mt-4
          text-gray-400
          text-lg
        ">
          Verwalte deinen Premium Texture Pack Marketplace.
        </p>







        {/* Stats */}


        <div className="
          mt-12
          grid
          md:grid-cols-4
          gap-6
        ">


        {stats.map((stat)=>(


          <div

            key={stat.title}

            className="
              bg-white/5
              border
              border-white/20
              rounded-3xl
              p-7
              backdrop-blur-xl
              hover:border-cyan-400
              transition
            "

          >


            <div className="
              text-5xl
            ">
              {stat.icon}
            </div>



            <p className="
              mt-5
              text-gray-400
            ">
              {stat.title}
            </p>



            <h2 className="
              mt-2
              text-3xl
              font-black
            ">
              {stat.value}
            </h2>



          </div>



        ))}


        </div>









        {/* Buttons */}



        <div className="
          mt-12
          grid
          md:grid-cols-2
          gap-8
        ">



        {buttons.map((button)=>(



          <Link

            href={button.link}

            key={button.title}

            className="
              group
              bg-white/5
              border
              border-white/20
              rounded-3xl
              p-10
              backdrop-blur-xl
              hover:border-cyan-400
              hover:scale-[1.03]
              transition
            "

          >



            <div className="
              text-6xl
            ">
              {button.icon}
            </div>




            <h2 className="
              mt-6
              text-3xl
              font-black
            ">
              {button.title}
            </h2>



            <p className="
              mt-3
              text-gray-400
            ">
              {button.description}
            </p>




            <div className="
              mt-8
              text-cyan-400
              font-bold
            ">
              Öffnen →
            </div>




          </Link>



        ))}



        </div>




      </div>



    </main>


  );

}