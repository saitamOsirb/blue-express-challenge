import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Personajes } from "./personajes/component/Personajes";
import { NavBar } from "./shared/navbar/component/NavBar";
import { Footer } from "./shared/footer/component/Footer";
import { PersonajesState } from "./personajes/context/personajesState";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar></NavBar>
        <PersonajesState>
          
          <Personajes></Personajes>
         
          <br />
          <Footer></Footer>
        </PersonajesState>
      </body>
    </html>
  );
}
