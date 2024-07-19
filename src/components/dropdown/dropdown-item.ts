const styles = new CSSStyleSheet();

styles.replaceSync(`
:host{
    display: block;
    width: 100%;
}

a{
    display: inline-block;
    color: #FFF;
    text-decoration: none;
    font-size: 1.6rem;
    width: 100%;
    height: 100%;
    padding: 1rem 2rem;
    transition: all .3s ease;
}
a:hover{
    background-color: rgba(90, 93, 93, 1);
}


`);
export class DropdownItemComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [styles];
      this.shadowRoot.innerHTML = `
            <a target="${this.getAttribute('target')}" href="${this.getAttribute('href')}"><slot></slot></a>
        `;
    }
  }
}
