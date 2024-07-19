import '../../../components/button/button.css';

const styles = new CSSStyleSheet();

styles.replaceSync(`
    .tsa-hero {
    background: rgba(175, 183, 187, 1);
    height: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 2rem;
    position: relative;
    overflow: hidden; 

    & .tsa-hero__bg {
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

    & .tsa-content {
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
  .tsa-hero{
    & .tsa-content{
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
  .tsa-hero{
    padding: 5rem 2rem;
    & .tsa-content{
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
  .tsa-hero{
    padding: 5rem 2rem;
    & .tsa-content{
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
    const subtitle = this.getAttribute('subtitle');
    const imageUrl = this.getAttribute('imageUrl');

    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [styles];

      this.shadowRoot.innerHTML = `
        <div class="tsa-hero">
          <div class="tsa-hero__bg">
            <img src="${imageUrl}" />
          </div>
          <div class="tsa-content">
            <h1>${title}</h1>
            <p>
               ${subtitle}
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
  <hero-module title="${title}" imageUrl="${imageUrl}" subtitle="${subtitle}">
    <div slot="cta" class="mt-4" style="width: 30rem; z-index: 40;">
        <div class="mb-4">  
            <button type="button" class="btn btn--small btn--dark--fill btn--fullWidth">Primary CTA</button>
        </div>
        <div class="d-flex align-items-center justify-content-between">
            <button type="button" class="btn btn--small btn--dark--outline me-4 flex-fill">CTA</button>
            <button type="button" class="btn btn--small btn--dark--outline flex-fill">CTA</button>
        </div>
    </div>
  </hero-module>`;
};
