import styled from '@emotion/styled';

const Button = styled.button`
  font-family: 'Ubuntu', sans-serif;
  font-size: 12px;
  color: ${p => p.theme.textColor};
  background-color: ${p => p.theme.colors.blazeorange};
  text-align: center;
  text-transform: uppercase;
  padding: 10px 50px;
  border: none;
  border-radius: 30px;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;

Button.defaultProps = {
  'data-testid': 'button',
  theme: {
    textColor: '#fff',
    colors: {
      blazeorange: '#ff6007'
    }
  }
};

export default Button;
