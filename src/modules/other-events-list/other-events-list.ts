const otherEventsListStylesheet = new CSSStyleSheet();

otherEventsListStylesheet.replaceSync(`
    slot {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }
    .tsa-other-events-list h3 {
      font-size: 4rem;
      font-weight: 500;
      font-family: "Cinzel", serif;
      margin-bottom: 1rem;
    }

    @media (max-width: 769px) {
      slot {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  `);

export class TSAOtherEventsListModule extends HTMLElement {
  private heading: string | null;
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.heading = this.getAttribute('heading');

  }

  connectedCallback() {
    if(this.shadowRoot) {
      // this.heading = this.getAttribute('heading');
      this.shadowRoot.innerHTML = `
        <div class="tsa-other-events-list">
          <h3>${this.heading}</h3>
          <slot></slot>
        </div>
      `;
      this.shadowRoot.adoptedStyleSheets = [otherEventsListStylesheet];
    }
  }
}

export interface TSAOtherEventsListProps {
  heading?: string
}

export const TSAOtherEventsList = ({heading}: TSAOtherEventsListProps) => {
  return`
    <tsa-other-events heading="${heading}">
      <tsa-stories-single>
        <h2 slot="heading">Event Title</h2>
        <div class="card__content" slot="content"><p>Address</p></div>
        <span class="card__date" data-date="2024-05-03" slot="date"></span>
        <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
        <a slot="link" href="/" class="btn btn--small btn--dark--outline btn--fullWidth">View Event</a>   
      </tsa-stories-single>
      <tsa-stories-single>
        <h2 slot="heading">Event Title</h2>
        <div class="card__content" slot="content"><p>Address</p></div>
        <span class="card__date" data-date="2024-05-03" slot="date"></span>
        <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
        <a slot="link" href="/" class="btn btn--small btn--dark--outline btn--fullWidth">View Event</a>   
      </tsa-stories-single>
      <tsa-stories-single>
        <h2 slot="heading">Event Title</h2>
        <div class="card__content" slot="content"><p>Address</p></div>
        <span class="card__date" data-date="2024-05-03" slot="date"></span>
        <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
        <a slot="link" href="/" class="btn btn--small btn--dark--outline btn--fullWidth">View Event</a>   
      </tsa-stories-single>
    </tsa-other-events>
  `
}