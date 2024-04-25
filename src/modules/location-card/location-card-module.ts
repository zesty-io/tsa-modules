const styles = new CSSStyleSheet();

styles.replaceSync(`
    tsa-card{
        background-color: #FFF;
        border-radius: .6rem;
    }

`);

export class LocationCardModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [styles];
      this.shadowRoot.innerHTML = `
        <tsa-card>
            <slot></slot>
        </tsa-card>
      `;
    }
  }
}

export const LocationCard = () => {
  return `
    <tsa-location-card>
        <tsa-title-with-icon>
            <i slot="icon" class="bi bi-geo-alt-fill"></i> <h1 slot="title">North Dallas Salavation Army</h1>
        </tsa-title-with-icon>

      
    </tsa-location-card>
  `;
};
