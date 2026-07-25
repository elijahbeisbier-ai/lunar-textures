"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


const PackContext = createContext<any>(null);



export function PackProvider({
  children
}:{
  children:React.ReactNode;
}){


  const [packs,setPacks] = useState<any[]>([]);
  const [cart,setCart] = useState<any[]>([]);



  useEffect(()=>{

    const savedPacks =
      localStorage.getItem("packs");


    const savedCart =
      localStorage.getItem("cart");



    if(savedPacks){

      setPacks(
        JSON.parse(savedPacks)
      );

    }



    if(savedCart){

      setCart(
        JSON.parse(savedCart)
      );

    }


  },[]);





  useEffect(()=>{

    localStorage.setItem(
      "packs",
      JSON.stringify(packs)
    );

  },[packs]);





  useEffect(()=>{

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  },[cart]);






  function addPack(pack:any){

    setPacks((old)=>[
      ...old,
      {
        ...pack,
        id: Date.now().toString()
      }
    ]);

  }





  function addToCart(pack:any){


    setCart((old)=>{


      const exists =
        old.find(
          item=>item.id === pack.id
        );


      if(exists){

        alert("Dieses Pack ist bereits im Warenkorb");

        return old;

      }



      alert("✅ Zum Warenkorb hinzugefügt");


      return [
        ...old,
        pack
      ];


    });


  }






  function removeFromCart(id:string){

    setCart((old)=>
      old.filter(
        item=>item.id !== id
      )
    );

  }





  function deletePack(id:string){

    setPacks((old)=>
      old.filter(
        pack=>pack.id !== id
      )
    );

  }





  return (

    <PackContext.Provider

      value={{

        packs,

        cart,

        addPack,

        addToCart,

        removeFromCart,

        deletePack

      }}

    >

      {children}

    </PackContext.Provider>

  );


}





export function usePacks(){

  return useContext(PackContext);

}