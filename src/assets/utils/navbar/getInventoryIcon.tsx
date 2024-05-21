import Image from "next/image";
import React from "react";
import inventory0 from "../../../assets/icons/navbar/inventory0.svg";
import inventory1 from "../../../assets/icons/navbar/inventory1.svg";

const NavbarInventoryIcon = ({ isFocus }: { isFocus: boolean }) => {
  return <Image src={isFocus ? inventory1 : inventory0} alt="navbar button icon" />;
};

export default NavbarInventoryIcon;
