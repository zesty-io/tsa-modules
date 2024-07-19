const jumpToSectoionTemplate = document.createElement('template');

const jumpToSectionStylesheet = new CSSStyleSheet();

jumpToSectionStylesheet.replaceSync(`
  slot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
  }
  .tsa-jump-to-section h3 {
    font-family: "Cinzel", serif;
    font-size: 48px;
    font-weight: 400;
    line-height: 57.6px;
    text-align: center;
  }
  @media (max-width: 769px) {
    .tsa-jump-to-section h3 {
      font-size: 38px;
    }
    slot {
      flex-direction: column;
    }
    ::slotted(a) {
      width: 100%;
      margin-bottom: 2rem !important;
    }
  }
`);


export class TSAJumpToSectionModule extends HTMLElement {
  private heading: string | null;
  constructor() {
    super();
    this.attachShadow({mode: 'open'})
    this.heading = this.getAttribute('heading');
  }

  connectedCallback() {
    if(this.shadowRoot){
      this.shadowRoot.adoptedStyleSheets = [jumpToSectionStylesheet];
      this.shadowRoot.innerHTML = `
        <div class="tsa-jump-to-section">
          <h3>${this.heading}</h3>
          <slot></slot>
        </div>
      `
    }
  }
}

export interface TSAJumpToSectionProps {
  heading?: string,
}

export const JumpToSectionModule = ({heading}: TSAJumpToSectionProps) => {
  return`
    <tsa-jump-to-section heading="${heading}">
      <a class="btn btn--medium btn--dark--outline" href="#id1">What We Do</a>
      <a class="btn btn--medium btn--dark--outline" href="#id2">Partner Opportunities</a>
      <a class="btn btn--medium btn--dark--outline" href="#id3">Our Corporate Partners</a>
      <a class="btn btn--medium btn--dark--outline" href="#id4">Become a Partner</a>
    </tsa-jump-to-section>
  `
}