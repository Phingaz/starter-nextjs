import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Providers from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loja Frank Mills",
  description: "A loja Frank Mills é a melhor loja de bolsas e mochilas do Brasil! Conhecida por sua qualidade e variedade, a Frank Mills oferece uma ampla seleção de bolsas de couro, mochilas estilosas e acessórios para todas as ocasiões. Se você procura produtos duráveis e com design exclusivo, a Frank Mills é o lugar certo. Venha conferir e descubra por que somos a referência em bolsas e mochilas no Brasil!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
