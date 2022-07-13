import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MapWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.75fr 1fr;
  margin-top: 100px;
  width: 100%;
`;

export const ToggleListWrapper = styled.div`
  ${props => props.theme.variables.flex('column', '', 'center')}
  padding-top: 30px;
  height: calc(100vh - 100px);
  z-index: 2;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  &.hidden {
    display: none;
  }
`;

export const ToggleList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

export const CardWrapper = styled.div``;

export const PageCount = styled.div`
  ${({ theme }) => theme.variables.flex()};
  padding: 50px 0;
`;

export const ArrowBtn = styled.button`
  margin: 0 15px;
  width: 30px;
  height: 30px;
  background-color: inherit;
  border: none;
  border-radius: 50%;

  &:hover {
    background-color: rgb(211, 211, 211, 0.5);
  }
`;

export const LinkEl = styled(Link)`
  ${({ theme }) => theme.variables.flex()};
  margin: 0 15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;

  &.clicked {
    background-color: black;
    color: white;
  }

  &:not(.clicked):hover {
    background-color: rgb(211, 211, 211, 0.5);
  }
`;
