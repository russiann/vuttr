/* eslint-disable react/jsx-no-undef */
import React from 'react';
import styled from '@emotion/styled';

import TextField from '../textfield/textfield.component';
import TextArea from '../textarea/textarea.component';
import TagField from '../tagfield/tagfield.component';

/**
|--------------------------------------------------
| Elements
|--------------------------------------------------
*/

const Container = styled.div`
  margin-bottom: 15px;
`;
const Label = styled.div`
  color: #ff6007;
  font-size: 14px;
  margin-bottom: 5px;
  margin-left: 7.5px;
`;
const ErrorMessage = styled.div`
  font-size: 12px;
  margin-right: 8px;
  margin-top: 4px;
  color: #ffffff;
  background: red;
  padding: 1px 2px;
  float: right;
  border-radius: 2px;
`;

/**
|--------------------------------------------------
| Block
|--------------------------------------------------
*/

const InputField = ({type, label, errorMessage, ...props}) => (
  <Container>
    <Label>{label}</Label>
    <Choose>
      <When condition={type === 'textarea'}>
        <TextArea {...props} />
      </When>
      <When condition={type === 'tagfield'}>
        <TagField {...props} />
      </When>
      <Otherwise>
        <TextField {...props} />
      </Otherwise>
    </Choose>
    <If condition={errorMessage}>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </If>
  </Container>
);

InputField.defaultProps = {
  type: 'text',
  label: '',
  errorMessage: ''
};

export default InputField;
