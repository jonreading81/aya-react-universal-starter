import { configure } from '@storybook/react';

function loadStories() {
  require('./stories/exampleBox.js');
}

configure(loadStories, module);
