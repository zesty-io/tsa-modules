import '../card/card.css';

const styles = new CSSStyleSheet();

styles.replaceSync(`
  :host{
    padding: 3.2rem 1.6rem;
    box-shadow: 0px 8px 35px 0px rgba(0, 0, 0, 0.25);
    background: rgba(239, 241, 240, 1);
    display: inline-block;
  }
`);

export class TSACardComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [styles];

      this.shadowRoot.innerHTML = `
          <slot></slot>
      `;
    }
  }
}

export interface CardProps {
  content: string;
}

export const Card = ({ content }: CardProps) => {
  return `
      <tsa-card>
        ${content}
      </tsa-card>
    `;
};
