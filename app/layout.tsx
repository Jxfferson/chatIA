import type React from "react" //Importamos la libreria de React
import "../styles/global.css" //Importamos el global.css
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../components/providers"; // Cambio la importación a "@/"
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatBot Avanzado",
  description: "Un chatbot inteligente con IA",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}