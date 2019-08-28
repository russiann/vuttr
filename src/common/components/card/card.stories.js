import React from 'react';

import {storiesOf} from '@storybook/react';

import Card from './card.component';

storiesOf('Card', module)
  .addParameters({jest: ['card']})
  .add('with text', () => <Card>Dummy Text</Card>);
