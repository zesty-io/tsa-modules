import type { Preview } from "@storybook/html";
import {
	INITIAL_VIEWPORTS,
	MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";
import { withConsole } from "@storybook/addon-console";

// import '../bootstrap/bootstrap.bundle.js';
import "../src/styles/scss/bootstrap.scss";

import "../src/styles/variables.css";
import "../src/styles/index.css";

import { LocalNeedModule } from "../src/modules/local-need/local-need-module";
import { LocalNeedsModule } from "../src/modules/local-needs/local-needs-module";
import { LightboxModule } from "../src/features/common/lightbox/lightbox-module";
import { StatsModule } from "../src/features/common/stats/stats-module";
import { StatsImageCardModule } from "../src/features/common/stats-image-card/stats-image-card";

import { HeroModule } from "../src/features/common/hero/hero-module";

import { HeaderModule } from "../src/features/common/header/header-module";
import { HeaderLocationModule } from "../src/features/common/header-location/header-location-module";

import { TSAServiceItemModule } from "../src/modules/service-item/service-item";
import { TSAEventsSingleModule } from "../src/modules/events-single/events-single";
import { TSAEventsListModule } from "../src/modules/events-list/events-list";
import { MapHeaderModule } from "../src/modules/map-header/map-header-module";
import { TSAImageTextModule } from "../src/features/common/image-text/image-text";
import { TSAImageTextRightModule } from "../src/features/common/image-text-right/image-text-right";
import { TSAImageTextTopModule } from "../src/features/common/image-text-top/image-text-top";

import { TSATextWithIconComponent } from "../src/components/text-with-icon/text-with-icon";
import { SwitchComponent } from "../src/components/switch/switch";
import { SearchBarModule } from "../src/modules/search-bar/search-bar-module";
import { StatsNumberModule } from "../src/modules/stats-number/stats-number";
import { SelectModule } from "../src/components/select/select";
import { TSAServicesModule } from "../src/modules/services-list/services-list";
import { TSAStoriesSingleModule } from "../src/features/common/stories-single/stories-single";
import { DropdownComponent } from "../src/components/dropdown/dropdown";
import { DropdownItemComponent } from "../src/components/dropdown/dropdown-item";
import { AccordionItemComponent } from "../src/components/accordion-item/accordion-item";
import { PaginatedListModule } from "../src/features/common/paginated-list/paginated-list";
import { StoriesModule } from "../src/features/common/stories/stories";
import { ImageTextListModule } from "../src/modules/image-text-list/image-text-list";
import { NewsArchiveHeaderModule } from "../src/modules/news-archive-header/news-archive-header";
import { HeroTextModule } from "../src/modules/hero-text/hero-text-module";
import { EventsSingleDetailModule } from "../src/modules/event-single-detail/event-single-detail";
import { EventSingleContentModule } from "../src/modules/event-single-content/event-single-content";
import { EventSingleHeaderModule } from "../src/modules/event-single-header/event-single-header";
import { TSAOtherEventsListModule } from "../src/modules/other-events-list/other-events-list";
import { TSAJumpToSectionModule } from "../src/modules/jump-to-section/jump-to-section";
import { TextWithIconListModule } from "../src/modules/text-with-icon-list/text-with-icon-list";
import { ImageBoxTextModule } from "../src/modules/image-box-text/image-box-text";
import { ImageTextBoxListModule } from "../src/modules/image-text-box-list/image-text-box-list";
import { ReadMoreCardModule } from "../src/modules/read-more-card/read-more-card";
import { ReadMoreCardListModule } from "../src/modules/read-more-card-list/read-more-card-list";
import { FindHelpModule } from "../src/modules/find-help-modal/find-help-modal";

import { MainWaysToGiveModule } from "../src/features/ways-to-give/main-ways-to-give/main-ways-to-give";
import { MoreWayToGiveAccordionModule } from "../src/features/ways-to-give/more-ways-to-give/more-ways-to-give";

// *** National ***
// Contacts
import {
	ContactHQ,
	ContactHQModule,
} from "../src/features/national/contact/contact-hq/contact-hq";

customElements.define("hero-module", HeroModule);
customElements.define("local-need-module", LocalNeedModule);
customElements.define("local-needs-module", LocalNeedsModule);
customElements.define("stats-module", StatsModule);
customElements.define("stat-image-card-module", StatsImageCardModule);
customElements.define("lightbox-module", LightboxModule);
customElements.define("header-module", HeaderModule);
customElements.define("header-location-module", HeaderLocationModule);
customElements.define("tsa-image-text-module", TSAImageTextModule);
customElements.define("tsa-image-text-right-module", TSAImageTextRightModule);

customElements.define("tsa-text-with-icon", TSATextWithIconComponent);
customElements.define("tsa-switch", SwitchComponent);
customElements.define("search-bar", SearchBarModule);
customElements.define("stats-number", StatsNumberModule);
customElements.define("tsa-select", SelectModule);
customElements.define("tsa-services", TSAServicesModule);
customElements.define("tsa-stories-single", TSAStoriesSingleModule);
customElements.define("tsa-dropdown", DropdownComponent);
customElements.define("tsa-dropdown-item", DropdownItemComponent);
customElements.define("service-item", TSAServiceItemModule);
customElements.define("accordion-item", AccordionItemComponent);
customElements.define("tsa-events-single", TSAEventsSingleModule);
customElements.define("tsa-events-list", TSAEventsListModule);
customElements.define("tsa-paginated-list", PaginatedListModule);
customElements.define("tsa-stories", StoriesModule);
customElements.define("tsa-image-text-top-module", TSAImageTextTopModule);
customElements.define("tsa-image-text-list", ImageTextListModule);
customElements.define("tsa-news-archive-header", NewsArchiveHeaderModule);
customElements.define("tsa-hero-text", HeroTextModule);
customElements.define("tsa-event-detail", EventsSingleDetailModule);
customElements.define("tsa-event-single-content", EventSingleContentModule);
customElements.define("tsa-event-single-header", EventSingleHeaderModule);
customElements.define("tsa-other-events", TSAOtherEventsListModule);
customElements.define("tsa-main-ways-to-give", MainWaysToGiveModule);
customElements.define(
	"tsa-more-ways-to-give-accordion",
	MoreWayToGiveAccordionModule,
);
customElements.define("tsa-jump-to-section", TSAJumpToSectionModule);
customElements.define("tsa-text-with-icon-list", TextWithIconListModule);
customElements.define("tsa-image-text-box", ImageBoxTextModule);
customElements.define("tsa-image-text-box-list", ImageTextBoxListModule);
customElements.define("read-more-card", ReadMoreCardModule);
customElements.define("tsa-read-more-card-list", ReadMoreCardListModule);
customElements.define("tsa-find-help", FindHelpModule);

customElements.define("map-header-module", MapHeaderModule);

// *** National ***
// Contact
customElements.define("tsa-contact-hq", ContactHQModule);

// register();

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		viewport: {
			viewports: {
				...INITIAL_VIEWPORTS,
				...MINIMAL_VIEWPORTS,
			},
			defaultViewport: "iphone13pro",
		},
	},
	decorators: [(storyFn, context) => withConsole()(storyFn)(context)],
};

export default preview;
