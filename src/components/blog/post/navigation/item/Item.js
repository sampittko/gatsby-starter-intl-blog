import React from "react";
import PropTypes from "prop-types";
import Link from "../../../../Link";
import Chevron from "./Chevron";
import Text from "./Text";

const Item = ({ title, slug, back }) => (
  <Link
    className={`flex justify-end px-5 py-3 border-2 border-white hover:border-gray-100 bg-gray-100 hover:bg-transparent rounded-full w-full sm:w-auto my-1 ${
      back ? "flex-row-reverse" : "flex-row"
    }`}
    to={slug}
  >
    <Text title={title} back={back} />
    <Chevron back={back} />
  </Link>
);

Item.defaultProps = {
  back: false,
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  back: PropTypes.bool,
};

export default Item;
