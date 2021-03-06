import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Button from './button.component';

storiesOf('Button', module)
  .addParameters({jest: ['button']})
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ));
