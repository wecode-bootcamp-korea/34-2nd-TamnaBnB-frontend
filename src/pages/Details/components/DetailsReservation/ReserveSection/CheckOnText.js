import React from 'react';
import styled from 'styled-components';

const CheckOnText = ({ myPrice }) => {
  return (
    <>
      <CheckHeaderSpan size="22px">₩{myPrice}</CheckHeaderSpan>
      <CheckHeaderSpan size="16px">/박</CheckHeaderSpan>
    </>
  );
};

export default CheckOnText;

const CheckHeaderSpan = styled.span`
  font-size: ${props => props.size};
`;
