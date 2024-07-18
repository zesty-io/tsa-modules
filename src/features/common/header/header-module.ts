import './header-module.scss';

export class HeaderModule extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="tsa-header">
        <div class="tsa-header__logo">
            <a href="${this.getAttribute('href') ?? '/'}">
                <img class="logo-small" src="${this.getAttribute('src')}" alt="Salvation Army Logo"/>
                <img class="logo-large" src="${this.getAttribute('srcLarge')}" alt="Salvation Army Logo"/>
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

        <button class="tsa-header__burger">
          <i class="bi bi-list"></i>
        </button>
    </div>
    `;
  }
}

export interface HeaderProps {
  src: String;
  href: String;
  srcLarge: String;
}

export const Header = ({ src, href, srcLarge }: HeaderProps) => {
  return `
    <header-module srcLarge="${srcLarge}" src="${src}" href="${href}"></header-module>
    `;
};
