import styled from 'styled-components';

export const MainWrapper = styled.div`
  ${props => props.theme.variables.flex('column', '', 'center')}
`;

export const MainThemeWrapper = styled.div`
  ${({ theme }) => theme.variables.flex()};
  position: fixed;
  top: 80px;
  width: 100vw;
  height: 80px;
  background-color: white;
  z-index: 2;
`;

export const MainThemes = styled.ul`
  ${props => props.theme.variables.flex('', 'space-around', '')}
  width: 40%;
  height: 100%;
`;

export const FilterBtn = styled.button`
  position: absolute;
  right: 180px;
  width: 80px;
  height: 50px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 10px;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 299px);
  grid-auto-rows: 377px;
  column-gap: 18px;
  row-gap: 45px;
  margin-top: 200px;
`;
