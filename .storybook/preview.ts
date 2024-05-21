import type { Preview } from '@storybook/html';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withConsole, setConsoleOptions } from '@storybook/addon-console';

import '../src/styles/index.css';
import '../src/styles/variables.css';

import { LocalNeedModule } from '../src/modules/local-need/local-need-module';
import { LocalNeedsModule } from '../src/modules/local-needs/local-needs-module';
import { LightboxModule } from '../src/modules/lightbox/lightbox-module';
import { StatsModule } from '../src/modules/stats/stats-module';
import { StatsImageCardModule } from '../src/modules/stats-image-card/stats-image-card';

import { HeroModule } from '../src/modules/hero/hero-module';
import { HeaderModule } from '../src/modules/header/header-module';
import { HeaderLocationModule } from '../src/modules/header-location/header-location-module';

import { TSAServiceItemModule } from '../src/modules/service-item/service-item';
import { MapHeaderModule } from '../src/modules/map-header/map-header-module';
import { TSAImageTextModule } from '../src/modules/image-text/image-text';

import { TSATextWithIconComponent } from '../src/components/text-with-icon/text-with-icon';
import { SwitchComponent } from '../src/components/switch/switch';
import { SearchBarModule } from '../src/modules/search-bar/search-bar-module';
import { StatsNumberModule } from '../src/modules/stats-number/stats-number';
import { SelectModule } from '../src/components/select/select';
import { TSAServicesModule } from '../src/modules/services-list/services-list';
import { TSAStoriesSingleModule } from '../src/modules/stories-single/stories-single';
import { DropdownComponent } from '../src/components/dropdown/dropdown';
import { DropdownItemComponent } from '../src/components/dropdown/dropdown-item';

customElements.define('hero-module', HeroModule);
customElements.define('local-need-module', LocalNeedModule);
customElements.define('local-needs-module', LocalNeedsModule);
customElements.define('stats-module', StatsModule);
customElements.define('stat-image-card-module', StatsImageCardModule);
customElements.define('lightbox-module', LightboxModule);
customElements.define('header-module', HeaderModule);
customElements.define('header-location-module', HeaderLocationModule);
customElements.define('tsa-image-text-module', TSAImageTextModule);

customElements.define('tsa-text-with-icon', TSATextWithIconComponent);
customElements.define('tsa-switch', SwitchComponent);
customElements.define('search-bar', SearchBarModule);
customElements.define('stats-number', StatsNumberModule);
customElements.define('tsa-select', SelectModule);
customElements.define('tsa-services', TSAServicesModule);
customElements.define('tsa-stories-single', TSAStoriesSingleModule);
customElements.define('tsa-dropdown', DropdownComponent);
customElements.define('tsa-dropdown-item', DropdownItemComponent);
customElements.define('service-item', TSAServiceItemModule);

customElements.define('map-header-module', MapHeaderModule);

// register();

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
  },
  decorators: [(storyFn, context) => withConsole()(storyFn)(context)]
};

export default preview;
