import '../../../components/button/button.css';
import './stories-single.scss';

const template = document.createElement('template');

const style = new CSSStyleSheet();
style.replaceSync(
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
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: start;

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
      min-height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      & ::slotted(img) {
          width: 100%;
          object-fit: cover;
      }
    }

    &>* {
        margin-bottom: 3rem;
    }

    & .card__date {
      margin-bottom: 1.2rem;
      font-size: 14px;
    }

    & .card__content {
        margin: 0;
        & p {
            font-size: 16px;
            margin-bottom: 1.2rem;
            line-height: 28px;
        }
    }

    & :last-child {
        margin-bottom: 0;
    }
  }
  `
);

export class TSAStoriesSingleModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    template.innerHTML = `
    <div class="example">
        <div class="example__image">
            <slot name="imageURL"></slot>
        </div>

        <slot name="heading"></slot>
        <div class="card__date">
        <slot name="date"></slot>
        </div>
        <div class="card__content"><slot name="content"></slot></div>
        <div class="example__cta">
            <slot name="link"></slot>
        </div>
    </div>
    `;
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [style];
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

export interface TSAStoriesSingleProps {
  imageURL?: string;
  heading?: string;
  date?: string;
  link?: string;
  content?: string;
}

export const TSAStoriesSingle = ({
  date,
  heading,
  link,
  imageURL,
  content
}: TSAStoriesSingleProps) => {
  return `
    <tsa-stories-single>
      <a href="/" slot="heading">${heading}</a>
      <div class="card__content" slot="content">${content}</div>
      <span class="card__date" data-date="${date}" slot="date"></span>
      <img slot="imageURL" src="${imageURL}" alt="sample image" />
      <a slot="link" href="${link}" class="btn btn--small btn--dark--outline btn--fullWidth">[FPO] Read More</a>   
    </tsa-stories-single>
  `;
};

document.addEventListener('DOMContentLoaded', (event) => {
  const dateElement = document.querySelectorAll('.card__date');
  dateElement.forEach((el) => {
    const dateAtt: string | null = el.getAttribute('data-date');

    el.innerHTML = formatDate(dateAtt);
  });

  //
});

function formatDate(dateString: string | null) {
  let newDate;
  if (dateString) {
    newDate = new Date(dateString);
  } else {
    throw new Error('Invalid date string');
  }

  const day = newDate.getDate(); // Get the day (1-31)
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const monthIndex = newDate.getMonth(); // Get the month index (0-11)
  const month = monthNames[monthIndex];
  const year = newDate.getFullYear(); // Get the full year (e.g., 2024)

  return `${day} ${month}, ${year}`;
}
