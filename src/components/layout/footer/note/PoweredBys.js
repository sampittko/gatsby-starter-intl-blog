import React from "react";
import Vercel from "../../../../assets/img/icons/poweredbys/vercel.svg";
import Egghead from "../../../../assets/img/icons/poweredbys/egghead.svg";
import Tailwind from "../../../../assets/img/icons/poweredbys/tailwind.svg";
import Gatsby from "../../../../assets/img/icons/poweredbys/gatsby.svg";
import Logo from "./Logo";

const poweredBys = [Vercel, Gatsby, Tailwind, Egghead];

const PoweredBys = () => (
  <div className="pl-1 hidden sm:inline-block">
    {poweredBys.map((poweredBy, index) => (
      <Logo SVG={poweredBy} key={`powered-by-${index}`} />
    ))}
  </div>
);

export default PoweredBys;
