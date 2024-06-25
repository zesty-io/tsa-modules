const readMoreCardListStylesheet = new CSSStyleSheet();

readMoreCardListStylesheet.replaceSync(`
  slot {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
  .read-more-card-list h2{
    font-size: 4rem;
    font-family: "Cinzel", serif;
    font-weight: 200;
    text-align: center;
  }
  @media (max-width: 769px) {
    slot {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`);

export class ReadMoreCardListModule extends HTMLElement {
  private heading: string | null;
   constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.heading = this.getAttribute('heading');
   }

   connectedCallback() {
    if(this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [readMoreCardListStylesheet];
      this.shadowRoot.innerHTML = `
        <div class="read-more-card-list">
          <h2>${this.heading}</h2>
          <slot></slot>
        </div>
      `
    }
   }

}

export interface ReadMoreCardListProps {
  heading?: string
}

export const ReadMoreCardList = ({heading}: ReadMoreCardListProps) => {
  return`
    <tsa-read-more-card-list heading="${heading}">
      <read-more-card 
        imgUrl="https://w1w702z1.media.zestyio.com/image-sample-full.jpg"
        heading="Name/Title"
        intro="<p>Brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.</p>"
        link="#"
        content="<p>Longer, yet concise version of the bio written for each entity that is represented by this card. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Ultricies mi eget mauris pharetra et ultrices neque ornare. Dui vivamus arcu felis bibendum ut tristique et egestas. Nec ullamcorper sit amet risus nullam.</p>"
      ></read-more-card>
      <read-more-card 
        imgUrl="https://w1w702z1.media.zestyio.com/image-sample-full.jpg"
        heading="Name/Title"
        intro="<p>Brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.</p>"
        link="#"
        content="<p>Longer, yet concise version of the bio written for each entity that is represented by this card. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Ultricies mi eget mauris pharetra et ultrices neque ornare. Dui vivamus arcu felis bibendum ut tristique et egestas. Nec ullamcorper sit amet risus nullam.</p>"
      ></read-more-card>
      <read-more-card 
        imgUrl="https://w1w702z1.media.zestyio.com/image-sample-full.jpg"
        heading="Name/Title"
        intro="<p>Brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.</p>"
        link="#"
        content="<p>Longer, yet concise version of the bio written for each entity that is represented by this card. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Ultricies mi eget mauris pharetra et ultrices neque ornare. Dui vivamus arcu felis bibendum ut tristique et egestas. Nec ullamcorper sit amet risus nullam.</p>"
      ></read-more-card>
      <read-more-card 
        imgUrl="https://w1w702z1.media.zestyio.com/image-sample-full.jpg"
        heading="Name/Title"
        intro="<p>Brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.</p>"
        link="#"
        content="<p>Longer, yet concise version of the bio written for each entity that is represented by this card. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Ultricies mi eget mauris pharetra et ultrices neque ornare. Dui vivamus arcu felis bibendum ut tristique et egestas. Nec ullamcorper sit amet risus nullam.</p>"
      ></read-more-card>
      <read-more-card 
        imgUrl="https://w1w702z1.media.zestyio.com/image-sample-full.jpg"
        heading="Name/Title"
        intro="<p>Brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.</p>"
        link="#"
        content="<p>Longer, yet concise version of the bio written for each entity that is represented by this card. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Ultricies mi eget mauris pharetra et ultrices neque ornare. Dui vivamus arcu felis bibendum ut tristique et egestas. Nec ullamcorper sit amet risus nullam.</p>"
      ></read-more-card>
      <read-more-card 
        imgUrl="https://w1w702z1.media.zestyio.com/image-sample-full.jpg"
        heading="Name/Title"
        intro="<p>Brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.</p>"
        link="#"
        content="<p>Longer, yet concise version of the bio written for each entity that is represented by this card. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Ultricies mi eget mauris pharetra et ultrices neque ornare. Dui vivamus arcu felis bibendum ut tristique et egestas. Nec ullamcorper sit amet risus nullam.</p>"
      ></read-more-card>
      <read-more-card 
        imgUrl="https://w1w702z1.media.zestyio.com/image-sample-full.jpg"
        heading="Name/Title"
        intro="<p>Brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.</p>"
        link="#"
        content="<p>Longer, yet concise version of the bio written for each entity that is represented by this card. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Ultricies mi eget mauris pharetra et ultrices neque ornare. Dui vivamus arcu felis bibendum ut tristique et egestas. Nec ullamcorper sit amet risus nullam.</p>"
      ></read-more-card>
      <read-more-card 
        imgUrl="https://w1w702z1.media.zestyio.com/image-sample-full.jpg"
        heading="Name/Title"
        intro="<p>Brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.</p>"
        link="#"
        content="<p>Longer, yet concise version of the bio written for each entity that is represented by this card. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Ultricies mi eget mauris pharetra et ultrices neque ornare. Dui vivamus arcu felis bibendum ut tristique et egestas. Nec ullamcorper sit amet risus nullam.</p>"
      ></read-more-card>
    </tsa-read-more-card-list>
  `
}