import React, {Fragment} from 'react';

import {storiesOf} from '@storybook/react';

import Tag from './tag.component';

const tags = ['#node', '#javascript', '#frontend'];

storiesOf('Tag', module)
  .addParameters({jest: ['tag']})
  .add('simple', () => (
    <Fragment>
      {tags.map((tag, idx) => (
        <Tag key={idx}>{tag}</Tag>
      ))}
    </Fragment>
  ));
