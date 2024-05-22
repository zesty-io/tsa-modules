import './events-list.css';

const evenstListTemplate = document.createElement('template');

const eventsListStyle = new CSSStyleSheet();

eventsListStyle.replaceSync(`
  slot {
    display: grid;
    gap: 40px 40px;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 35px;
  }

  @media (max-width: 769px) {
    slot {
      display: grid;
      gap: 40px 40px;
      grid-template-columns: repeat(1, 1fr);
      margin-top: 35px;
    }
}

`);


export class TSAEventsListModule extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});

    evenstListTemplate.innerHTML = `
      <div class="events-list">
        <slot></slot>
      </div>
    `
  }

  connectedCallback() {
    if(this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [eventsListStyle];
      this.shadowRoot.appendChild(evenstListTemplate.content.cloneNode(true));
    }
  }
}

export interface TSAEventsListProps {
  title?: string
}

export const TSAEventsList = ({title}: TSAEventsListProps) => {
  return `
    <h1 class="tsa-title">${title}</h1>
    <tsa-events-list items-per-page="3">
    <tsa-stories-single>
        <h2 slot="heading">[FPO] Title</h2>
        <div class="card__content" slot="content"><p>Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p></div>
        <span class="card__date" data-date="2024-05-03" slot="date"></span>
        <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
        <a slot="link" href="/" class="btn btn--small btn--dark--outline btn--fullWidth">View Event</a>   
    </tsa-stories-single>
    <tsa-stories-single>
        <h2 slot="heading">[FPO] Title</h2>
        <div class="card__content" slot="content"><p>Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p></div>
        <span class="card__date" data-date="2024-05-03" slot="date"></span>
        <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
        <a slot="link" href="/" class="btn btn--small btn--dark--outline btn--fullWidth">View Event</a>   
    </tsa-stories-single>
    <tsa-stories-single>
        <h2 slot="heading">[FPO] Title</h2>
        <div class="card__content" slot="content"><p>Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p></div>
        <span class="card__date" data-date="2024-05-03" slot="date"></span>
        <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
        <a slot="link" href="/" class="btn btn--small btn--dark--outline btn--fullWidth">View Event</a>   
    </tsa-stories-single>
    <tsa-stories-single>
        <h2 slot="heading">[FPO] Title</h2>
        <div class="card__content" slot="content"><p>Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p></div>
        <span class="card__date" data-date="2024-05-03" slot="date"></span>
        <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
        <a slot="link" href="/" class="btn btn--small btn--dark--outline btn--fullWidth">View Event</a>   
    </tsa-stories-single>
    <tsa-stories-single>
        <h2 slot="heading">[FPO] Title</h2>
        <div class="card__content" slot="content"><p>Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p></div>
        <span class="card__date" data-date="2024-05-03" slot="date"></span>
        <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
        <a slot="link" href="/" class="btn btn--small btn--dark--outline btn--fullWidth">View Event</a>   
    </tsa-stories-single>
    <tsa-stories-single>
        <h2 slot="heading">[FPO] Title</h2>
        <div class="card__content" slot="content"><p>Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p></div>
        <span class="card__date" data-date="2024-05-03" slot="date"></span>
        <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
        <a slot="link" href="/" class="btn btn--small btn--dark--outline btn--fullWidth">View Event</a>   
    </tsa-stories-single>
    <tsa-stories-single>
        <h2 slot="heading">[FPO] Title</h2>
        <div class="card__content" slot="content"><p>Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p></div>
        <span class="card__date" data-date="2024-05-03" slot="date"></span>
        <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
        <a slot="link" href="/" class="btn btn--small btn--dark--outline btn--fullWidth">View Event</a>   
    </tsa-stories-single>
    <tsa-stories-single>
        <h2 slot="heading">[FPO] Title</h2>
        <div class="card__content" slot="content"><p>Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p></div>
        <span class="card__date" data-date="2024-05-03" slot="date"></span>
        <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
        <a slot="link" href="/" class="btn btn--small btn--dark--outline btn--fullWidth">View Event</a>   
    </tsa-stories-single>
    <tsa-stories-single>
        <h2 slot="heading">[FPO] Title</h2>
        <div class="card__content" slot="content"><p>Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p></div>
        <span class="card__date" data-date="2024-05-03" slot="date"></span>
        <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
        <a slot="link" href="/" class="btn btn--small btn--dark--outline btn--fullWidth">View Event</a>   
    </tsa-stories-single>
    </tsa-events-list>
    <div id="tui-pagination-container"></div>
  `
}

