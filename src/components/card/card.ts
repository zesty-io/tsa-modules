import '../card/card.css';

const styles = new CSSStyleSheet();

styles.replaceSync(`
  .card{
    padding: 3.2rem 1.6rem;
    box-shadow: 0px 8px 35px 0px rgba(0, 0, 0, 0.25);
    background: rgba(239, 241, 240, 1);
    

    & .card__header{
      & h1{
        padding: 0;
        margin:0;
        font-size: 8rem;
        text-align: center;
        margin-bottom: 3rem;
      }
    }
  }
`);

export class CardComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('title');

    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [styles];

      this.shadowRoot.innerHTML = `
        <div class="card">
          <div class="card__header">
            <h1>${title}</h1>
          </div>
            <slot></slot>
        </div>
      `;
    }
  }
}

export interface CardProps {
  title: string;
  content: string;
}

export const Card = ({ title, content }: CardProps) => {
  return `
      <card-component title="${title}">
        <p class="content">
          ${content}
        </p>
      </card-component>
    `;
};
