/* eslint-disable react/jsx-no-undef */
import React from 'react';
import styled from '@emotion/styled';

const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

CheckboxContainer.defaultProps = {
  'data-testid': 'container'
};

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

HiddenCheckbox.defaultProps = {
  'data-testid': 'checkbox',
  type: 'checkbox'
};

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${p => (p.checked ? '#ff6007' : '#ffded5')};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${p => (p.checked ? 'visible' : 'hidden')};
  }
`;

const Label = styled.label`
  margin-left: 10px;
  vertical-align: top;
`;

Label.defaultProps = {
  'data-testid': 'label'
};

const Checkbox = ({label, className, checked, ...props}) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
    <If condition={label}>
      <Label>{label}</Label>
    </If>
  </CheckboxContainer>
);

export default Checkbox;
