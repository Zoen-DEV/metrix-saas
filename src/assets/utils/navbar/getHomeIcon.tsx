import Image from "next/image";
import React from "react";
import home0 from "../../../assets/icons/navbar/home0.svg";
import home1 from "../../../assets/icons/navbar/home1.svg";

const NavbarHomeIcon = ({ isFocus }: { isFocus: boolean }) => {
  return <Image src={isFocus ? home1 : home0} alt="navbar button icon" />;
};

export default NavbarHomeIcon;
