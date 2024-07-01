import './image-text-top.scss';
import { ImageTextProps } from '../image-text/image-text';

const styles = new CSSStyleSheet();

styles.replaceSync(`
    .container{
        padding: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .image-container {
        display: flex;
        justify-content: center;
        margin-bottom: 4rem;
    }

    @media(min-width: 1280px){
        .container{
            &  .image-container{
                margin-right: 0;
                margin-bottom: 4rem;    
            }
        }

       
    }
`);

export class TSAImageTextTopModule extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [styles];
      this.shadowRoot.innerHTML = `
        <div class="container">
            <div part="image-container" class="image-container">
                <img part="image" src="${this.getAttribute('image')}" alt="${this.getAttribute('alt')}"/>
            </div>
            <div class="content-container">
              <slot></slot>
            </div>
        </div>
      `;
    }
  }
}

export const ImageTextTop = ({ image, alt }: ImageTextProps) => {
  return `
    <tsa-image-text-top-module  image="${image}" alt="${alt}">
        <div class="tsa-image-text-content">
            <span class="tsa-title text-center">Volunteer as a Bell Ringer</span>
            <p class="tsa-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.
            </p>
            <button class="btn btn--fullWidth btn--dark--outline btn--small">View Website</button>
        </div>
    </tsa-image-text-top-module>
  `;
};
