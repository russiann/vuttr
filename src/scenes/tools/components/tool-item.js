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

const TrashIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

const DeleteButton = styled(TrashIcon)`
  position: absolute;
  right: 10px;
  top: 10px;
  color: #d0d0d0;
  cursor: pointer;
  transition: color 0.2s ease;

  :hover {
    color: #bdbdbd;
  }
`;

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
    <Card {...props}>
      <DeleteButton />
      <Link href={link} target="_blank">
        {title}
      </Link>
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
