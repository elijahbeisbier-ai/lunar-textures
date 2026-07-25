"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


const OrderContext = createContext<any>(null);



export function OrderProvider({
  children
}: {
  children: React.ReactNode;
}) {


  const [orders, setOrders] = useState<any[]>([]);



  useEffect(() => {

    const savedOrders =
      localStorage.getItem("orders");


    if(savedOrders){

      setOrders(JSON.parse(savedOrders));

    }


  }, []);





  useEffect(() => {

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );


  }, [orders]);






  function createOrder(
    products:any[],
    total:number
  ){


    const order = {


      id: Date.now(),


      products: products.map((product:any)=>({


        id: product.id,

        name: product.name,

        price: product.price,

        image: product.image || "",

        download:
          product.download || ""


      })),



      total,



      status:
        "WAITING_FOR_PAYMENT",



      date:
        new Date().toLocaleDateString()


    };




    setOrders((old)=>[

      ...old,

      order

    ]);



    return order;


  }






  function completeOrder(){


    setOrders((old)=>

      old.map((order)=>({

        ...order,

        status:
          "PAID"


      }))

    );


  }






  function getOrder(id:number){


    return orders.find(

      (order)=>order.id === id

    );


  }






  return (

    <OrderContext.Provider

      value={{


        orders,


        createOrder,


        completeOrder,


        getOrder


      }}

    >

      {children}

    </OrderContext.Provider>


  );


}






export function useOrders(){

  return useContext(OrderContext);

}