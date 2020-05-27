import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import intlLinks from '../../../../locales/links.json';
import Link from '../../../Link';

const menuItems = [
  {
    intlId: "header.menu.blog",
    intlLinks: intlLinks.blog,
  },
  {
    intlId: "header.menu.projects",
    intlLinks: intlLinks.projects,
  },
  {
    intlId: "header.menu.timeline",
    intlLinks: intlLinks.timeline,
  },
];

const Menu = ({ intl }) => {
  const { locale } = intl

  return (
    <div className="list-none inline-block uppercase">
      {menuItems.map((menuItem) => (
        <Link to={menuItem.intlLinks[locale]} className="mr-2">
          {intl.formatMessage({ id: menuItem.intlId })}
        </Link>
      ))}
    </div>
  );
};

export default injectIntl(Menu);