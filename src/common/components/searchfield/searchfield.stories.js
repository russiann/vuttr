import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import SearchField from './searchfield.component';

storiesOf('SearchField', module).add('simple', () => (
  <SearchField onChange={action('onChange')} onSearch={action('onSearch')} />
));
