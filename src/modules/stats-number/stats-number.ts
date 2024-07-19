import './stats-number.scss';
import '../../components/button/button.css';

const style = new CSSStyleSheet();

style.replaceSync(`
  .stats-number__container {
    margin: 0 20px;
    padding: 10px;
    box-shadow: 0px 8px 35px 0px #00000040;
    padding: 32px 16px 32px 16px;
  }
  .stats-number__heading {
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      max-width: 34px;
    }

    & span {
      margin-left: 10px;
      font-weight: 700;
      font-size: 80px;
    }
  }
  .stats-number__content p {
    line-height: 28px;
    font-size: 16px;
    text-align: center;
  }

  @media (max-width: 840px){
    .stats-number__heading {
      font-size: 80px;
    }

    .stats-number__container {
      margin-bottom: 40px;
    }
  }
`);
const template = document.createElement('template');

export class StatsNumberModule extends HTMLElement {
  private heading: string | null;
  private content: string | null;

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.heading = this.getAttribute('heading');
    this.content = this.getAttribute('content');

    template.innerHTML = `
      <div class="stats-number__container">
        <div class="stats-number__heading">
          <span stats-number__title>${this.heading}</span>
        </div>
        <div class="stats-number__content">
          <p>${this.content}</p>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [style];
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

export interface StatsNumberProps {
  heading?: string;
  content?: string;
}

export const StatsNumber = ({ heading, content }: StatsNumberProps) => {
  return `
    <div class="stats-number">
      <h2>[FPO] STATS</h2>
      <div class="stats-number__wrapper">
        <stats-number 
          heading="${heading}" 
          content="${content}"
        ></stats-number>
        <stats-number 
          heading="${heading}" 
          content="${content}"
        ></stats-number>
        <stats-number 
          heading="${heading}" 
          content="${content}"
        ></stats-number>
      </div>
      <div class="stats-number__cta">
        <button class="btn btn--small btn--dark--outline">[FPO] Learn More</button>
      </div>
    </div>
  `;
};
