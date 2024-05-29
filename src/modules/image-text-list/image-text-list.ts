import '../../components/text/text.css';

const ImageTextListTemplate = document.createElement('template');

const ImageTextListStyle = new CSSStyleSheet();

ImageTextListStyle.replaceSync(`
  ::slotted(div) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .image-text-list__container {
    margin-top: 3rem;
  }
  .image-text-list {
    padding: 2rem;
  }
`)


export class ImageTextListModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    ImageTextListTemplate.innerHTML = `
      <div class="image-text-list">
        <slot name="title"></slot>
        <div class="image-text-list__container">
          <slot name="content"></slot>
        </div>
      </div>
    `
    
  }

  connectedCallback() {
    if(this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [ImageTextListStyle];
      this.shadowRoot.appendChild(ImageTextListTemplate.content.cloneNode(true));
    }
  }
}

export interface ImageTextListProps {
  title?: string
}

export const ImageTextList = ({title}: ImageTextListProps) => {
  return`
    <tsa-image-text-list>
      <h1 slot="title" class="tsa-title">${title}</h1>
      <div slot="content">
        <tsa-image-text-top-module imagePosition="right" image="https://mgfrnv8q.media.zestyio.com/Vector.png" alt="Placeholder image">
            <div class="tsa-image-text-content">
                <span class="tsa-title text-center fw-bold fs-4 d-block">Volunteer as a Bell Ringer</span>
                <p class="tsa-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.
                </p>
                <button class="btn btn--fullWidth btn--dark--outline">View Website</button>
            </div>
        </tsa-image-text-top-module>
        <tsa-image-text-top-module imagePosition="right" image="https://mgfrnv8q.media.zestyio.com/Vector.png" alt="Placeholder image">
            <div class="tsa-image-text-content">
                <span class="tsa-title text-center fw-bold fs-4 d-block">Volunteer as a Bell Ringer</span>
                <p class="tsa-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.
                </p>
                <button class="btn btn--fullWidth btn--dark--outline">View Website</button>
            </div>
        </tsa-image-text-top-module>
        <tsa-image-text-top-module imagePosition="right" image="https://mgfrnv8q.media.zestyio.com/Vector.png" alt="Placeholder image">
            <div class="tsa-image-text-content">
                <span class="tsa-title text-center fw-bold fs-4 d-block">Volunteer as a Bell Ringer</span>
                <p class="tsa-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.
                </p>
                <button class="btn btn--fullWidth btn--dark--outline">View Website</button>
            </div>
        </tsa-image-text-top-module>
      </div>
    </tsa-image-text-list>
  `
}