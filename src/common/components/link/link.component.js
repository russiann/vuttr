import styled from '@emotion/styled';

const Link = styled.a`
  color: ${p => p.theme.colors.primary};
`;

Link.defaultProps = {
  theme: {
    colors: {
      primary: '#ff6007'
    }
  }
};

export default Link;
