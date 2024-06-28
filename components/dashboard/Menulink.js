"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Menulink = ({ item }) => {
  const pathname = usePathname();
  return (
      <Link href={item.path} className={`container p-[16px] flex items-center gap-[15px] my-[5px] rounded-lg hover:bg-[#503C3C] ${pathname === item.path ? 'bg-[#503C3C]' : ''}`}>
        {item.icon}
        {item.title}
      </Link>
  );
};

export default Menulink;
