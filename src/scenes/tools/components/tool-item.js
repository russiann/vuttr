import React from 'react';

const ToolItem = ({title, link, description, tags}) => {
  return (
    <div>
      <a href={link}>{title}</a>
      <div>{description}</div>
      <div>{tags && tags.map(tag => <span>#{tag + ' '}</span>)}</div>
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
