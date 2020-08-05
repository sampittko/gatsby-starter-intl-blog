import React from "react";
import PropTypes from "prop-types";
import Item from "./item/Item";

const placeholder = <div />;

const Navigation = ({ prev, next }) => (
  <div className="w-full mt-8 flex justify-between flex-wrap-reverse mb-10">
    {prev.title ? (
      <Item slug={prev.slug} title={prev.title} back />
    ) : (
      placeholder
    )}
    {next.title ? <Item slug={next.slug} title={next.title} /> : placeholder}
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
