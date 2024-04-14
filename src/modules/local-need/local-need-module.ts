const styles = new CSSStyleSheet();

styles.replaceSync(`
    .local-need{
      & .local-need--header{
          display: flex;  

          & span{
            font-size: 3.6rem;
            margin-right: .6rem;
          }

          & h1 {
            font-size: 2rem;
          }
      }
    }
    `);

export class LocalNeedModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('title');

    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [styles];
      this.shadowRoot.innerHTML = `
        <div class="local-need">
            <div class="local-need--header">
                <span><slot name="icon"></slot></span> 
                <h1>${title}</h1>
            </div>
        </div>
      `;
    }
  }
}

export interface LocalNeedProps {
  title: string;
}

export const LocalNeed = ({ title }: LocalNeedProps) => {
  return `
    <local-need-module title="${title}">
        <i slot="icon" class="bi bi-image"></i>
    </local-need-modulee>
    `;
};
