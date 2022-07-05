import React from 'react';
import { IoSearchCircle } from 'react-icons/io5';
import styled from 'styled-components';

const Search = ({ searchModal, setSearchModal }) => {
  return (
    <div>
      <SearchArea>
        <SearchWrapper>
          <SearchBox primary={searchModal}>
            <SearchButton
              onClick={() => setSearchModal(!searchModal)}
              primary={searchModal}
            >
              탐라도 탐험하기
              <SearchIcon />
            </SearchButton>
          </SearchBox>
        </SearchWrapper>
      </SearchArea>
    </div>
  );
};

const SearchArea = styled.div`
  ${({ theme }) => theme.variables.flex()}
  width: 776px;
  height: 100%;
`;
const SearchWrapper = styled.div`
  ${({ theme }) => theme.variables.flex()}
  width: 360px;
  height: 60%;
`;
const SearchBox = styled.div`
  ${({ theme }) => theme.variables.flex()}
  ${props => props.primary && 'display : none'};
  width: 300px;
  border-radius: 35px;
  border: 1px solid #ddd;
`;
const SearchButton = styled.button`
  ${({ theme }) => theme.variables.flex('', 'space-between', 'center')}
  ${({ theme }) => theme.variables.btnTransparent}
  padding-left: 80px;
  width: 100%;
  border-radius: 35px;
  font-size: 14px;
  font-weight: bold;
`;
const SearchIcon = styled(IoSearchCircle)`
  width: 40px;
  height: 40px;
  font-size: 40px;
  font-weight: bold;
  color: #fd6f22;
`;

export default Search;
