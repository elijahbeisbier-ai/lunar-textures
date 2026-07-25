"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useOrders } from "@/context/OrderContext";


export default function OrderDetails(){


  const params = useParams();

  const { orders } = useOrders();



  const order = orders.find(
    (item:any)=>
      String(item.id) === String(params.id)
  );





  if(!order){

    return (

      <main className="
        min-h-screen
        bg-black
        text-white
        pt-32
        px-6
      ">

        <h1 className="
          text-4xl
          font-bold
        ">

          Bestellung nicht gefunden

        </h1>


      </main>

    );

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
          font-bold
        ">

          Bestellung #{order.id}

        </h1>






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

            Deine Produkte

          </h2>





          <div className="
            mt-6
            space-y-4
          ">


            {order.products?.map((item:any)=>(


              <div
                key={item.cartId}
                className="
                  bg-black/40
                  rounded-xl
                  p-5
                  flex
                  justify-between
                "
              >


                <span>

                  {item.name}

                </span>



                <span className="
                  text-cyan-400
                ">

                  {item.price}

                </span>



              </div>


            ))}



          </div>







          <div className="
            mt-8
            border-t
            border-white/10
            pt-6
          ">



            <p className="
              text-xl
            ">

              Gesamt:

            </p>



            <p className="
              text-4xl
              text-cyan-400
              font-bold
            ">

              {Number(order.total ?? 0).toFixed(2)}€

            </p>






            <p className="
              mt-5
              text-gray-400
            ">

              Status: {order.status}

            </p>






            {order.status === "PAID" ? (


              <button className="
                mt-8
                w-full
                py-4
                rounded-xl
                bg-cyan-500
                text-black
                font-bold
              ">

                ZIP herunterladen

              </button>



            ) : (


              <div className="
                mt-8
                p-4
                rounded-xl
                bg-yellow-500/10
                text-yellow-400
              ">

                Zahlung noch nicht bestätigt.

              </div>



            )}





          </div>



        </div>





        <Link href="/orders">

          <button className="
            mt-6
            text-gray-400
          ">

            ← Zurück

          </button>

        </Link>



      </div>


    </main>


  );

}