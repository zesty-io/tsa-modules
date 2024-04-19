const styles = new CSSStyleSheet();

styles.replaceSync(`
  :host {
    font-size: 2.8rem;
    font-family: "Cinzel", serif;
    font-weight: 200;
    text-align: center;
  }

  @media (min-width: 840px) {
    :host  {
        font-size: 3.8rem;
    }
  }

  @media (min-width: 1280px) {
    :host  {
        font-size: 4.8rem;
    }
}
`);

export class TSATitleComponent extends HTMLElement {
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

export interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return `
        <tsa-title>${title}</tsa-title>
    `;
};
