import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Button from '../button/button.component';
import flow from '../../helpers/flow';

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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
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

const SearchField = ({value, onChange, onSearch, ...props}) => {
  const [inputValue, setInputValue] = useState(value);
  const [focused, setFocused] = useState(false);

  const handleButtonClick = () => onSearch(inputValue);
  const handleChange = ev => setInputValue(ev.target.value);
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const handleEnterKeyDown = ({keyCode}) => {
    if (!focused || !(keyCode === 13)) return;
    onSearch(inputValue);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEnterKeyDown);
    return () => document.removeEventListener('keydown', handleEnterKeyDown);
  });

  return (
    <SearchFieldWrapper>
      <SearchIcon />
      <SearchFieldInput
        value={inputValue}
        onChange={flow([handleChange, props.onChange])}
        onFocus={flow([handleFocus, props.onFocus])}
        onBlur={flow([handleBlur, props.onBlur])}
        {...props}
      />
      <Button onClick={handleButtonClick}>Buscar</Button>
    </SearchFieldWrapper>
  );
};

SearchField.defaultProps = {
  value: '',
  onChange: () => {},
  onSearch: () => {}
};

SearchField.propTypes = {
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func
};

export default SearchField;
