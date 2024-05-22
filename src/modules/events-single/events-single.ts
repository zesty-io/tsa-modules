const eventsTemplate = document.createElement('template');

const eventsstyle = new CSSStyleSheet();
eventsstyle.replaceSync (
  `
  .example {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 35px 20px 35px 20px;
    width: 100%;

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

    & .example__image {
      background: #fff;
      min-height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    &>* {
        margin-bottom: 3rem;
    }

    & .card__date {
      margin-bottom: 1.2rem;
      font-size: 14px;
    }

    & .card__content {
      font-size: 16px;
      margin-bottom: 1.2rem;
      line-height: 28px;
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

export class TSAEventsSingleModule extends HTMLElement {
  private imageURL: string | null;
  private heading: string | null;
  private date: string | number | null;
  private link: string | null;
  private content: string | null;

  constructor() {
    super();
    this.attachShadow({ mode : "open" });

    this.heading = this.getAttribute('heading');
    this.imageURL = this.getAttribute('imageURL');
    this.date = this.getAttribute('date');
    this.link = this.getAttribute('link');
    this.content = this.getAttribute('content');


    eventsTemplate.innerHTML = `
    <tsa-card class="example">
        <div class="example__image">
            <img src="${this.imageURL}" alt="sample image" />
        </div>

        <tsa-title>${this.heading}</tsa-title>
        <div class="card__date">
          ${this.date}
        </div>
        <p class="card__content">${this.content}</p>
        <div class="example__cta">
            <a href="${this.link}" class="btn btn--small btn--dark--outline">View Event</a>
        </div>
      </tsa-card>
    `
  }

  connectedCallback() {
    if(this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [eventsstyle];
      this.shadowRoot.appendChild(eventsTemplate.content.cloneNode(true));
    }
  }
}

export interface TSAEventsSingleProps {
  imageURL?: string,
  heading?: string,
  date?: string,
  link?: string,
  content?: string,

}


export const TSAEventsSingle = ({ date, heading, link, imageURL, content }: TSAEventsSingleProps) => {
  return`
    <tsa-events-single date="${date}" heading="${heading}" link="${link}" imageURL="${imageURL}" content="${content}">
    </tsa-events-single>
  `
};