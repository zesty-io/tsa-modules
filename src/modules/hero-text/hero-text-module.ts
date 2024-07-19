const heroTextTemplate = document.createElement('template');

const heroTextStyle = new CSSStyleSheet();

heroTextStyle.replaceSync(`
  .tsa-hero-text {
    min-height: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 2rem;
    position: relative;
    overflow: hidden; 
    
  }
  .tsa-hero-text__heading {
    width: 100%;
  }
  .tsa-hero-text__heading h2 {
    padding: 0px 28rem;
    font-size: 6.4rem;
    line-height: 7.68rem;
    font-family: Cinzel, serif;
    font-weight: 200;
    width: 100%;
    box-sizing: border-box;
  }
  .tsa-hero-text__content {
    text-align: center;
    font-family: Montserrat, serif;
    font-size: 1.6rem;
    margin-top: 1.6rem;
    line-height: 2.8rem;
  }
  @media (max-width: 769px) {
    .tsa-hero-text__heading h2 {
      padding: 0px 4rem;
      font-size: 3.4rem;
      text-align: center;
    }
  }
`)


export class HeroTextModule extends HTMLElement {
  private heading: string | null;
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.heading = this.getAttribute('heading')

    heroTextTemplate.innerHTML = `
      <div class="tsa-hero-text">
        <div class="tsa-hero-text__heading"><h2>${this.heading}</h2></div>
        <div class="tsa-hero-text__content">
          <slot></slot>
        </div>
      </div>
    `


  }

  connectedCallback() {
    if(this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [heroTextStyle];
      this.shadowRoot.appendChild(heroTextTemplate.content.cloneNode(true));
    }
  }
}

export interface HeroTextProps {
  heading?: string
}

export const HeroText = ({heading}: HeroTextProps) => {
  return`
    <tsa-hero-text heading="${heading}">
      <p>John Smith</p>
      <p>John.Smith@usc.salvationarmy.org</p>
      <p>(123) 456-7890</p>
    </tsa-hero-text>
  `
}