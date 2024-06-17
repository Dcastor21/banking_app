import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import Image from "next/image";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import MobileNav from "@/components/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "adrian", lastname: "Castor" };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
        </div>
        <div>
          <MobileNav user={loggedIn} />
        </div>
      </div>
      {children}
    </main>
  );
}
