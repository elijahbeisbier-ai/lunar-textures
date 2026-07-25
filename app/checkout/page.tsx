"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Checkout(){


  const router = useRouter();


  const {
    cart,
    createOrder
  } = useCart();



  const [pin,setPin] = useState("");






  const total = cart.reduce(
    (sum:number,item:any)=>{


      const price = parseFloat(
        String(item.price)
          .replace("€","")
          .replace("$","")
          .replace("Euro","")
          .replace(",",".")
          .trim()
      );


      return sum + (
        isNaN(price)
        ? 0
        : price
      );


    },
    0
  );








  function finishOrder(){



    if(cart.length === 0){

      alert(
        "❌ Dein Warenkorb ist leer"
      );

      return;

    }





    const correctPin =
      localStorage.getItem("paymentPin");





    if(!correctPin){


      alert(
        "❌ Kein Zahlungs PIN gesetzt"
      );


      return;

    }






    if(pin !== correctPin){


      alert(
        "❌ Falscher PIN"
      );


      return;

    }







    const order =
      createOrder();







    if(order){


      alert(
        "✅ Zahlung erfolgreich! Bestellung erstellt."
      );


      router.push("/orders");


    }



  }







  return (

    <main className="
      min-h-screen
      bg-black
      text-white
      pt-32
      px-6
    ">


      <div className="
        max-w-4xl
        mx-auto
      ">




        <h1 className="
          text-5xl
          font-black
        ">

          💳 Lunar Checkout

        </h1>






        <div className="
          mt-10
          bg-white/5
          border
          border-white/20
          rounded-3xl
          p-8
        ">




          <h2 className="
            text-3xl
            font-bold
          ">

            Deine Produkte

          </h2>






          <div className="
            mt-6
            space-y-4
          ">


          {cart.map((item:any)=>(


            <div

              key={item.cartId}

              className="
                bg-black/50
                rounded-xl
                p-5
                flex
                justify-between
              "

            >


              <span className="
                font-bold
              ">

                {item.name}

              </span>




              <span className="
                text-cyan-400
                font-bold
              ">

                {item.price}€

              </span>



            </div>



          ))}


          </div>








          <div className="
            mt-8
            border-t
            border-white/20
            pt-6
          ">





            <h2 className="
              text-2xl
              font-bold
            ">

              Gesamtpreis

            </h2>






            <p className="
              mt-3
              text-4xl
              font-black
              text-cyan-400
            ">

              {total.toFixed(2)}€

            </p>







            <label className="
              block
              mt-8
              mb-2
              text-gray-300
              font-bold
            ">

              🔐 Zahlungs PIN

            </label>






            <input

              type="password"

              value={pin}

              maxLength={6}

              onChange={(e)=>
                setPin(e.target.value)
              }


              placeholder="PIN eingeben"


              className="
                w-full
                h-14
                px-5
                rounded-xl
                bg-white
                text-black
                text-xl
                border-2
                border-cyan-400
                outline-none
              "

            />








            <button


              onClick={finishOrder}



              className="
                mt-6
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

              💳 Jetzt bezahlen


            </button>





          </div>





        </div>








        <Link href="/cart">


          <button className="
            mt-6
            text-gray-400
          ">


            ← Zurück zum Warenkorb


          </button>


        </Link>





      </div>


    </main>


  );

}