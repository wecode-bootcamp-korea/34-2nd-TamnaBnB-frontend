import React from 'react';
import styled from 'styled-components';
import { RiMedalFill } from 'react-icons/ri';

const HeaderSuperHost = () => {
  return (
    <>
      <RiMedalFill />
      <HeaderSpan padding="0px 12px 0px 4px" opacity="0.8">
        슈퍼호스트
      </HeaderSpan>
    </>
  );
};

export default HeaderSuperHost;

const HeaderSpan = styled.span`
  color: rgb(34, 34, 34);
  font-size: 14px;
  font-weight: 500;
  text-decoration: ${props => props.deco};
  padding: ${props => props.padding};
  cursor: ${props => props.cursor};
  opacity: ${props => props.opacity};
`;
