import React from "react";
import { IHeader } from "./HeaderTypes";
import { HeaderTitel } from "./HeaderStyled";

const Header: React.FC<IHeader> = ({ titel }) => {
  return <HeaderTitel>{titel}</HeaderTitel>;
};

export default Header;
