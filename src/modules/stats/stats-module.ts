import './stats-module.css';

const styles = new CSSStyleSheet();

styles.replaceSync(`
    .stats{
        background: rgba(239, 241, 240, 1);
        padding: 3rem 2rem;
        & .stats__header{
            margin-bottom: 4rem;
            & h1{
                margin:0;
                font-size: 2.8rem;
                font-family: "Cinzel", serif;
                font-weight: 200;
                text-align: center;
            }
        }
    }
    
`);

export class StatsModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('title');

    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [styles];

      this.shadowRoot.innerHTML = `
        <div class="stats">
            <div class="stats__header">
                <h1>${title}</h1>
            </div>

            <div class="stats__content">
                <slot name="content"></slot>
            </div>
        </div>
      `;
    }
  }
}

export interface StatsProps {
  title: string;
}

export const Stats = ({ title }: StatsProps) => {
  return `
        <stats-module title ="${title}">
            <div slot="content">
                <div id="content">
                    <card-component title="20%">
                        <p class="content">
                        of children in the United States under the age of 18 face food insecurity on a regular basis
                        </p>
                    </card-component>
                    <card-component title="20%">
                        <p class="content">
                        of children in the United States under the age of 18 face food insecurity on a regular basis
                        </p>
                    </card-component>
                    <card-component title="20%">
                        <p class="content">
                        of children in the United States under the age of 18 face food insecurity on a regular basis
                        </p>
                    </card-component>
                </div>
                
                <div id="cta">
                    <button type="button" class="btn btn--small btn--dark--outline">[FPO] Learn More</button>
                </div>
            </div>
        </stats-module>
    `;
};
