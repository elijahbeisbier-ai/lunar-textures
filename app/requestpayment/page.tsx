"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useOrders } from "@/context/OrderContext";


export default function RequestPayment() {


  const router = useRouter();

  const { completeOrder } = useOrders();


  const [paymentCode, setPaymentCode] = useState("");

  const [error, setError] = useState("");





  function submitPayment() {


    if(paymentCode.length < 4){

      setError("Bitte gib einen gültigen Paysafecard Code ein.");

      return;

    }



    completeOrder();


    router.push("/orders");


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
        max-w-xl
        mx-auto
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-8
      ">


        <h1 className="
          text-4xl
          font-bold
        ">
          💳 Mit Paysafecard bezahlen
        </h1>



        <p className="
          mt-4
          text-gray-400
        ">
          Bezahle deine Bestellung mit einer Paysafecard.
          Gib deinen Paysafecard Code ein, um fortzufahren.
        </p>





        <input

          value={paymentCode}

          onChange={(e)=>setPaymentCode(e.target.value)}

          placeholder="Paysafecard Code eingeben"

          className="
            mt-8
            w-full
            bg-black/50
            border
            border-white/20
            rounded-xl
            px-5
            py-4
            outline-none
          "

        />





        {error && (

          <p className="
            mt-3
            text-red-400
          ">
            {error}
          </p>

        )}






        <button

          onClick={submitPayment}

          className="
            mt-6
            w-full
            py-4
            rounded-xl
            bg-cyan-500
            text-black
            font-bold
            hover:bg-cyan-400
          "

        >

          Mit Paysafecard bezahlen

        </button>



      </div>


    </main>

  );

}