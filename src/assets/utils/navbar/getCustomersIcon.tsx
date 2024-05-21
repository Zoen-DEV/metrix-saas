import Image from "next/image";
import React from "react";
import customers0 from "../../../assets/icons/navbar/customers0.svg";
import customers1 from "../../../assets/icons/navbar/customers1.svg";

const NavbarCustomersIcon = ({ isFocus }: { isFocus: boolean }) => {
  return <Image src={isFocus ? customers1 : customers0} alt="navbar button icon" />;
};

export default NavbarCustomersIcon;
