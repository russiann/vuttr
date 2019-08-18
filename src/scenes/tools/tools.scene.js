import React from 'react';
import ToolItem from './components/tool-item';
import styled from '@emotion/styled';
import {css} from '@emotion/core';

import SearchField from '../../common/components/searchfield/searchfield.component';
import Checkbox from '../../common/components/checkbox/checkbox.component';
import Button from '../../common/components/button/button.component';

/**
|--------------------------------------------------
| Custom Styles
|--------------------------------------------------
*/

const tagsCheckcoxStyle = css`
  flex: 1;
  margin-left: 15px;
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

const Title = styled.div`
  font-size: 23px;
  letter-spacing: 6px;
  display: flex;
  align-items: center;
`;
const Subtitle = styled.div``;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

/**
|--------------------------------------------------
| Partials
|--------------------------------------------------
*/

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
| Scene
|--------------------------------------------------
*/

const ToolsScene = ({
  data,
  filters,
  find,
  setSearchText,
  toggleFilterOnlyInTags
}) => {
  return (
    <Container>
      <Header />

      <Toolbar>
        <SearchField
          value={filters.searchText}
          onChange={({target}) => setSearchText(target.value)}
          onSearch={() => find()}
        />
        <Checkbox
          label="Search in tags only"
          checked={filters.filterOnlyInTags}
          onChange={() => toggleFilterOnlyInTags()}
          css={tagsCheckcoxStyle}
        />
        <Button> add </Button>
      </Toolbar>

      {data.map(tool => (
        <ToolItem
          key={tool.id}
          title={tool.title}
          link={tool.link}
          description={tool.description}
          tags={tool.tags}
          onTagClick={tag => {
            setSearchText(tag);
            find();
          }}
        />
      ))}
    </Container>
  );
};

ToolsScene.defaultProps = {
  data: [],
  filters: {},
  setSearchText: '',
  toggleFilterOnlyInTags: () => {}
};

export default ToolsScene;
