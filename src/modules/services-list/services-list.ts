
const template = document.createElement('template');

const style = new CSSStyleSheet();
style.replaceSync (
  `
  .service-list {
    padding: 30px;
  }
  .service-list__wrapper {
    display: grid;
    gap: 40px 40px;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 35px;
  }
  .service-list__title {
    margin-bottom: 35px;
  }
  .example {
    background-color: var(--color-base-light);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px 20px 35px 20px;
    box-shadow: 0px 8px 13px 0px rgba(0, 0, 0, 0.25);

    & tsa-text,
    tsa-title {
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }

    & .example__cta {
        width: 100%;
        & > button{
          margin: 0 auto;
          display: block;
      }


        & :last-child {
            margin-top: 2rem;
        }
    }

    &>* {
        margin-bottom: 3rem;
    }

    & :last-child {
        margin-bottom: 0;
    }
    .btn {
      font-family: "Montserrat", serif;
      border: none;
      border-radius: .6rem;
      cursor: pointer;
      color: var(--color-base-light);
      transition: all .3s ease-out;
      font-size: 1.6rem;
      display: block;
      text-align: center;
      text-decoration: none;
    }
    
    .btn:disabled {
      opacity: 55%;
      pointer-events: none;
    }
    
    /* **** Colors **** */
    
    .btn--primary--fill {
      background-color: var(--color-primary);
    }
    
    .btn--primary--fill:hover {
      background-color: var(--color-primary-light);
    }
    
    .btn--success--fill {
      background-color: var(--color-status-success);
    }
    
    .btn--success--fill:hover {
      background-color: var(--color-status-success-dark);
    }
    
    .btn--danger--fill {
      background-color: var(--color-status-danger);
    }
    
    .btn--danger--fill:hover {
      background-color: var(--color-status-danger-dark);
    }
    
    .btn--info--fill {
      background-color: var(--color-status-info);
    }
    
    .btn--info--fill:hover {
      background-color: var(--color-status-info-dark);
    }
    
    .btn--warning--fill {
      background-color: var(--color-status-warning);
      color: var(--color-base-dark);
    }
    
    .btn--warning--fill:hover {
      background-color: var(--color-status-warning-dark);
      color: var(--color-base-light);
    
    }
    
    .btn--dark--fill {
      background-color: var(--color-base-dark);
    }
    
    .btn--dark--fill:hover {
      background-color: var(--color-gray);
    }
    
    .btn--dark--fill:disabled {
      background-color: var(--color-secondary-blue-dark);
    }
    
    /* **** Variants **** */
    .btn--primary--outline {
      background-color: var(--color-base-light);
      border: 1px solid var(--color-primary);
      color: var(--color-base-dark);
    }
    
    .btn--primary--outline:hover {
      background-color: var(--color-primary-light);
      color: var(--color-base-light);
    }
    
    .btn--success--outline {
      background-color: var(--color-base-light);
      border: 1px solid var(--color-status-success);
      color: var(--color-status-success);
    }
    
    .btn--success--outline:hover {
      background-color: var(--color-status-success-dark);
      border-color: transparent;
      color: var(--color-base-light);
    }
    
    .btn--danger--outline {
      background-color: var(--color-base-light);
      border: 1px solid var(--color-status-danger);
      color: var(--color-status-danger);
    }
    
    .btn--danger--outline:hover {
      background-color: var(--color-status-danger-dark);
      border-color: transparent;
      color: var(--color-base-light);
    }
    
    .btn--info--outline {
      background-color: var(--color-base-light);
      border: 1px solid var(--color-status-info);
      color: var(--color-status-info);
    }
    
    .btn--info--outline:hover {
      background-color: var(--color-status-info-dark);
      border-color: transparent;
      color: var(--color-base-light);
    }
    
    .btn--warning--outline {
      background-color: var(--color-base-light);
      border: 1px solid var(--color-status-warning);
      color: var(--color-status-warning);
    }
    
    .btn--warning--outline:hover {
      background-color: var(--color-status-warning-dark);
      border-color: transparent;
      color: var(--color-base-light);
    }
    
    .btn--dark--outline {
      background-color: var(--color-base-light);
      border: 1px solid var(--color-base-dark);
      color: var(--color-base-dark);
    }
    
    .btn--dark--outline:hover {
      background-color: var(--color-gray);
      border-color: var(--color-secondary-blue);
      color: var(--color-base-light);
    }
    
    .btn--dark--outline:disabled {
      border-color: var(--color-secondary-blue-dark);
      color: var(--color-base-dark);
    }
    
    
    /* **** Sizes **** */
    
    .btn--small {
      padding: 1.2rem 1.4rem;
    }
    
    .btn--medium {
      padding: 1.6rem 1.8rem;
    }
    
    .btn--large {
      padding: 2rem 2.2rem;
    }
    
    .btn--fillWidth {
      width: 100%;
    }
    .cta-btn .btn {
      font-size: 14px;
      font-weight: 400;
      line-height: 28px;
      text-align: center;
    
    }
    input[type='checkbox']::checked {
      border: none;
      outline: 2px solid #fff;
      background: #000;
      color: #fff;
    }
  `)

export class TSAServicesModule extends HTMLElement {
  private services: { imageUrl: string; title: string, href: string }[];
  constructor() {
    super();

    this.attachShadow({ mode : "open" });

    const servicesAttr = this.getAttribute('services');
    const servicesItems: { imageUrl: string; title: string, href: string }[] = servicesAttr ? JSON.parse(servicesAttr) : [];
    this.services = servicesItems;
    
    let servicesListHTML = '';
    servicesItems.map((service) => {
      servicesListHTML += `
      <tsa-card class="example">
        <div class="example__image">
            <img src="${service.imageUrl}" alt="sample image" />
        </div>

        <tsa-title>${service.title}</tsa-title>
        <div class="example__cta">
            <a href="${service.href}" class="btn btn--small btn--dark--outline">Learn More</a>
        </div>
      </tsa-card>
      `;
    });

    template.innerHTML = `
      <div class="service-list">
        <tsa-title class="service-list__title">[FPO] All Services</tsa-title>
        <div class="service-list__wrapper">
          ${servicesListHTML}
        </div>
      </div>
    `;
  }

  connectedCallback() {
    if(this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [style];
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

export interface Service {

};

export interface TSAServicesProps {
  services?: string;
}

export const TSAServices = ({services}: TSAServicesProps) => {
  return`
    <tsa-services services='${services}'></tsa-services>
  `
}