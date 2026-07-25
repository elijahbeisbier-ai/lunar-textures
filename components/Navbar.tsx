"use client";

import Link from "next/link";
import { useState } from "react";


export default function Navbar() {


  const [open, setOpen] = useState(false);



  return (

    <nav className="
      fixed
      top-5
      left-1/2
      -translate-x-1/2
      z-50
      w-[95%]
      max-w-7xl
      bg-white/5
      border
      border-white/20
      backdrop-blur-2xl
      rounded-3xl
      shadow-[0_0_50px_rgba(255,255,255,0.08)]
      px-6
      py-4
    ">


      <div className="
        flex
        items-center
        justify-between
      ">


        {/* Logo */}

        <Link href="/">

          <div className="
            text-2xl
            font-black
            bg-gradient-to-r
            from-white
            via-gray-300
            to-cyan-400
            bg-clip-text
            text-transparent
          ">
            ◈ Lunar Textures
          </div>

        </Link>





        {/* Desktop Menü */}

        <div className="
          hidden
          md:flex
          items-center
          gap-8
          text-gray-300
        ">


          <Link
            href="/"
            className="
              hover:text-white
              transition
            "
          >
            Home
          </Link>



          <Link
            href="/marketplace"
            className="
              hover:text-cyan-400
              transition
            "
          >
            Marketplace
          </Link>



          <Link
            href="/cart"
            className="
              hover:text-white
              transition
            "
          >
            Warenkorb
          </Link>




          <Link
            href="/login"
            className="
              px-5
              py-2
              rounded-xl
              bg-white/10
              border
              border-white/20
              hover:border-cyan-400
              transition
            "
          >
            🔐 Login
          </Link>





          <Link
            href="/admin"
            className="
              px-5
              py-2
              rounded-xl
              bg-gradient-to-r
              from-cyan-400
              to-white
              text-black
              font-bold
              hover:scale-105
              transition
            "
          >
            ⚙ Admin
          </Link>


        </div>





        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            text-2xl
          "
        >
          ☰
        </button>


      </div>






      {/* Mobile Menü */}

      {open && (

        <div className="
          mt-5
          flex
          flex-col
          gap-4
          border-t
          border-white/10
          pt-5
        ">


          <Link href="/">
            Home
          </Link>


          <Link href="/marketplace">
            Marketplace
          </Link>


          <Link href="/cart">
            Warenkorb
          </Link>



          <Link href="/login">
            🔐 Login
          </Link>


          <Link href="/admin">
            ⚙ Admin
          </Link>


        </div>

      )}



    </nav>

  );

}