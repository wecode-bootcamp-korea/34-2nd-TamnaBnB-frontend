import React from 'react';
import styled from 'styled-components';

const NotCheckOnText = () => {
  return (
    <CheckHeaderSpan size="22px">
      요금을 확인하려면 날짜를 <p>입력하세요.</p>
    </CheckHeaderSpan>
  );
};

export default NotCheckOnText;

const CheckHeaderSpan = styled.span`
  font-size: ${props => props.size};
`;
