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

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/**
|--------------------------------------------------
| Scene
|--------------------------------------------------
*/

const ToolsScene = ({data, filters, setSearchText, toggleFilterOnlyInTags}) => {
  return (
    <div>
      <h1>vuttr</h1>
      <h4>Very Useful Tools to Remember</h4>

      <Toolbar>
        <SearchField onSearch={value => setSearchText(value)} />
        <Checkbox
          label="Search in tags only"
          checked={filters.filterOnlyInTags}
          onChange={() => toggleFilterOnlyInTags()}
          css={tagsCheckcoxStyle}
        />
        <Button> add </Button>
      </Toolbar>

      <div>
        {data.map(tool => (
          <ToolItem
            key={tool.id}
            title={tool.title}
            link={tool.link}
            description={tool.description}
            tags={tool.tags}
          />
        ))}
      </div>
    </div>
  );
};

ToolsScene.defaultProps = {
  data: []
};

export default ToolsScene;
