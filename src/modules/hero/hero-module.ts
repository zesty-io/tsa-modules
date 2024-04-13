const styles = new CSSStyleSheet();

styles.replaceSync(`
    .hero {
    background: rgba(175, 183, 187, 1);
    height: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 2rem;
    position: relative;
    overflow: hidden;

    & .hero__bg {
        position: absolute;
        height: 100%;

        & img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            filter: opacity(50%);

            /* width: auto;
            height: 100%;
            max-width: none;
            max-height: none; */
            /* mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%); */
        }
    }

    & .content {
        text-align: center;
        margin-bottom: 3rem;
        z-index: 40;

        & h1 {
            font-family: "Cinzel", serif;
            font-size: 2.8rem;
            margin-bottom: 1.6rem;
        }

        & p {
            font-family: "Montserrat", serif;
            font-size: 1.6rem;
        }
    }

    & .cta {
        width: 30rem;
        z-index: 40;

        & .cta__primary {
            margin-bottom: 1rem;

            & button {
                width: 100%;
                color: #FFF;
                background-color: #000;
                border: none;
                padding: 1.6rem .8rem;
                cursor: pointer;
                border-radius: .6rem;
                font-size: 1.6rem;
            }
        }

        & .cta__secondary {
            display: flex;
            align-items: center;
            justify-content: space-between;

            & button {
                font-size: 1.6rem;
                flex: 1;
                background-color: #FFF;
                border: 1px solid black;
                padding: 1.6rem .8rem;
                cursor: pointer;
                border-radius: .6rem;
            }
        }

        & button:first-of-type {
            margin-right: 1rem;
        }
    }
}
    `);

export class HeroModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('title');
    const imageUrl = this.getAttribute('imageUrl');

    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [styles];

      this.shadowRoot.innerHTML = `
        <div
          class="hero"
          type="button"
        >
          <div class="hero__bg">
            <img src="${imageUrl}" />
          </div>
          <div class="content">
            <h1>${title}</h1>
            <p>
                <slot>
                </slot>
            </p>
          </div>
    
          <div class="cta">
            <div class="cta__primary">
              <button>Primary CTA</button>
            </div>
            <div class="cta__secondary">
              <button>CTA</button>
              <button>CTA</button>
            </div>
          </div>
        </div>
        `;
    }
  }
}

export interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
}

export const Hero = ({ title, subtitle, imageUrl }: HeroProps) => {
  return `
  <my-web-component title="${title}" subtitle="${subtitle}" imageUrl="${imageUrl}">
    ${subtitle}
  </my-web-component>`;
};
