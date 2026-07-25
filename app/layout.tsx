import { CartProvider } from "@/context/CartContext";
import { OrderProvider } from "@/context/OrderContext";
import { PackProvider } from "@/context/PackContext";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Lunar Textures",
  description: "Premium Minecraft Texture Pack Marketplace",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="de">
      <body>

        <OrderProvider>

          <CartProvider>

            <PackProvider>

              <Navbar />

              {children}

            </PackProvider>

          </CartProvider>

        </OrderProvider>

      </body>
    </html>
  );
}