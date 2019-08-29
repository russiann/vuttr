import React from 'react';
import Component from '@reactions/component';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import InputField from './inputfield.component';

storiesOf('InputField', module)
  .addParameters({jest: ['inputfield']})
  .add('type text', () => (
    <InputField
      type="text"
      label="Tool Name"
      placeholder="lorem ipsum dolor sit amet..."
      onChange={action('onchange')}
    />
  ))
  .add('type textarea', () => (
    <InputField
      type="textarea"
      label="Description"
      placeholder="lorem ipsum dolor sit amet..."
      onChange={action('onchange')}
    />
  ))
  .add('type tagfield', () => (
    <Component
      initialState={{
        tags: ['lorem', 'ipsum', 'dolor', 'sit']
      }}
    >
      {({state, setState}) => (
        <InputField
          type="tagfield"
          label="Tags"
          value={state.tags}
          placeholder="foo, bar, buzz"
          onChange={tags => setState({tags})}
        />
      )}
    </Component>
  ))
  .add('with error message', () => (
    <InputField
      type="text"
      label="Tool Name"
      placeholder="lorem ipsum dolor sit amet..."
      onChange={action('onchange')}
      errorMessage="Required!"
    />
  ));
