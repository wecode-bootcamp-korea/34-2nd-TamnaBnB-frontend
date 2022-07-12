import React from 'react';
import styled from 'styled-components';

import { AiFillStar } from 'react-icons/ai';

const HeaderRating = ({ ratingsAvg, ratingCount }) => {
  return (
    <>
      <AiFillStar size="16" />
      <HeaderSpan>{ratingsAvg}</HeaderSpan>
      <HeaderSpan deco="underline" cursor="pointer" padding="0px 12px 0px 8px">
        후기 {ratingCount}개
      </HeaderSpan>
    </>
  );
};

export default HeaderRating;

const HeaderSpan = styled.span`
  color: rgb(34, 34, 34);
  font-size: 14px;
  font-weight: 500;
  text-decoration: ${props => props.deco};
  padding: ${props => props.padding};
  cursor: ${props => props.cursor};
  opacity: ${props => props.opacity};
`;
