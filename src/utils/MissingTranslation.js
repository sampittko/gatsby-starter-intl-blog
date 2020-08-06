import { useEffect } from 'react';
import { navigate } from 'gatsby-plugin-intl';

const MissingTranslation = () => {
  useEffect(() => {
    navigate("/404")
  }, [])

  return null;
};

export default MissingTranslation;