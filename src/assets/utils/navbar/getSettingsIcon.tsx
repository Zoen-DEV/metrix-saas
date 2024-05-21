import Image from "next/image";
import React from "react";
import settings0 from "../../../assets/icons/navbar/settings0.svg";
import settings1 from "../../../assets/icons/navbar/settings1.svg";

const NavbarSettingsIcon = ({ isFocus }: { isFocus: boolean }) => {
  return <Image src={isFocus ? settings1 : settings0} alt="navbar button icon" />;
};

export default NavbarSettingsIcon;
