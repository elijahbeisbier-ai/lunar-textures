"use client";

import { useEffect, useState } from "react";


export default function AdminSettings(){


  const [pin,setPin] = useState("");
  const [loaded,setLoaded] = useState(false);



  useEffect(()=>{


    const savedPin =
      localStorage.getItem("paymentPin");


    if(savedPin){

      setPin(savedPin);

    }


    setLoaded(true);


  },[]);






  function savePin(){



    if(pin.length < 4){


      alert(
        "❌ PIN muss mindestens 4 Zahlen haben"
      );


      return;

    }



    if(!/^[0-9]+$/.test(pin)){


      alert(
        "❌ PIN darf nur aus Zahlen bestehen"
      );


      return;

    }




    localStorage.setItem(
      "paymentPin",
      pin
    );



    alert(
      "✅ Zahlungs PIN gespeichert!"
    );


  }






  if(!loaded){

    return null;

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
        max-w-3xl
        mx-auto
      ">




        <h1 className="
          text-5xl
          font-black
          bg-gradient-to-r
          from-white
          to-cyan-400
          bg-clip-text
          text-transparent
        ">

          ⚙️ Checkout Einstellungen

        </h1>







        <div className="
          mt-10
          bg-white/5
          border
          border-white/20
          rounded-3xl
          p-8
          backdrop-blur-xl
        ">




          <h2 className="
            text-2xl
            font-bold
          ">

            🔐 Test Zahlungs PIN

          </h2>






          <p className="
            mt-3
            text-gray-400
          ">

            Erstelle einen PIN, der vor dem Abschluss einer Bestellung abgefragt wird.

          </p>







          <input


            type="password"


            maxLength={6}


            value={pin}


            onChange={(e)=>
              setPin(
                e.target.value.replace(/\D/g,"")
              )
            }


            placeholder="z.B. 1234"


            className="
              mt-6
              w-full
              p-4
              rounded-xl
              bg-black/60
              border
              border-white/20
              text-white
              outline-none
              focus:border-cyan-400
            "


          />








          <button


            onClick={savePin}


            className="
              mt-6
              w-full
              py-4
              rounded-xl
              bg-gradient-to-r
              from-cyan-400
              to-purple-500
              text-black
              font-black
              hover:scale-105
              transition
            "


          >

            💾 PIN speichern


          </button>






        </div>




      </div>



    </main>


  );

}