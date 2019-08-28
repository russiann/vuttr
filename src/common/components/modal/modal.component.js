/* eslint-disable react/jsx-no-undef */
import React, {useEffect} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

/**
|--------------------------------------------------
| Elements
|--------------------------------------------------
*/

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  animation-name: appear;
  animation-duration: 300ms;

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Dialog = styled.div`
  border-radius: 3px;
  width: 100%;
  max-width: 550px;
  background: white;
  position: relative;
  margin: 0 20px;
  max-height: calc(100vh - 40px);
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation-name: slide-in;
  animation-duration: 0.4s;
  animation-timing-function: ease;

  @keyframes slide-in {
    from {
      transform: translateY(150px);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #f5f5f5;
  justify-content: space-between;
`;

const Close = styled.div`
  cursor: pointer;
  padding: 1rem;
  margin: -1rem -1rem -1rem auto;
  color: #d0d0d0;
  transition: color 0.2s ease;

  :hover {
    color: #bdbdbd;
  }
`;

const Body = styled.div`
  overflow: auto;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  margin: 0;
  color: #ff6007;
`;

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/**
|--------------------------------------------------
| Block
|--------------------------------------------------
*/

const Modal = ({isVisible = false, title, onClose, children, ...props}) => {
  useEffect(() => {
    if (!isVisible) return;

    const keydownHandler = ({keyCode}) => {
      if (!isVisible || keyCode !== 27) return;
      onClose();
    };

    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  if (!isVisible) return null;

  /**
   * The stopPropagation below is a simple
   * way (hack) to avoid modal to close
   * when click inside modal content. :)
   */

  return (
    <Container onClick={onClose} {...props}>
      <Dialog onClick={e => e.stopPropagation()}>
        <Header>
          <Title>{title}</Title>
          <Close onClick={onClose}>
            <CloseIcon />
          </Close>
        </Header>
        <Body>
          <Content>{children}</Content>
        </Body>
      </Dialog>
    </Container>
  );
};

Modal.defaultProps = {
  isVisible: false,
  title: '',
  onClose: () => {}
};

Modal.propTypes = {
  isVisible: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default React.memo(Modal);
