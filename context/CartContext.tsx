"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


const CartContext = createContext<any>(null);



export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {


  const [cart,setCart] = useState<any[]>([]);
  const [purchases,setPurchases] = useState<any[]>([]);





  // Daten laden

  useEffect(()=>{


    const savedCart =
      localStorage.getItem("cart");


    const savedPurchases =
      localStorage.getItem("purchases");



    if(savedCart){

      setCart(
        JSON.parse(savedCart)
      );

    }



    if(savedPurchases){

      setPurchases(
        JSON.parse(savedPurchases)
      );

    }


  },[]);







  // Warenkorb speichern

  useEffect(()=>{


    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );


  },[cart]);







  // Bestellungen speichern

  useEffect(()=>{


    localStorage.setItem(
      "purchases",
      JSON.stringify(purchases)
    );


  },[purchases]);









  function addToCart(product:any){


    const exists =
      cart.find(
        item=>item.id === product.id
      );


    if(exists){

      alert(
        "Dieses Pack ist schon im Warenkorb!"
      );

      return;

    }





    const item = {

      ...product,

      cartId:
        crypto.randomUUID()

    };



    setCart((old)=>[

      ...old,

      item

    ]);



    alert(
      "✅ Zum Warenkorb hinzugefügt!"
    );


  }








  function removeFromCart(cartId:string){


    setCart((old)=>

      old.filter(
        item=>item.cartId !== cartId
      )

    );


  }









  function createOrder(){


    const total =
      cart.reduce(
        (sum,item)=>{


          const price =
            Number(
              String(item.price)
              .replace("€","")
              .replace("$","")
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






    const order = {


      id:
        "ORD-" + Date.now(),


      date:
        new Date().toLocaleString(),


      total,


      products:
        cart,


      status:
        "Bezahlt"


    };






    setPurchases((old)=>[

      ...old,

      order

    ]);






    setCart([]);




    return order;


  }









  return (

    <CartContext.Provider


      value={{

        cart,

        addToCart,

        removeFromCart,

        purchases,

        createOrder

      }}


    >

      {children}

    </CartContext.Provider>


  );

}








export function useCart(){

  return useContext(CartContext);

}