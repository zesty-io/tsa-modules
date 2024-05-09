const styles = new CSSStyleSheet();

styles.replaceSync(`
    .local-needs{
        padding: 3rem 2rem;

        & .local-needs__header{
           & h1{
                font-family: "Cinzel", serif;
                font-size: 2.8rem;
                font-weight: 200;
                text-align: center;
           }
        }

        & .local-needs__image{
            margin: 4rem 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        & .local-needs__content{
            display: grid;
            row-gap: 2.6rem;
            justify-content: center; 
            align-items: center; 
        }
    }

      @media (min-width: 840px){
        .local-needs__content{
            grid-template-columns: auto auto;
            column-gap: 2.6rem;
        }
      }
      
      @media (min-width: 1024px){
        .local-needs__content{
         
        }
      }
      
      @media (min-width: 1280px){
        .local-needs__content{
            grid-template-columns: auto auto auto;
        }
      }
`);

export class LocalNeedsModule extends HTMLElement {
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
    <div class="local-needs">
        <div class="local-needs__header">
            <h1>${title}</h1>
        </div>
        <div class="local-needs__image">
            <img src="${imageUrl}"/>
        </div>
        
        <div class="local-needs__content">
            <slot></slot>
        </div>
    </div>
      `;
    }
  }
}

export interface LocalNeedsProps {
  title: string;
  imageUrl?: string;
}

export const LocalNeeds = ({ title, imageUrl }: LocalNeedsProps) => {
  return `
  <local-needs-module
  title="${title}"
  imageUrl="${imageUrl}"
>
  <local-need-module>
    <tsa-text-with-icon
      slot="title"
      bootstrapIcon="image"
      title="[FPO] Title"
    ></tsa-text-with-icon>
    <p slot="content">
      Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididun ut labore et dolore magna aliqua. Ut
    </p>
  </local-need-module>
  <local-need-module>
    <tsa-text-with-icon
      slot="title"
      bootstrapIcon="image"
      title="[FPO] Title"
    ></tsa-text-with-icon>
    <p slot="content">
      Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididun ut labore et dolore magna aliqua. Ut
    </p>
  </local-need-module>
  <local-need-module>
    <tsa-text-with-icon
      slot="title"
      bootstrapIcon="image"
      title="[FPO] Title"
    ></tsa-text-with-icon>
    <p slot="content">
      Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididun ut labore et dolore magna aliqua. Ut
    </p>
  </local-need-module>
</local-needs-module>
    `;
};
