import React from 'react';

const ToolItem = ({title, link, description, tags, ...props}) => {
  return (
    <div>
      <a href={link}>{title}</a>
      <div>{description}</div>
      <div>
        {tags && tags.map((tag, idx) => <span key={idx}>#{tag + ' '}</span>)}
      </div>
      <hr />
    </div>
  );
};

ToolItem.defaultProps = {
  title: '',
  link: '',
  description: '',
  tags: []
};

export default ToolItem;
