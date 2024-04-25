import type { Preview } from '@storybook/html';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

import '../src/styles/index.css';
import '../src/styles/variables.css';

import { LocalNeedModule } from '../src/modules/local-need/local-need-module';
import { LocalNeedsModule } from '../src/modules/local-needs/local-needs-module';
import { LightboxModule } from '../src/modules/lightbox/lightbox-module';
import { StatsModule } from '../src/modules/stats/stats-module';
import { StatsImageCardModule } from '../src/modules/stats-image-card/stats-image-card';
import { ImageButtonTextModule } from '../src/modules/image-button-text/image-button-text-module';
import { HeroModule } from '../src/modules/hero/hero-module';

import { TSACardComponent } from '../src/components/card/card';
import { TSATitleComponent } from '../src/components/title/title';
import { TSATitleWithIconComponent } from '../src/components/title-with-icon/title-with-icon';
import { TSATextComponent } from '../src/components/text/text';
import { TSATextWithIconComponent } from '../src/components/text-with-icon/text-with-icon';
import { SearchBarModule } from '../src/modules/search-bar/search-bar-module';
import { StatsNumberModule } from '../src/modules/stats-number/stats-number';

customElements.define('hero-module', HeroModule);
customElements.define('local-need-module', LocalNeedModule);
customElements.define('local-needs-module', LocalNeedsModule);
customElements.define('stats-module', StatsModule);
customElements.define('stat-image-card-module', StatsImageCardModule);
customElements.define('image-button-text-module', ImageButtonTextModule);
customElements.define('lightbox-module', LightboxModule);

customElements.define('tsa-card', TSACardComponent);
customElements.define('tsa-title', TSATitleComponent);
customElements.define('tsa-title-with-icon', TSATitleWithIconComponent);
customElements.define('tsa-text-with-icon', TSATextWithIconComponent);
customElements.define('tsa-text', TSATextComponent);
customElements.define('search-bar', SearchBarModule);
customElements.define('stats-number', StatsNumberModule);

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
