import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styled from 'styled-components';

import { StickedToBottom } from '~/components/common/layout';
import Button from './Button';

const StyledContainer = styled('div')`
  display: flex;
  justify-content: center;
  padding: 20px 13px;
  padding-bottom: 0px;

`;

const StyledButton = styled(Button)`
  width: 100%;
  max-width: 400px;
`;

const ButtonBottom = ({ link, text, onButtonClick, isDisabled }) => {
  const buttonProps = {
    onClick: isDisabled ? () => {} : onButtonClick,
    isDisabled,
    isPrimary: true,
  };

  return (
    <StyledContainer>
      <StyledButton {...buttonProps}>{isDisabled ? text : <Link to={link}>{text}</Link>}</StyledButton>
    </StyledContainer>
    
  );
};

ButtonBottom.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};

ButtonBottom.defaultProps = {
  onButtonClick: () => {},
  isDisabled: false,
};

export default ButtonBottom;
