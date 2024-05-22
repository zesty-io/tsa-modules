import '../../components/title/title.css';

const accordionTemplate = document.createElement('template');

const accordionStyle = new CSSStyleSheet();

accordionStyle.replaceSync(`
  .accordion {
    display: flex;
    flex-direction: column;
  }
`);

export class AccordionModule extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: "open"});

    accordionTemplate.innerHTML = `
      <div class="accordion">
        <slot></slot>
      </div>
    `
  }

  connectedCallback() {
    if(this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [accordionStyle];
      this.shadowRoot.appendChild(accordionTemplate.content.cloneNode(true));
    }
  }
}

export interface AccordionProps {
  title?: string,
}

export const Accordion = ({title}: AccordionProps) => {
  return `
    <h1 class="tsa-title">${title}</h1>
    <accordion>
      <accordion-item title="Accordion 1">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </accordion-item>
      <accordion-item title="Accordion 2">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </accordion-item>
      <accordion-item title="accordion 3">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </accordion-item>
    </accordion>
  `
}