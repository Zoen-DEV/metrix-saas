"use client";
import React from "react";
import mainLogo from "../../assets/icons/mainLogo.svg";
import Image from "next/image";
import { NavbarRoutes } from "@/utils/data/nav_routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logout from "../../assets/icons/navbar/logout.svg";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <aside className="navbar-container">
      <div className="navbar-logo-container">
        <Image src={mainLogo} alt="brand logo" />
        <h1>Metrix</h1>
      </div>

      <nav className="navbar-links-container">
        {NavbarRoutes.map((route) => {
          const isFocus = route.path == pathname;

          return (
            <Link
              href={route.path}
              key={route.path}
              className={`navbar-link ${isFocus && "navbar-link-is-focus"}`}
            >
              {route.icon({ isFocus: isFocus })}
              {route.label}
            </Link>
          );
        })}
      </nav>

      <div className="navbar-footer">
        <button>
          <Image src={logout} alt="logout icon" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Navbar;
