const styles = new CSSStyleSheet();

styles.replaceSync(`
  .tsa__text-icon{
    display: flex;
    align-items: center;

    & .tsa__text-icon__icon{
      font-size: 2em;
      margin-right: 1rem;
    }

    & .tsa__text-icon__title{
      font-size: 1.3rem;
      font-weight: 400;
    }
  }
`);

export class TSATextWithIconComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [styles];
      this.shadowRoot.innerHTML = `
      <div class="tsa__text-icon">
        <span class="tsa__text-icon__icon"><slot name="icon"></slot></span>
        <span class="tsa__text-icon__title"><slot name="title"></slot></span>
      </div>
      `;
    }
  }
}

export interface TextWithIconProps {
  icon: string;
  title: string;
}

export const TextWithIcon = ({ icon, title }: TextWithIconProps) => {
  return `
    <tsa-text-with-icon>
    ${icon} ${title}
  </tsa-text-with-icon>
    `;
};
