"use client";

import { useCart } from "@/context/CartContext";


export default function Orders(){

  const {
    purchases
  } = useCart();



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
          font-black
        ">
          📦 Deine Bestellungen
        </h1>





        {purchases.length === 0 && (

          <div className="
            mt-10
            bg-white/5
            border
            border-white/20
            rounded-3xl
            p-8
            text-center
          ">

            <p className="
              text-gray-400
              text-xl
            ">
              Keine Bestellungen vorhanden.
            </p>


          </div>

        )}






        <div className="
          mt-10
          space-y-6
        ">


          {purchases.map((order:any)=>(


            <div
              key={order.id}
              className="
                bg-white/5
                border
                border-white/20
                rounded-3xl
                p-8
              "
            >


              <div className="
                flex
                justify-between
                items-center
              ">


                <h2 className="
                  text-2xl
                  font-bold
                ">
                  {order.id}
                </h2>



                <span className="
                  px-4
                  py-2
                  rounded-full
                  bg-green-500/20
                  text-green-400
                  font-bold
                ">
                  ✅ {order.status || "Bezahlt"}
                </span>


              </div>





              <p className="
                text-gray-400
                mt-3
              ">
                {order.date}
              </p>





              <p className="
                mt-5
                text-cyan-400
                text-3xl
                font-black
              ">

                {Number(order.total ?? 0).toFixed(2)}€

              </p>







              <h3 className="
                mt-8
                text-xl
                font-bold
              ">
                Produkte
              </h3>






              <div className="
                mt-4
                space-y-3
              ">


                {(order.products ?? []).map((item:any)=>(


                  <div
                    key={item.cartId || item.id}
                    className="
                      bg-black/40
                      rounded-xl
                      p-5
                      flex
                      justify-between
                      items-center
                    "
                  >


                    <div>

                      <p className="
                        font-bold
                      ">
                        {item.name}
                      </p>


                      <p className="
                        text-gray-400
                      ">
                        {item.price}€
                      </p>


                    </div>






                    {item.download ? (

                      <a
                        href={item.download}
                        target="_blank"
                        className="
                          px-5
                          py-3
                          rounded-xl
                          bg-gradient-to-r
                          from-cyan-400
                          to-purple-500
                          text-black
                          font-bold
                        "
                      >
                        ⬇ Download
                      </a>


                    ) : (

                      <button
                        className="
                          px-5
                          py-3
                          rounded-xl
                          bg-white/10
                          border
                          border-white/20
                          text-gray-400
                        "
                      >
                        Kein Download
                      </button>

                    )}



                  </div>


                ))}



              </div>



            </div>


          ))}



        </div>



      </div>


    </main>

  );

}