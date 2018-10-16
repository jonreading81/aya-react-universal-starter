import React from 'react';
import { storiesOf } from '@storybook/react';
import { ExampleBox } from '../../src/components/presentation';

storiesOf('Button', module)
  .add('with text', () => (
    <ExampleBox />
  ));
