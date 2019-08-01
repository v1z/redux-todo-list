import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from './Container';

storiesOf('ui/Container', module)
  .addParameters({
    info: {
      text: 'Default component for base content wrapping',
    },
  })
  .add('Default', () => (
    <div style={{ backgroundColor: 'lightblue' }}>
      <Container>
        <div style={{ padding: '20px', backgroundColor: '#ffdd2d' }}>Container content</div>
      </Container>
    </div>
  ));
