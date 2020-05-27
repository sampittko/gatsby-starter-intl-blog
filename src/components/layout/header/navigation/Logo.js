import React from 'react';
import logoPath from "../../../../assets/img/logo_brown.png";
import Link from '../../../Link';
import { injectIntl } from 'gatsby-plugin-intl';
import { isAtRootLanguage } from '../../../../utils/i18n';

const Logo = ({ intl }) => (
  <Link to={`/${isAtRootLanguage(intl.locale) ? "" : intl.locale}`} notText>
    <img src={logoPath} alt="" className="w-5 h-auto inline-block m-3" />
  </Link>
);

export default injectIntl(Logo);