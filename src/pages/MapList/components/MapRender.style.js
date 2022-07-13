import styled from 'styled-components';

export const Map = styled.div`
  position: relative;
  width: 100;
  height: calc(100vh - 100px);
`;

export const ToggleBtn = styled.button`
  position: absolute;
  top: 20px;
  left: 25px;
  width: 40px;
  height: 40px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  border-radius: 10px;
  border: none;
  font-size: 25px;
  z-index: 2;
`;
