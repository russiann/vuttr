import React from 'react';
import Component from '@reactions/component';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import TagField from './tagfield.component';

const tags = ['lorem', 'ipsum', 'dolor', 'sit'];

storiesOf('TagField', module)
  .add('simple', () => <TagField value={tags} onChange={action('onChange')} />)
  .add('with placeholdes', () => (
    <Component
      initialState={{
        tags: ['lorem', 'ipsum', 'dolor', 'sit']
      }}
    >
      {({state, setState}) => (
        <TagField value={state.tags} onChange={tags => setState({tags})} />
      )}
    </Component>
  ));
