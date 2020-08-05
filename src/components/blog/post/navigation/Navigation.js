import React from "react";
import PropTypes from "prop-types";
import Item from "./item/Item";

const Navigation = ({ prev, next }) => (
  <div className="relative w-full mt-8">
    {prev.title && <Item slug={prev.slug} title={prev.title} back />}
    {next.title && <Item slug={next.slug} title={next.title} />}
  </div>
);

Navigation.propTypes = {
  prev: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
  }).isRequired,
  next: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
  }).isRequired,
};

export default Navigation;
