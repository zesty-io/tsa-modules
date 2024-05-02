import './header-module.css';

export class HeaderModule extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="tsa-header">
        <div class="tsa-header__logo">
            <a href="${this.getAttribute('href') ?? '/'}">
                <img  src="${this.getAttribute('logoUrl')}" alt="Salvation Army Logo"/>
            </a>
            <tsa-switch labels="EN,ES"></tsa-switch>
        </div>

        <div class="tsa-header__input">
            <label class="input">
                <i class="bi bi-search"></i>
                <input class="input--medium" name="" value="" placeholder="What are you looking for" type="text"/>
            </label>
        </div>

        <div class="tsa-header__cta">
            <button type="button" class="btn btn--small btn--dark--fill ">Find Help</button>
            <button type="button" class="btn btn--small btn--dark--fill ">Donate</button>
        </div>
    </div>
    `;
  }
}

export interface HeaderProps {
  logoUrl: String;
  href: String;
}

export const Header = ({ logoUrl, href }: HeaderProps) => {
  return `
    <header-module logoUrl="${logoUrl}" href="${href}"></header-module>
    `;
};
