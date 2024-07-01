import '../../../components/title/title.css';
import './stories.scss';

const storiesTemplate = document.createElement('template');

const storiesStyle = new CSSStyleSheet();

storiesStyle.replaceSync(`
  ::slotted(div) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  @media (max-width: 769px){
    ::slotted(div) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;
    }
  }
`);

export class StoriesModule extends HTMLElement {
  private listTitle: string | null;
  private listLinkText: string | null;
  private listLink: string | null;

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.listTitle = this.getAttribute('listTitle');
    this.listLinkText = this.getAttribute('listLinkText');
    this.listLink = this.getAttribute('link');

    storiesTemplate.innerHTML = `
      <div class="stories-list">
        <slot name="title"></slot>
        <slot></slot>
        <slot name="link"></slot>
      </div>
    `;
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [storiesStyle];
      this.shadowRoot.appendChild(storiesTemplate.content.cloneNode(true));
    }
  }
}

const date = new Date();

export interface StoriesProp {
  listTitle?: string;
  listLinkText?: string;
  listLink?: string;
}

export const Stories = ({ listTitle, listLinkText, listLink }: StoriesProp) => {
  return `
    <tsa-stories listTitle="${listTitle}" listLinkText="${listLinkText}" link="${listLink}">
      <h1 slot="title" class="tsa-title">${listTitle}</h1>
      <div>
      <tsa-stories-single>
          <h2 slot="heading">[FPO] Title</h2>
          <div class="card__content" slot="content"><p>Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p></div>
          <span class="card__date" data-date="2024-05-03" slot="date"></span>
          <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
          <a slot="link" href="#" class="btn btn--small btn--dark--outline">[FPO] Read More1</a>   
      </tsa-stories-single>
      <tsa-stories-single>
          <h2 slot="heading">[FPO] Title</h2>
          <div class="card__content" slot="content"><p>Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p></div>
          <span class="card__date" data-date="2024-05-03" slot="date"></span>
          <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
          <a slot="link" href="#" class="btn btn--small btn--dark--outline">[FPO] Read More1</a>   
      </tsa-stories-single>
      <tsa-stories-single>
          <h2 slot="heading">[FPO] Title</h2>
          <div class="card__content" slot="content"><p>Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p></div>
          <span class="card__date" data-date="2024-05-03" slot="date"></span>
          <img slot="imageURL" src="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" alt="sample image" />
          <a slot="link" href="#" class="btn btn--small btn--dark--outline">[FPO] Read More1</a>   
      </tsa-stories-single>
      </div>
      <div slot="link" class="stories-link"><a href="${listLink}">${listLinkText}</a></div>
    </tsa-stories>
  `;
};
