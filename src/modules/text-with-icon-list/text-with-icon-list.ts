import '../../components/card/card.css';

const textWithIconListStyleSheet = new CSSStyleSheet();

textWithIconListStyleSheet.replaceSync(`
  slot {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ::slotted(.tsa-card) {
    width: 100%;
    margin: 0 2rem !important;
    background: transparent !important;
  }
  ::slotted(p) {
    margin-bottom: 1.2rem !important;
  }
  .text-with-icon-list h3 {
    font-family: "Cinzel", serif;
    font-size: 48px;
    font-weight: 400;
    line-height: 57.6px;
    text-align: center;
  }
  
  @media (max-width: 769px) {
    slot {
      flex-direction: column;
    }
    ::slotted(.tsa-card) {
      margin-bottom: 5rem !important;
    }
    .text-with-icon-list h3 {
      font-size: 38px;
    }
  }
`)

export class TextWithIconListModule extends HTMLElement {
  private heading: string | null;
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.heading = this.getAttribute('heading');
  }

  connectedCallback() {
    if(this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [textWithIconListStyleSheet];
      this.shadowRoot.innerHTML =`
        <div class="text-with-icon-list">
          <h3>${this.heading}</h3>
          <slot></slot>
        </div>
      `
    }
  }
}

export interface TextWithIconListProps {
  heading?: string
}

export const TextWithIconList = ({heading}: TextWithIconListProps) => {
  return`
    <tsa-text-with-icon-list heading="${heading}">
      <div class="tsa-card">
        <tsa-text-with-icon bootstrapIcon="image" title="Title"></tsa-text-with-icon>
        <p class="my-3 tsa-text">Description of the services provided. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
      </div>
      <div class="tsa-card">
        <tsa-text-with-icon bootstrapIcon="image" title="Title"></tsa-text-with-icon>
        <p class="my-3 tsa-text">Description of the services provided. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
      </div>
    </tsa-text-with-icon-list>
  `
}