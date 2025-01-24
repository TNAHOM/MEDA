import { SignedOut, SignedIn, UserButton, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-16 w-full p-4 flex items-center justify-between bg-white px-16">
      <div className="flex gap-2">
        <Image src="/assets/Football.svg" alt="logo" height={32} width={32} />
        <h1 className="font-bold text-xl ml-2">Meda</h1>
        <div className="flex-1 flex justify-center ml-2 text-shade text-lg">
          <SignedIn>
            <Link href="/Dashboard">Dashboard</Link>
          </SignedIn>
        </div>
      </div>
      <div className=""></div>
      {/* LEFT */}
      <div className="flex gap-4">
        <Image
          src="/assets/notification.svg"
          alt="logo"
          height={26}
          width={26}
        />
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
