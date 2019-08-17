import React from 'react';
import styled from '@emotion/styled';
import Button from '../button/button.component';

/**
|--------------------------------------------------
| Elements
|--------------------------------------------------
*/

const IconWrapper = styled.div`
  width: 17px;
  height: 17px;
`;

const SearchIcon = props => (
  <IconWrapper style={{}}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-search"
      {...props}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  </IconWrapper>
);

const SearchFieldWrapper = styled.div`
  border-radius: 30px;
  border: 1px solid #bdbdbd;
  display: inline-flex;
  overflow: hidden;
  box-sizing: border-box;
  align-items: center;
  color: #bdbdbd;
  padding-left: 12px;

  ${Button} {
    margin-left: auto;
  }
`;

const SearchFieldInput = styled.input`
  width: 100%;
  outline: none;
  padding: 10px;
  border: none;
  min-width: 200px;
`;

/**
|--------------------------------------------------
| Block
|--------------------------------------------------
*/

const SearchField = ({...props}) => (
  <SearchFieldWrapper>
    <SearchIcon />
    <SearchFieldInput {...props} />
    <Button>Buscar</Button>
  </SearchFieldWrapper>
);

export default SearchField;
