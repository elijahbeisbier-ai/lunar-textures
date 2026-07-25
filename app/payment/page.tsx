"use client";


import Link from "next/link";


export default function Payment(){


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
text-center
">


<h1 className="
text-4xl
font-bold
">

Paysafecard Zahlung

</h1>


<p className="
mt-6
text-gray-400
">

Sichere Zahlungsabwicklung

</p>


<button className="
mt-8
w-full
py-4
rounded-xl
bg-yellow-400
text-black
font-bold
">

💳 Paysafecard

</button>


<Link href="/checkout">

<button className="
mt-5
w-full
py-3
rounded-xl
border
border-white/20
">

Zurück

</button>

</Link>


</div>


</main>

);


}