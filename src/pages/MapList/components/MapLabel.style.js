import styled from 'styled-components';

export const LaberWrapper = styled.div`
  position: relative;
`;

export const Label = styled.div`
  ${props => props.theme.variables.flex()};
  width: 80px;
  height: 28px;
  border-radius: 20px;
  color: black;
  background-color: white;
  font-size: 16px;
  cursor: pointer;
  z-index: 2;

  &.hoverLabel {
    color: white;
    background-color: black;
  }
`;

export const CardWrapper = styled.div`
  position: absolute;
  left: -125px;
  bottom: 40px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;

  &.hidden {
    display: none;
  }
`;
