import './event-single-header.css';

const eventSingleHeaderStyle = new CSSStyleSheet();

eventSingleHeaderStyle.replaceSync(`
`);

export class EventSingleHeaderModule extends HTMLElement {
  private heading: string | null;
  private imageUrl: string | null;
  constructor() {
    super();
    // this.attachShadow({mode: 'open'});

    this.heading = this.getAttribute('heading');
    this.imageUrl = this.getAttribute('imageUrl');

  }

  connectedCallback() {
    this.innerHTML = `
        <script type="text/javascript" async src="https://platform.twitter.com/widgets.js"></script>
        <div class="tsa-event-single">
          <div class="tsa-event-single__breadcrumb"><a href="#"><i class="bi bi-arrow-left-short"></i>Back to Events</a></div>
          <div class="tsa-event-single__wrapper">
            <div class="tsa-event-single__heading"><h1>${this.heading}</h1></div>
            <div class="tsa-event-single__socials">
              <ul>
                <li><a><i class="bi bi-facebook"></i>Share</a></li>
                <li><a><i class="bi bi-linkedin"></i>Share</a></li>
                <li><a><i class="bi bi-twitter-x"></i>share</a></li>
              </ul>
            </div>
            <div class="tsa-event-single__image">
              <img src="${this.imageUrl}" alt="Event Header" />
            </div>
          </div>
        </div>
      `
  }
}

export interface EventSingleHeaderProps {
  heading?: string,
  imageUrl?: string,
}

export const EventSingleHeader = ({heading, imageUrl}: EventSingleHeaderProps) => {
  return`
    <tsa-event-single-header heading="${heading}" imageUrl="${imageUrl}"></tsa-event-single-header>
  `
}