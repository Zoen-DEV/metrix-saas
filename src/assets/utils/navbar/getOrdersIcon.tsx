import Image from "next/image";
import React from "react";
import orders0 from "../../../assets/icons/navbar/orders0.svg";
import orders1 from "../../../assets/icons/navbar/orders1.svg";

const NavbarOrdersIcon = ({ isFocus }: { isFocus: boolean }) => {
  return <Image src={isFocus ? orders1 : orders0} alt="navbar button icon" />;
};

export default NavbarOrdersIcon;
