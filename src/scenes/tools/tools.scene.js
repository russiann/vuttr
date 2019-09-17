import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import PropTypes from 'prop-types';
import ToolItem from './components/tool-item/tool-item.component';
import SearchField from '../../common/components/searchfield/searchfield.component';
import Checkbox from '../../common/components/checkbox/checkbox.component';
import Button from '../../common/components/button/button.component';
import Modal from '../../common/components/modal/modal.component';
import NewScene from '../new';

/**
|--------------------------------------------------
| Custom Styles
|--------------------------------------------------
*/

const tagsCheckboxStyle = css`
  flex: 1;
  margin-left: 15px;
`;

const cancelButtonStyle = css`
  background: #f5f5f5;
  color: #212121;
  border: 1px solid #bdbdbd;
  margin-right: 10px;
`;

/**
|--------------------------------------------------
| Layout Elements
|--------------------------------------------------
*/

const Logo = () => (
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
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const ConfirmModalFooter = styled.div`
  display: flex;
  flex-flow: row-reverse;
`;

const ConfirmModalText = styled.p`
  margin-top: 0;
`;

const Title = styled.div`
  font-size: 23px;
  letter-spacing: 6px;
  display: flex;
  align-items: center;
`;

const Subtitle = styled.div``;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #ff6007;
  border-radius: 2px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Header = () => (
  <HeaderContainer>
    <LogoIcon>
      <Logo />
    </LogoIcon>
    <div>
      <Title>VUTTR</Title>
      <Subtitle>Very Useful Tools to Remember</Subtitle>
    </div>
  </HeaderContainer>
);

/**
|--------------------------------------------------
| State
|--------------------------------------------------
*/

const initialState = {
  data: [],
  searchText: '',
  isFilterOnlyInTags: false,
  setSearchText: '',
  newToolModalOpened: false,
  toggleFilterOnlyInTags: () => {},
  toggleNewToolModal: () => {},
  confirmModal: {
    opened: false,
    tool: {
      title: ''
    }
  },
  remove: () => {},
  openConfirmModal: () => {},
  closeConfirmModal: () => {},
  onTagClick: () => {},
  onSearchText: () => {}
};

/**
|--------------------------------------------------
| Scene
|--------------------------------------------------
*/

const ToolsScene = ({
  data,
  isFilterOnlyInTags,
  newToolModalOpened,
  confirmModal,
  remove,
  toggleFilterOnlyInTags,
  toggleNewToolModal,
  openConfirmModal,
  closeConfirmModal,
  onTagClick,
  onSearchText
}) => {
  return (
    <Container>
      <Header />
      <Toolbar>
        <SearchField onSearch={onSearchText} />
        <Checkbox
          label="Search in tags only"
          checked={isFilterOnlyInTags}
          onChange={() => toggleFilterOnlyInTags()}
          css={tagsCheckboxStyle}
        />
        <Button onClick={toggleNewToolModal}> add </Button>
      </Toolbar>

      {data.map(tool => (
        <ToolItem
          key={tool.id}
          tool={tool}
          onTagClick={onTagClick}
          onRemoveClick={openConfirmModal}
        />
      ))}

      <Modal
        isVisible={newToolModalOpened}
        title="Nova Tool"
        onClose={toggleNewToolModal}
      >
        <NewScene />
      </Modal>

      <Modal
        isVisible={confirmModal.opened}
        title="Remove Tool"
        onClose={closeConfirmModal}
      >
        <ConfirmModalText>
          Are you sure you want to remove {confirmModal.tool.title}?
        </ConfirmModalText>
        <ConfirmModalFooter>
          <Button onClick={remove}>Yes, remove</Button>
          <Button onClick={closeConfirmModal} css={cancelButtonStyle}>
            Cancel
          </Button>
        </ConfirmModalFooter>
      </Modal>
    </Container>
  );
};

ToolsScene.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFilterOnlyInTags: PropTypes.bool.isRequired,
  newToolModalOpened: PropTypes.bool.isRequired,
  confirmModal: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
  toggleFilterOnlyInTags: PropTypes.func.isRequired,
  toggleNewToolModal: PropTypes.func.isRequired,
  openConfirmModal: PropTypes.func.isRequired,
  closeConfirmModal: PropTypes.func.isRequired,
  onTagClick: PropTypes.func.isRequired,
  onSearchText: PropTypes.func.isRequired
};

ToolsScene.defaultProps = initialState;

export default ToolsScene;
