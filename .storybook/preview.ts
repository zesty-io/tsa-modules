import type { Preview } from '@storybook/html';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/styles/variables.css';
import '../src/styles/index.css';

import { LocalNeedModule } from '../src/modules/local-need/local-need-module';
import { LocalNeedsModule } from '../src/modules/local-needs/local-needs-module';
import { HeroModule } from '../src/modules/hero/hero-module';

customElements.define('hero-module', HeroModule);
customElements.define('local-need-module', LocalNeedModule);
customElements.define('local-needs-module', LocalNeedsModule);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS
      },
      defaultViewport: 'iphone14promax'
    }
  }
};

export default preview;
