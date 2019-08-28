import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Checkbox from './checkbox.component';

storiesOf('Checkbox', module)
  .addParameters({jest: ['checkbox']})
  .add('checked', () => <Checkbox checked onChange={action('onChange')} />)
  .add('non checked', () => <Checkbox onChange={action('onChange')} />)
  .add('with label', () => (
    <label>
      <Checkbox onChange={action('onChange')} />
      <span style={{marginLeft: 10}}>Lorem ipsum dolor sit</span>
    </label>
  ));
