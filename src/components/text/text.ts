const styles = new CSSStyleSheet();

styles.replaceSync(`
  :host {
    font-size: 1.6rem;
    line-height: 2.8rem;
  }
}
`);

export class TSATextComponent extends HTMLElement {
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

export interface TextProps {
  content: string;
}

export const Text = ({ content }: TextProps) => {
  return `
        <tsa-text>${content}</tsa-text>
    `;
};
