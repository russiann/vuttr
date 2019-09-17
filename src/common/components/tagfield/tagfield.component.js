import React, {useState} from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import Tag from '../tag/tag.component';
import PropTypes from 'prop-types';

/**
|--------------------------------------------------
| Elements
|--------------------------------------------------
*/

const Container = styled.div`
  font-family: 'Ubuntu', sans-serif;
  border: 1px dashed #ffb18f;
  border-radius: 4px;
  min-width: 200px;
  box-sizing: border-box;
  font-size: 12px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 5px 10px;
  overflow: hidden;
`;

Container.defaultProps = {
  type: 'text'
};

const TextField = styled.input`
  font-family: Ubuntu;
  outline: none;
  flex: 1;
  border: none;
  font-size: 15px;
`;

TextField.defaultProps = {
  'data-testid': 'textfield'
};

/**
|--------------------------------------------------
| Custom Styles
|--------------------------------------------------
*/

const tagStyle = css`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 15px;
`;

/**
|--------------------------------------------------
| Block
|--------------------------------------------------
*/

const delimiters = [188 /* comma */, 13 /* enter */];

const TagField = ({value, onChange, placeholder, ...props}) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = ev => {
    if (!inputValue && value.length > 0 && ev.keyCode === 8) {
      onChange(value.slice(0, -1));
    }
    if (delimiters.includes(ev.keyCode)) {
      ev.preventDefault();
      if (inputValue) {
        onChange([...value, inputValue]);
        setInputValue('');
      }
    }
  };

  return (
    <Container>
      {value.map((tag, idx) => (
        <Tag data-testid="tag" key={idx} css={tagStyle}>
          #{tag}
        </Tag>
      ))}
      <TextField
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={({target}) => setInputValue(target.value)}
        placeholder={value.length ? undefined : placeholder}
        {...props}
      />
    </Container>
  );
};

TagField.defaultProps = {
  value: [],
  onChange: () => {},
  placeholder: ''
};

TagField.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default TagField;
