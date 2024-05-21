"use client";
import React from "react";
import headerAlert from "../../assets/icons/headerAlert.svg";
import profileImage from "../../assets/icons/profileImage.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavbarRoutes } from "@/utils/data/nav_routes";

const Header = () => {
  const pathname = usePathname();
  const { label } = NavbarRoutes.find((item) => item.path == pathname)!;

  return (
    <header className="header-container">
      <h1>{label}</h1>

      <div className="header-content">
        <Image
          src={headerAlert}
          alt="alert icon"
          className="header-alert-icon"
        />
        <Image src={profileImage} alt="profile image" className="header-profile-image" />
      </div>
    </header>
  );
};

export default Header;
