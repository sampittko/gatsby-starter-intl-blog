import React from "react";
import Vercel from "../../../../assets/img/poweredbys/vercel.svg";
import Egghead from "../../../../assets/img/poweredbys/egghead.svg";
import Tailwind from "../../../../assets/img/poweredbys/tailwind.svg";
import Gatsby from "../../../../assets/img/poweredbys/gatsby.svg";
import Logo from "./Logo";

const PoweredBys = (props) => (
  <div className="absolute right-0 bottom-0">
    <Logo SVG={Gatsby} />
    <Logo SVG={Tailwind} />
    <Logo SVG={Vercel} />
    <Logo SVG={Egghead} />
  </div>
);

export default PoweredBys;
