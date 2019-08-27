import styled from '@emotion/styled';

const TextArea = styled.textarea`
  min-height: 120px;
  font-family: 'Ubuntu', sans-serif;
  outline: none;
  padding: 10px 15px;
  border: 1px solid #bdbdbd;
  border-radius: 18px;
  min-width: 200px;
  box-sizing: border-box;
  width: 100%;
  font-size: 12px;
`;

TextArea.defaultProps = {
  'data-testid': 'textarea',
  type: 'text'
};

export default TextArea;
