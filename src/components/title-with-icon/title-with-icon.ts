const styles = new CSSStyleSheet();

styles.replaceSync(`
  .tsa__title-icon{
    display: flex;
    align-items: center;

    & .tsa__title-icon__icon{
      font-size: 3rem;
      margin-right: 1rem;
    }

    & .tsa__title-icon__title{
      font-size: 2rem;
      font-weight: 600;
    }
  }
`);

export class TSATitleWithIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [styles];
      this.shadowRoot.innerHTML = `
                <div class="tsa__title-icon">
                  <span class="tsa__title-icon__icon"><slot name="icon"></slot></span>
                  <span class="tsa__title-icon__title"><slot name="title"></slot></span>
                </div>
            `;
    }
  }
}

export interface TitleWithIconProps {
  title: string;
  icon: string;
}

export const TitleWithIcon = ({ title, icon }: TitleWithIconProps) => {
  return `
        <tsa-title-with-icon>
          ${icon} ${title}
        </tsa-title-with-icon>
    `;
};
