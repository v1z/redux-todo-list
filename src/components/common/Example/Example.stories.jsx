import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Example } from './Example';

storiesOf('Example', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: {
      text: `
      Redux connected component.

      A very simple example of addon info
    `,
    },
  })
  .add(
    'Default',
    () => (
      <Example clickHandler={action('clicked')}>
        {text('Button text', 'Example button text')}
      </Example>
    ),
    {
      notes: 'A very simple example of addon notes',
    }
  );
