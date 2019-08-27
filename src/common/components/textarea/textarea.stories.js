import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import TextArea from './textarea.component';

storiesOf('TextArea', module)
  .addParameters({jest: ['textarea']})
  .add('simple', () => <TextArea onChange={action('onChange')} />)
  .add('with placeholdes', () => (
    <TextArea placeholder="Lorem Ipsum" onChange={action('onChange')} />
  ));
