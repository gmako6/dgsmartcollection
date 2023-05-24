import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { CiBoxList, CiBoxes, CiHome, CiSettings, CiShop } from "react-icons/ci";

export default function NavBar() {
  const inactiveLink = "flex gap-1 items-center p-1 ";
  const activeLink = inactiveLink + " bg-white text-blue-900 rounded-l-lg";

  const router = useRouter();
  const { pathname } = router;
  //pathname.includes("/") ? activeLink : inactiveLink

  console.log({ router });

  return (
    <aside className="text-white p-4 pr-0">
      <a className="flex items-center text-2xl gap-2  font-bold mt-2 mr-2">
        <CiShop className="" />
        <span className="">Dukani</span>
      </a>
      <nav className="flex flex-col gap-2 mt-5">
        <Link
          href={"/"}
          className={pathname === "/" ? activeLink : inactiveLink}
        >
          <CiHome className="" />
          Dashboard
        </Link>
        <Link
          href={"/orders"}
          className={pathname.includes("/orders") ? activeLink : inactiveLink}
        >
          <CiBoxList className="" />
          Orders
        </Link>
        <Link
          href={"/products"}
          className={pathname.includes("/products") ? activeLink : inactiveLink}
        >
          <CiBoxes className="" />
          Products
        </Link>
        <Link
          href={"/setting"}
          className={pathname.includes("/setting") ? activeLink : inactiveLink}
        >
          <CiSettings className="" />
          Setting
        </Link>
      </nav>
    </aside>
  );
}
