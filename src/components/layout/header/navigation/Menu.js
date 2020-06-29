import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import intlLinks from '../../../../locales/links.json';
import Link from '../../../Link';
import { isAtRootLanguage } from '../../../../utils/i18n';

const menuItems = [
  {
    intlId: "menu.blog",
    intlLinks: intlLinks.blog,
  },
  {
    intlId: "menu.projects",
    intlLinks: intlLinks.projects,
  },
  {
    intlId: "menu.timeline",
    intlLinks: intlLinks.timeline,
  },
];

const Menu = ({ intl }) => {
  const { locale } = intl

  return (
    <div className="list-none inline-block uppercase">
      {menuItems.map((menuItem, index) => (
        <Link
          key={`menu-link-${index}`}
          to={
            isAtRootLanguage(locale)
              ? menuItem.intlLinks[locale]
              : `${locale}/${menuItem.intlLinks[locale]}`
          }
          className="mr-2"
        >
          {intl.formatMessage({ id: menuItem.intlId })}
        </Link>
      ))}
    </div>
  );
};

export default injectIntl(Menu);