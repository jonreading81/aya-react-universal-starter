import React from 'react';
import { storiesOf } from '@storybook/react';
import { ExampleBox } from '../../src/components/presentation';

storiesOf('Example Box', module)
  .add('default', () => (
    <ExampleBox />
  ));
