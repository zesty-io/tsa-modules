const styles = new CSSStyleSheet();

styles.replaceSync(`
  .tsa__title--icon{
    display: flex;
    align-items: center;

    & span{
      font-size: 3rem;
      margin-right: 1rem;
    }

    & h1{
      font-size: 2rem;
      margin: 0rem;
    }
  }
`);

export class TitleWithIconComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('title');
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [styles];
      this.shadowRoot.innerHTML = `
                <div class="tsa__title--icon">
                  <span><slot name="icon"></slot></span>
                  <h1>${title}</h1>
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
        <title-with-icon-component title="${title}">
          ${icon}
        </title-with-icon-component>
    `;
};
