import type { Preview } from '@storybook/html';
import '../src/styles/variables.css';
import '../src/styles/index.css';

import { HeroModule } from '../src/modules/hero/hero-module';

customElements.define('hero-module', HeroModule);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
