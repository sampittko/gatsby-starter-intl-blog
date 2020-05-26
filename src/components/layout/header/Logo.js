import React from 'react';
import logoPath from "../../../assets/img/logo.svg";

const Logo = () => (
  <div className="fixed top-0 left-0 w-auto">
    <img src={logoPath} alt="" style={{width: "30px"}} />
  </div>
);

export default Logo;