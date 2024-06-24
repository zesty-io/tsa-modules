import './stat-image-card.css';

const styles = new CSSStyleSheet();

styles.replaceSync(`
    .stat-image-card{
        text-align: center;
        & .stat-image-card__img{
            display: flex;
            align-items: center;
            justify-content: center;
        }

        & .stat-image-card__header{
            margin: 2rem 0;
            & h1{
                font-size: 2rem;
                margin: 0;
            }
        }
    }
`);

export class StatsImageCardModule extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('title');
    const imageUrl = this.getAttribute('imageUrl');

    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [styles];
      this.shadowRoot.innerHTML = `
      <div class="stat-image-card">
        <div class="stat-image-card__img">
            <img src="${imageUrl}" />
        </div>
        <div class="stat-image-card__header">
            <h1>${title}</h1>
        </div>
        <div class="stat-image-card__content">
            <slot></slot>
        </div>
      </div>
      `;
    }
  }
}

export interface StatImageCardProps {
  title: string;
  imageUrl: string;
  content: string;
}

export const StatImageCard = ({ title, imageUrl, content }: StatImageCardProps) => {
  return `
    <stat-image-card-module title="${title}" imageUrl="${imageUrl}">
        <p id="stat-content">${content}</p>
    </stat-image-card-module>
  `;
};
