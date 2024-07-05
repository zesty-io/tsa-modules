import './more-ways-to-give.scss';

const styles = new CSSStyleSheet();

styles.replaceSync(`

  .container{
    display: grid;
    grid-template-rows: 0fr 0fr;
    overflow: hidden;
    transition: all .3s ease;
    
  }

  .title_button{
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    border: none;
    margin-bottom: 2rem;
  }

  .title_button h1{
    font-size: 24px;
    margin: 0;
  }

  .title_button #chevron_icon{
    transform: rotateZ(180deg);
    transition: transform .4s ease;
  }

  .container[data-open] #chevron_icon{
    transform: rotateZ(0deg);
    transition: transform .4s ease;
  }

  .container[data-open] {
       grid-template-rows: 0fr 1fr;
  }

  .content_container{
    display: grid;
    gap: 2rem;
    overflow: hidden;
  }


  @media (min-width: 1280px) {
    .content_container{
      grid-template-columns: auto auto auto;
    }
  }

`);

export class MoreWayToGiveAccordionModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [styles];
      this.shadowRoot.innerHTML = `
        <div class="container" part="container">
            <button class="title_button" part="title">
              <h1>${this.getAttribute('data-title')}</h1>
              <svg id="chevron_icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.46936 17.5316C2.53903 17.6015 2.6218 17.6569 2.71291 17.6947C2.80403 17.7325 2.90171 17.752 3.00036 17.752C3.09902 17.752 3.1967 17.7325 3.28781 17.6947C3.37893 17.6569 3.4617 17.6015 3.53136 17.5316L12.0004 9.06111L20.4694 17.5316C20.5391 17.6013 20.6219 17.6567 20.713 17.6944C20.8041 17.7321 20.9017 17.7516 21.0004 17.7516C21.099 17.7516 21.1966 17.7321 21.2877 17.6944C21.3788 17.6567 21.4616 17.6013 21.5314 17.5316C21.6011 17.4619 21.6564 17.3791 21.6941 17.288C21.7319 17.1969 21.7513 17.0992 21.7513 17.0006C21.7513 16.902 21.7319 16.8043 21.6941 16.7132C21.6564 16.6221 21.6011 16.5393 21.5314 16.4696L12.5314 7.46961C12.4617 7.39977 12.3789 7.34435 12.2878 7.30654C12.1967 7.26873 12.099 7.24927 12.0004 7.24927C11.9017 7.24927 11.804 7.26873 11.7129 7.30654C11.6218 7.34435 11.539 7.39977 11.4694 7.46961L2.46936 16.4696C2.39952 16.5393 2.34411 16.622 2.3063 16.7132C2.26849 16.8043 2.24902 16.902 2.24902 17.0006C2.24902 17.0993 2.26849 17.1969 2.3063 17.2881C2.34411 17.3792 2.39952 17.4619 2.46936 17.5316Z" fill="black"/>
              </svg>
            </button>

            <div class="content_container" part="content_container">
              <slot></slot>
            </div>
        </div>
      `;

      const button = this.shadowRoot.querySelector('.title_button');
      const container = this.shadowRoot.querySelector('.container');

      button?.addEventListener('click', () => {
        container?.toggleAttribute('data-open');
      });
    }
  }
}

export const MoreWaysToGive = () => {
  return `<tsa-more-ways-to-give-accordion data-title="Give Time">
            <div class="d-flex align-items-start flex-column border" style="border-color: #999999; padding: 3.2rem 1.6rem;">
              <tsa-text-with-icon bootstrapIcon="image" title="Volunteer"></tsa-text-with-icon>
              <p class="tsa-text">Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p>
              <button type="button" class="btn btn--small btn--dark--outline">Volunteer</button>
            </div>
            <div class="d-flex align-items-start flex-column border" style="border-color: #999999; padding: 3.2rem 1.6rem;">
              <tsa-text-with-icon bootstrapIcon="image" title="Volunteer"></tsa-text-with-icon>
              <p class="tsa-text">Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p>
              <button type="button" class="btn btn--small btn--dark--outline">Volunteer</button>
            </div>
            <div class="d-flex align-items-start flex-column border" style="border-color: #999999; padding: 3.2rem 1.6rem;">
              <tsa-text-with-icon bootstrapIcon="image" title="Volunteer"></tsa-text-with-icon>
              <p class="tsa-text">Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p>
              <button type="button" class="btn btn--small btn--dark--outline">Volunteer</button>
            </div>
           
      </tsa-more-ways-to-give-accordion>`;
};
