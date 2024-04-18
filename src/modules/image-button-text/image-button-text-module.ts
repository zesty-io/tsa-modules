import './image-button-text-module.css';

const styles = new CSSStyleSheet();

styles.replaceSync(`
    .ibt{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem 2rem;

        & .ibt__header{
            & h1{
                margin: 0;
                font-size: 2.8rem;
                font-family: "Cinzel", serif;
                font-weight: 200;
            }
        }
    }

    & .ibt__top{
        order: 1 !important;
    }

    .ibt > * {
        margin-bottom: 3rem;
    }

    .ibt:last-child{
        margin-bottom: 0rem;
    }
`);

export class ImageButtonTextModule extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('title');
    const imageUrl = this.getAttribute('imageUrl');
    const imagePos = this.getAttribute('imagePosition');

    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [styles];

      this.shadowRoot.innerHTML = `
        <div class="ibt">
            <div class="ibt__header">
                <h1>${title}</h1>
            </div>
            <div class="ibt__image ibt__${imagePos}">
                <img src="${imageUrl}" />
            </div>
            <div class="ibt__content">
                <slot></slot>
            </div>
        </div>
      `;
    }
  }
}

export interface ImageButtonTextProps {
  title: string;
  imageUrl: string;
  content: string;
  imagePosition: 'middle' | 'top' | 'bottom';
}

export const ImageButtonText = ({
  title,
  imageUrl,
  content,
  imagePosition = 'middle'
}: ImageButtonTextProps) => {
  return `
    <image-button-text-module title="${title}" imageUrl="${imageUrl}" imagePosition="${imagePosition}">
        <div id="ibt">
            <p>${content}</p>
            <div id="ibt__cta">
                <button type="button" class="btn btn--small btn--dark--fill">[FPO] Primary Button</button>
                <button type="button" class="btn btn--small btn--dark--outline">[FPO] Secondary Button</button>
            </div>
        </div>
    </image-button-text-module>
  `;
};
