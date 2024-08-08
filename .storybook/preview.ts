import type { Preview } from "@storybook/html";
import {
	INITIAL_VIEWPORTS,
	MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";
import { withConsole } from "@storybook/addon-console";

// Styles
import "../src/styles/index.css";
import "../src/styles/variables.css";
import "../bootstrap/bootstrap.bundle";
import "../src/styles/scss/bootstrap.scss";

// Modules
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

// Components
import { SocialLinkComponent } from "../src/components/social-link/social-link";

// Common Modules
import { HeaderLocationIndicatorModule } from "../src/features/common/header-location-indicator/header-location-indicator";
import { HeaderSearchModule } from "../src/features/common/header-search/header-search";
import { FindCTAModule } from "../src/features/common/find-cta-flow/find-cta-flow";
import { FooterModule } from "../src/features/common/footer/footer";
import { HamburgerMenuModule } from "../src/features/common/hamburger-menu/hamburger-menu";
import { MissionStatementModule } from "../src/features/common/mission-statement/mission-statement";
import { StatCardComponent } from "../src/features/common/stat-card/stat-card";

// National Modules
import { ContactHQModule } from "../src/features/national/contact/contact-hq/contact-hq";
import { ContactUsModule } from "../src/features/national/contact/contact-us/contact-us";
import { PartnershipOpportunitiesHeaderModule } from "../src/features/national/corporate-sponsorships/partnership-opportunities/partnership";
import { PartnershipOpportunitiesCardModule } from "../src/features/national/corporate-sponsorships/corporate-sponsorship-card/partnership-card";

// Territories / Division Modules
import { AnnualReportModule } from "../src/features/territories/sector/annual-reports/annual-report";
import { ServiceCardModule } from "../src/features/territories/sector/service-card/service-card";
import { TeamPreviewModule } from "../src/features/territories/sawso-homepage/sawso-team-preview/sawso-team-preview";

// Define custom elements
const customElementsMap = {
	"hero-module": HeroModule,
	"local-need-module": LocalNeedModule,
	"local-needs-module": LocalNeedsModule,
	"stats-module": StatsModule,
	"stat-image-card-module": StatsImageCardModule,
	"lightbox-module": LightboxModule,
	"header-module": HeaderModule,
	"header-location-module": HeaderLocationModule,
	"tsa-image-text-module": TSAImageTextModule,
	"tsa-image-text-right-module": TSAImageTextRightModule,
	"tsa-image-text-top-module": TSAImageTextTopModule,
	"tsa-text-with-icon": TSATextWithIconComponent,
	"tsa-switch": SwitchComponent,
	"search-bar": SearchBarModule,
	"stats-number": StatsNumberModule,
	"tsa-select": SelectModule,
	"tsa-services": TSAServicesModule,
	"tsa-stories-single": TSAStoriesSingleModule,
	"tsa-dropdown-item": DropdownItemComponent,
	"service-item": TSAServiceItemModule,
	"accordion-item": AccordionItemComponent,
	"tsa-events-single": TSAEventsSingleModule,
	"tsa-events-list": TSAEventsListModule,
	"tsa-paginated-list": PaginatedListModule,
	"tsa-stories": StoriesModule,
	"tsa-image-text-list": ImageTextListModule,
	"tsa-news-archive-header": NewsArchiveHeaderModule,
	"tsa-hero-text": HeroTextModule,
	"tsa-event-detail": EventsSingleDetailModule,
	"tsa-event-single-content": EventSingleContentModule,
	"tsa-event-single-header": EventSingleHeaderModule,
	"tsa-other-events": TSAOtherEventsListModule,
	"tsa-main-ways-to-give": MainWaysToGiveModule,
	"tsa-more-ways-to-give-accordion": MoreWayToGiveAccordionModule,
	"tsa-jump-to-section": TSAJumpToSectionModule,
	"tsa-text-with-icon-list": TextWithIconListModule,
	"tsa-image-text-box": ImageBoxTextModule,
	"tsa-image-text-box-list": ImageTextBoxListModule,
	"read-more-card": ReadMoreCardModule,
	"tsa-read-more-card-list": ReadMoreCardListModule,
	"tsa-find-help": FindHelpModule,
	"map-header-module": MapHeaderModule,
	"tsa-header-location-indicator": HeaderLocationIndicatorModule,
	"tsa-header-search": HeaderSearchModule,
	"tsa-find-cta": FindCTAModule,
	"tsa-contact-hq": ContactHQModule,
	"tsa-contact-us": ContactUsModule,
	"tsa-partnership": PartnershipOpportunitiesHeaderModule,
	"tsa-partnership-card": PartnershipOpportunitiesCardModule,
	"tsa-annual-reports": AnnualReportModule,
	"tsa-service-card": ServiceCardModule,
	"tsa-footer": FooterModule,
	"tsa-social-link": SocialLinkComponent,
	"tsa-team-preview": TeamPreviewModule,
	"tsa-burger-menu": HamburgerMenuModule,
	"tsa-mission-statement": MissionStatementModule,
	"tsa-stat-card": StatCardComponent,
};

// biome-ignore lint/complexity/noForEach: This is only for showing the modules
Object.entries(customElementsMap).forEach(([tagName, module]) => {
	if (!customElements.get(tagName)) customElements.define(tagName, module);
});

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
