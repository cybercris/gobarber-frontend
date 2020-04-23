import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function DefautLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefautLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
