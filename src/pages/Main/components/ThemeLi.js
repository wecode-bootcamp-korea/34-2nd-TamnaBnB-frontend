import React from 'react';
import styled from 'styled-components';

const ThemeLi = ({ id, name, icon }) => {
  return (
    <MainThemeLi id={id}>
      <ThemeImg src={icon} alt={name} />
      <p>{name}</p>
    </MainThemeLi>
  );
};

export default ThemeLi;

const MainThemeLi = styled.li`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  font-weight: 400;
  cursor: pointer;
`;

const ThemeImg = styled.img`
  padding-bottom: 10px;
  width: 25px;
  height: 30px;
`;
