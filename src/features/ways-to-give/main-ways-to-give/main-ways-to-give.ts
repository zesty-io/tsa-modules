const styles = new CSSStyleSheet();

styles.replaceSync(`
  :host{
    margin: 4rem 0;
  }
    .header{
      text-align: center;
      display: flex;
      justify-content: center;
      width: 100%;
      margin: 4rem 0rem;

      & h1{
          font-size: 36px;
          margin: 0;
          font-family: "Cinzel", serif;
          font-weight: 200;
          line-height: 43.3px;
      }
    }

    .content{
      display: grid;
      gap: 3rem;
      margin: 0 1rem;
    }

    @media (min-width: 1280px) {
      .content{
        display: grid;
        gap: 4rem;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin: 0 4rem;
      }
    }
  `);

export class MainWaysToGiveModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [styles];
      this.shadowRoot.innerHTML = `
        <div class="header">
          <h1 class="tsa-title">Main Ways To Give</h1>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      `;
    }
  }
}

export const MainWaysToGive = () => {
  return `
  <tsa-main-ways-to-give>
   
  <tsa-image-text-top-module  image="https://mgfrnv8q.media.zestyio.com/Vector.png" alt="Placeholder image">
        <div class="tsa-image-text-content">
            <span class="fw-bold fs-2 text-center">Donate Money</span>
            <p class="tsa-text">
            Your donations to The Salvation Army help us serve the most vulnerable members of your community.
            </p>
            <button class="btn btn--fullWidth btn--dark--outline btn--small">Give Now</button>
        </div>
    </tsa-image-text-top-module>

  <tsa-image-text-top-module  image="https://mgfrnv8q.media.zestyio.com/Vector.png" alt="Placeholder image">
        <div class="tsa-image-text-content">
            <span class="fw-bold fs-2 text-center">Donate Goods</span>
            <p class="tsa-text">
           Your donations to Salvation Army Family Stores help fund rehabilitation programs that heal addictions, change lives, and restore families.
            </p>
            <button class="btn btn--fullWidth btn--dark--outline btn--small">Donate Goods</button>
        </div>
    </tsa-image-text-top-module>

  <tsa-image-text-top-module  image="https://mgfrnv8q.media.zestyio.com/Vector.png" alt="Placeholder image">
        <div class="tsa-image-text-content">
            <span class="fw-bold fs-2 text-center">Become a Fundraiser</span>
            <p class="tsa-text">
            Create your own fundraiser to support a cause that's important to you, and provide hope to those in need in your community.
            </p>
            <button class="btn btn--fullWidth btn--dark--outline btn--small">Get Started</button>
        </div>
    </tsa-image-text-top-module>

  <tsa-image-text-top-module  image="https://mgfrnv8q.media.zestyio.com/Vector.png" alt="Placeholder image">
        <div class="tsa-image-text-content">
            <span class="fw-bold fs-2 text-center">Donate Monthly</span>
            <p class="tsa-text">
            The assurance of ongoing revenue from recurring gifts empowers The Salvation Army to expand our services further and faster.
            </p>
            <button class="btn btn--fullWidth btn--dark--outline btn--small">Give Monthly</button>
        </div>
    </tsa-image-text-top-module>
      
  </tsa-main-ways-to-give>`;
};
