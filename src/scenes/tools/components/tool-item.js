/* eslint-disable react/jsx-no-undef */
import React from 'react';
import styled from '@emotion/styled';
import Card from '../../../common/components/card/card.component';
import Link from '../../../common/components/link/link.component';
import Tag from '../../../common/components/tag/tag.component';

/**
|--------------------------------------------------
| Elements
|--------------------------------------------------
*/

const Description = styled.div`
  color: #bdbdbd;
  margin: 10px 0;
`;

const Tags = styled.div``;

/**
|--------------------------------------------------
| Block
|--------------------------------------------------
*/

const ToolItem = ({title, link, description, tags, onTagClick, ...props}) => {
  return (
    <Card>
      <Link href={link}>{title}</Link>
      <Description>{description}</Description>
      <If condition={tags.length}>
        <Tags>
          {tags.map((tag, idx) => (
            <Tag key={idx} onClick={() => onTagClick(tag)}>
              #{tag}
            </Tag>
          ))}
        </Tags>
      </If>
    </Card>
  );
};

ToolItem.defaultProps = {
  title: '',
  link: '',
  description: '',
  tags: []
};

export default ToolItem;
