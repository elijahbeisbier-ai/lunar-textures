"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";


export default function Cart() {


  const { cart, removeFromCart } = useCart();




  const total = cart.reduce(
    (sum: number, item: any) => {


      const price = Number(
        String(item.price)
          .replace("€", "")
          .replace("Euro", "")
          .replace(",", ".")
          .trim()
      );


      return sum + (isNaN(price) ? 0 : price);


    },
    0
  );





  return (

    <main className="
      min-h-screen
      bg-black
      text-white
      pt-32
      px-6
    ">


      <div className="
        max-w-5xl
        mx-auto
      ">


        <h1 className="
          text-5xl
          font-bold
        ">

          Dein Warenkorb

        </h1>






        {cart.length === 0 ? (


          <div className="
            mt-10
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-10
            text-center
          ">


            <p className="
              text-gray-400
              text-xl
            ">

              Dein Warenkorb ist leer.

            </p>




            <Link href="/marketplace">


              <button className="
                mt-6
                px-8
                py-3
                rounded-xl
                bg-gradient-to-r
                from-cyan-400
                to-purple-500
                text-black
                font-bold
                cursor-pointer
              ">

                Zum Marketplace

              </button>


            </Link>


          </div>



        ) : (



          <div className="mt-10">



            <div className="
              space-y-5
            ">


              {cart.map((item:any)=>(



                <div

                  key={item.cartId}

                  className="
                    bg-white/5
                    border
                    border-white/10
                    rounded-3xl
                    p-6
                    flex
                    justify-between
                    items-center
                  "

                >



                  <div>


                    <h2 className="
                      text-2xl
                      font-bold
                    ">

                      {item.name}

                    </h2>




                    <p className="
                      text-cyan-400
                      mt-2
                    ">

                      {item.price}

                    </p>



                  </div>






                  <button

                    onClick={() =>
                      removeFromCart(item.cartId)
                    }

                    className="
                      px-5
                      py-2
                      rounded-xl
                      bg-red-500
                      font-bold
                      hover:bg-red-400
                      cursor-pointer
                    "

                  >

                    Entfernen

                  </button>



                </div>


              ))}



            </div>







            <div className="
              mt-10
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-8
            ">



              <h2 className="
                text-3xl
                font-bold
              ">

                Gesamtpreis

              </h2>




              <p className="
                text-4xl
                text-cyan-400
                font-bold
                mt-3
              ">

                {total.toFixed(2)}€

              </p>







              <Link href="/checkout">


                <button className="
                  mt-6
                  w-full
                  py-4
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-400
                  to-purple-500
                  text-black
                  font-bold
                  hover:scale-105
                  transition
                  cursor-pointer
                ">

                  Zur Kasse

                </button>


              </Link>



            </div>



          </div>


        )}



      </div>


    </main>


  );

}