import { configure } from '@storybook/react';

function loadStories() {
  require('./stories/exampleBox.js');
  require('./stories/navigation.js');
}

configure(loadStories, module);
