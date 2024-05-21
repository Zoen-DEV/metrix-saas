import Image from "next/image";
import React from "react";
import conversation0 from "../../../assets/icons/navbar/conversation0.svg";
import conversation1 from "../../../assets/icons/navbar/conversation1.svg";

const NavbarConversationIcon = ({ isFocus }: { isFocus: boolean }) => {
  return <Image src={isFocus ? conversation1 : conversation0} alt="navbar button icon" />;
};

export default NavbarConversationIcon;
