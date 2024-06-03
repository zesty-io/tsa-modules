import type { Preview } from '@storybook/html';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withConsole, setConsoleOptions } from '@storybook/addon-console';

import '../bootstrap/bootstrap.bundle';
import '../bootstrap/bootstrap.min.css';

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
import {TSAEventsSingleModule} from '../src/modules/events-single/events-single';
import {TSAEventsListModule} from '../src/modules/events-list/events-list';
import { MapHeaderModule } from '../src/modules/map-header/map-header-module';
import { TSAImageTextModule } from '../src/modules/image-text/image-text';
import { TSAImageTextRightModule } from '../src/modules/image-text-right/image-text-right';

import { TSATextWithIconComponent } from '../src/components/text-with-icon/text-with-icon';
import { SwitchComponent } from '../src/components/switch/switch';
import { SearchBarModule } from '../src/modules/search-bar/search-bar-module';
import { StatsNumberModule } from '../src/modules/stats-number/stats-number';
import { SelectModule } from '../src/components/select/select';
import { TSAServicesModule } from '../src/modules/services-list/services-list';
import { TSAStoriesSingleModule } from '../src/modules/stories-single/stories-single';
import { DropdownComponent } from '../src/components/dropdown/dropdown';
import { DropdownItemComponent } from '../src/components/dropdown/dropdown-item';
import { AccordionItemComponent } from '../src/components/accordion-item/accordion-item';
import { PaginatedListModule } from '../src/modules/paginated-list/paginated-list';
import { StoriesModule } from '../src/modules/stories/stories';
import { TSAImageTextTopModule } from '../src/modules/image-text-top/image-text-top';
import { ImageTextListModule } from '../src/modules/image-text-list/image-text-list';
import { NewsArchiveHeaderModule } from '../src/modules/news-archive-header/news-archive-header';
import { HeroTextModule } from '../src/modules/hero-text/hero-text-module';

customElements.define('hero-module', HeroModule);
customElements.define('local-need-module', LocalNeedModule);
customElements.define('local-needs-module', LocalNeedsModule);
customElements.define('stats-module', StatsModule);
customElements.define('stat-image-card-module', StatsImageCardModule);
customElements.define('lightbox-module', LightboxModule);
customElements.define('header-module', HeaderModule);
customElements.define('header-location-module', HeaderLocationModule);
customElements.define('tsa-image-text-module', TSAImageTextModule);
customElements.define('tsa-image-text-right-module', TSAImageTextRightModule);

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
customElements.define('accordion-item', AccordionItemComponent);
customElements.define('tsa-events-single', TSAEventsSingleModule);
customElements.define('tsa-events-list', TSAEventsListModule);
customElements.define('tsa-paginated-list', PaginatedListModule);
customElements.define('tsa-stories', StoriesModule);
customElements.define('tsa-image-text-top-module', TSAImageTextTopModule);
customElements.define('tsa-image-text-list', ImageTextListModule);
customElements.define('tsa-news-archive-header', NewsArchiveHeaderModule);
customElements.define('tsa-hero-text', HeroTextModule);

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
