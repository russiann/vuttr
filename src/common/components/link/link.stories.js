import React from 'react';

import {storiesOf} from '@storybook/react';

import Link from './link.component';

storiesOf('link', module)
  .addParameters({jest: ['link']})
  .add('simple', () => <Link href="http://www.google.com">Google</Link>);
