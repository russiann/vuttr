import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import TextField from './textfield.component';

storiesOf('TextField', module)
  .addParameters({jest: ['textfield']})
  .add('simple', () => <TextField onChange={action('onChange')} />)
  .add('with placeholdes', () => (
    <TextField placeholder="Lorem Ipsum" onChange={action('onChange')} />
  ));
