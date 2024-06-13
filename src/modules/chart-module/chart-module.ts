export class ChartModule extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;
    }
  }
}
