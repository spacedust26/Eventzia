"use client"
import React from "react";
import Menulink from "./Menulink";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import {
  MdDashboard,
  MdShoppingBag,
  MdWork,
  MdAnalytics,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Create Event",
        path: "/dashboard/createEvent",
        icon: <MdShoppingBag />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  const {data: session} = useSession()
  return (
    <div className="container text-white top-[40px] sticky h-[100vh]">
      <div className="user flex items-center gap-[20px] mb-[16px] bg-[#503C3C] p-4 rounded-lg">
        <div className="bg-[#352626] rounded-full"><Image className="rounded-full object-cover" src="/gif/avatar.gif" width={50} height={50} alt="avatar" unoptimized/></div>
        <div className="flex flex-col">
          <span className="font-bold text-[#d4af37]">USER</span>
          <span className="font-bold">{session?.user?.email}</span>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((cat) => {
          return (
            <li key={cat.title}>
              <span className="cat text-gray-200 font-bold text-sm mx-[10px]">{cat.title}</span>
              {cat.list.map((item) => {
                return (<Menulink item={item} key={item.title} />);
              })}
            </li>
          );
        })}
      </ul>
      <button className="logout p-[20px] my-[5px] flex items-center gap-[10px] cursor-pointer rounded-lg hover:bg-[#503C3C] w-full" onClick={() => signOut()}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
