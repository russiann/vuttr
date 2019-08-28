import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Modal from './modal.component';

storiesOf('Modal', module)
  .addParameters({jest: ['modal']})
  .add('simple', () => (
    <Modal title="Simple Modal" isVisible onClose={action('onClose')}>
      <p>Dummy text...</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Modal>
  ));
