"use client";
import {
  TrophyIcon,
  UserCircleIcon,
  HomeIcon,
} from "@heroicons/react/16/solid";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const NavItem = ({ href, icon: Icon, label }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname == href;

  return (
    <div
      className={`flex flex-col items-center w-full ${
        isActive ? "text-lightGreen" : "text-shade"
      }`}
    >
      <Link href="/">
        <Icon
          width={32}
          height={32}
          className={`${isActive ? "text-lightGreen" : "text-shade"}`}
        />
        <p>{label}</p>
      </Link>
    </div>
  );
};

const BottomNav = () => {
  return (
    <div className="flex justify-between w-full">
      <NavItem href='/' icon={HomeIcon} label='Home' />
      <NavItem href='/ranking' icon={TrophyIcon} label='Ranking' />
      <NavItem href='/profile' icon={UserCircleIcon} label='Profile' />
    </div>
  );
};

export default BottomNav;
