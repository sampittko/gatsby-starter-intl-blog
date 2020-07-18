import React from "react";
import Vercel from "../../../../assets/img/poweredbys/vercel.svg";
import Egghead from "../../../../assets/img/poweredbys/egghead.svg";
import Tailwind from "../../../../assets/img/poweredbys/tailwind.svg";
import Gatsby from "../../../../assets/img/poweredbys/gatsby.svg";
import Logo from "./Logo";

const poweredBys = [Vercel, Gatsby, Tailwind, Egghead];

const PoweredBys = (props) => (
  <div className="py-3">
    {poweredBys.map((poweredBy, index) => (
      <Logo SVG={poweredBy} key={`powered-by-${index}`} />
    ))}
  </div>
);

export default PoweredBys;
