const styles = new CSSStyleSheet();

styles.replaceSync(`
    .local-need{
      width: 36rem;

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

      & .local-need--content{
         margin-top: 1rem;
         font-size: 1.6rem;
         line-height: 2.8rem;
         overflow: hidden;
         text-overflow: ellipsis;
         display: -webkit-box;
         -webkit-line-clamp: 3; 
                 line-clamp: 3;
         -webkit-box-orient: vertical;
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
            <div class="local-need--content">
              <slot></slot>
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
        <p>
          Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut
        </p>
    </local-need-module>
    `;
};
