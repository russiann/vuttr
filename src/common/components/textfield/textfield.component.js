import styled from '@emotion/styled';

const TextField = styled.input`
  font-family: 'Ubuntu', sans-serif;
  outline: none;
  padding: 10px 15px;
  border: 1px solid #bdbdbd;
  border-radius: 30px;
  min-width: 200px;
  box-sizing: border-box;
  width: 100%;
  font-size: 12px;
`;

TextField.defaultProps = {
  'data-testid': 'textfield',
  type: 'text'
};

export default TextField;
