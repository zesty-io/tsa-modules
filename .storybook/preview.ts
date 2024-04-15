import type { Preview } from '@storybook/html';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/styles/variables.css';
import '../src/styles/index.css';

import { LocalNeedModule } from '../src/modules/local-need/local-need-module';
import { LocalNeedsModule } from '../src/modules/local-needs/local-needs-module';
import { LightboxModule } from '../src/modules/lightbox/lightbox-module';
import { StatsModule } from '../src/modules/stats/stats-module';
import { HeroModule } from '../src/modules/hero/hero-module';
import { CardComponent } from '../src/components/card/card';

customElements.define('hero-module', HeroModule);
customElements.define('local-need-module', LocalNeedModule);
customElements.define('local-needs-module', LocalNeedsModule);
customElements.define('stats-module', StatsModule);
customElements.define('lightbox-module', LightboxModule);
customElements.define('card-component', CardComponent);

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
