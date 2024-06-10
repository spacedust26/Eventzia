import React from "react";
import Menulink from "./Menulink";
import Image from "next/image";
import {
  MdAttachMoney,
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
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
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
  return (
    <div className="container text-white sticky top-[40px] h-screen">
      <div className="user flex items-center gap-[16px] mb-[20px]">
        <div className="bg-[#503C3C] rounded-full"><Image className="rounded-full object-cover" src="/gif/avatar.gif" width={50} height={50} unoptimized/></div>
        <div className="flex flex-col">
          <span className="font-bold">Pranamya Kulal</span>
          <span className="text-sm text-gray-200">User</span>
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
      <button className="logout p-[20px] my-[5px] flex items-center gap-[10px] cursor-pointer rounded-lg hover:bg-[#503C3C] w-full">
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
