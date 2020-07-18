import React from "react";

import Image from "./Image";
import Links from "./links/Links";

const Header = () => (
  <header className="container px-5 py-8 mx-auto">
    <Links className="flex items-center sm:flex-row flex-col" />
    <Image className="h-24 w-full mt-5" />
  </header>
);

export default Header;
