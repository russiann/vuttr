import React from 'react';
import Component from '@reactions/component';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import SearchField from './searchfield.component';

storiesOf('SearchField', module)
  .addParameters({jest: ['searchfield']})
  .add('simple', () => (
    <Component initialState={{text: ''}}>
      {({state, setState}) => (
        <SearchField
          value={state.text}
          onChange={ev => {
            setState({text: ev.target.value});
            action('onChange')(ev);
          }}
          onSearch={action('onSearch')}
        />
      )}
    </Component>
  ))
  .add('with placeholder', () => (
    <Component initialState={{text: ''}}>
      {({state, setState}) => (
        <SearchField
          value={state.text}
          placeholder="Search in products..."
          onChange={ev => {
            setState({text: ev.target.value});
            action('onChange')(ev);
          }}
          onSearch={action('onSearch')}
        />
      )}
    </Component>
  ));
