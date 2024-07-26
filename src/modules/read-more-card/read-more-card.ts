import './read-more-card.scss';

export class ReadMoreCardModule extends HTMLElement {
  private imgUrl: string | null;
  private heading: string | null;
  private content: string | null;
  private link: string | null;
  private intro: string | null;
  private subheading: string | null;

  constructor() {
    super();
    this.imgUrl = this.getAttribute('imgUrl');
    this.heading = this.getAttribute('heading');
    this.content = this.getAttribute('content');
    this.link = this.getAttribute('link');
    this.intro = this.getAttribute('intro');
    this.subheading = this.getAttribute('subheading')
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="tsa-card">
              <div class="card__image">
                <img src="${this.imgUrl}" />
              </div>
              <div class="card__content">
                <h3>${this.heading}</h3>
                <span class="card__subheading">${this.subheading ? this.subheading : ''}</span>
                <div class="card__text">${this.intro}</div> 
              </div>
              <div class="card__link">
                <a href="#" class="flip-link">Read More <i class="bi bi-arrow-right-circle"></i></a>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <div class="tsa-card">
              <div class="card__content">
                <h3>${this.heading}</h3>
                <span class="card__subheading">${this.subheading ? this.subheading : ''}</span>
                <div class="card__text">${this.content}</div>
              </div>
              <div class="card__link">
                <a href="#" class="flip-link-back">Read Less <i class="bi bi-arrow-left-circle"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.querySelector('.flip-link')?.addEventListener('click', (event) => {
      event.preventDefault();
      this.querySelector('.flip-card-inner')?.classList.add('flipped');
    });

    this.querySelector('.flip-link-back')?.addEventListener('click', (event) => {
      event.preventDefault();
      this.querySelector('.flip-card-inner')?.classList.remove('flipped');
    });
  }
}

export interface ReadMoreCardProps {
  imgUrl?: string;
  heading?: string;
  content?: string;
  link?: string;
  intro?: string;
}

export const ReadMoreCard = ({ imgUrl, heading, content, link, intro }: ReadMoreCardProps) => {
  return `
   <read-more-card imgUrl="${imgUrl}" heading="${heading}" subheading="Position Title" content="${content}" link="${link}" intro="${intro}"></read-more-card>
  `;
};
