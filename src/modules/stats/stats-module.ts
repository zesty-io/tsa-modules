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
                    <stat-image-card-module title="[FPO] 1,000,000 Meals Served" imageUrl="https://mgfrnv8q.media.zestyio.com/Vector.png">
                        <p id="stat-content">Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p>
                    </stat-image-card-module>
                    <stat-image-card-module title="[FPO] 1,000,000 Meals Served" imageUrl="https://mgfrnv8q.media.zestyio.com/Vector.png">
                        <p id="stat-content">Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p>
                    </stat-image-card-module>
                    <stat-image-card-module title="[FPO] 1,000,000 Meals Served" imageUrl="https://mgfrnv8q.media.zestyio.com/Vector.png">
                        <p id="stat-content">Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p>
                    </stat-image-card-module>
                </div>
                
                <div id="cta">
                    <button type="button" class="btn btn--small btn--dark--outline">[FPO] Learn More</button>
                </div>
            </div>
        </stats-module>
    `;
};
