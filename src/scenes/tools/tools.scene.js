import React from 'react';
import ToolItem from './components/tool-item';

const ToolsScene = ({data}) => {
  return (
    <div>
      <h1>vuttr</h1>
      <h4>Very Useful Tools to Remember</h4>
      <div>
        <input type="text" placeholder="search" />
        <input type="checkbox" /> Search in tags only
        <button> ➕add </button>
      </div>

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
