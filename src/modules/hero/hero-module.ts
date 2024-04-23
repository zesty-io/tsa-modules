import '../../components/button/button.css';
import './hero-module.css';

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
        z-index: 40;

        & h1 {
            font-family: "Cinzel", serif;
            font-size: 2.8rem;
            font-weight: 200;
            line-height: 3.36rem;
        }

        & p {
            font-family: "Montserrat", serif;
            font-size: 1.6rem;
            margin-top: 1.6rem;
            line-height: 2.8rem;
        }
    }
}

@media (min-width: 640px){
  .hero{
    & .content{
      & h1{
        padding: 0 10rem;
        font-size: 3.6rem;
      }

      & p{
        padding: 0 10rem;
      }
    }
  }
}

@media (min-width: 1024px){
  .hero{
    padding: 5rem 2rem;
    & .content{
      & h1{
        padding: 0 15rem;
        font-size: 4.6rem;
      }

      & p {
        padding: 0 10rem;

      }
    }
  }
}

@media (min-width: 1280px){
  .hero{
    padding: 5rem 2rem;
    & .content{
      & h1{
        padding: 0 28rem;
        font-size: 6.4rem;
        line-height: 7.68rem;
      }

      & p{
        padding: 0 15rem;
      }
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
        >
          <div class="hero__bg">
            <img src="${imageUrl}" />
          </div>
          <div class="content">
            <h1>${title} NICO</h1>
            <p>
                <slot name="subtitle">
                </slot>
            </p>
          </div>
    
          <slot name="cta">
          </slot>
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
  <hero-module title="${title}" imageUrl="${imageUrl}">
    <p slot="subtitle">${subtitle}</p>
    <div slot="cta" class="cta">
        <div class="cta__primary">  
            <button type="button" class="btn btn--small btn--dark--fill btn--fillWidth">Primary CTA</button>
        </div>
        <div class="cta__secondary">
            <button type="button" class="btn btn--small btn--dark--outline">CTA</button>
            <button type="button" class="btn btn--small btn--dark--outline">CTA</button>
        </div>
    </div>
  </hero-module>`;
};
