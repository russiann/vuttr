/* eslint-disable react/jsx-no-undef */
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
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
  color: ${p => p.theme.colors.blazeorange};
  font-size: 14px;
  margin-bottom: 5px;
  margin-left: 7.5px;
`;

Label.defaultProps = {
  'data-testid': 'label',
  theme: {
    colors: {
      blazeorange: 'ff6007'
    }
  }
};

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

ErrorMessage.defaultProps = {
  'data-testid': 'error-message'
};

/**
|--------------------------------------------------
| Block
|--------------------------------------------------
*/

const InputField = ({type, label, errorMessage, ...props}) => (
  <Container>
    <If condition={label}>
      <Label>{label}</Label>
    </If>
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

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired
};

export default InputField;
