import React from "react";

import Image from "./Image";
import Links from "./links/Links";

const Header = () => (
  <header className="container px-5 py-8 mx-auto">
    <Links />
    <Image />
  </header>
);

export default Header;
