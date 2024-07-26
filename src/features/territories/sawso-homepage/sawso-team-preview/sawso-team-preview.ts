export class TeamPreviewModule extends HTMLElement {
  constructor() {
    super();

  }
  connectedCallback() {
    this.innerHTML = `
      <div class="d-flex flex-column justify-content-center">
        <h2 class="tsa-title mb-6">${this.getAttribute("data-title")}</h2>
        <div class="container mb-5">
          <div class="row">
            <div class="col">
              <read-more-card imgUrl="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" subheading="Position Title" heading="Name" content="Longer, yet concise version of the bio written for each entity that is represented by this card. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Ultricies mi eget mauris pharetra et ultrices neque ornare. Dui vivamus arcu felis bibendum ut tristique et egestas. Nec ullamcorper sit amet risus nullam." link="#" intro="Brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua."></read-more-card>
            </div>
            <div class="col">
              <read-more-card imgUrl="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" subheading="Position Title" heading="Name" content="Longer, yet concise version of the bio written for each entity that is represented by this card. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Ultricies mi eget mauris pharetra et ultrices neque ornare. Dui vivamus arcu felis bibendum ut tristique et egestas. Nec ullamcorper sit amet risus nullam." link="#" intro="Brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua."></read-more-card>
            </div>
            <div class="col">
              <read-more-card imgUrl="https://w1w702z1.media.zestyio.com/image-sample-full.jpg" subheading="Position Title" heading="Name" content="Longer, yet concise version of the bio written for each entity that is represented by this card. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Ultricies mi eget mauris pharetra et ultrices neque ornare. Dui vivamus arcu felis bibendum ut tristique et egestas. Nec ullamcorper sit amet risus nullam." link="#" intro="Brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua."></read-more-card>
            </div>
          </div>
        </div>
        <button class="align-self-center btn btn-sm btn- btn-outline-dark">[FPO] See Our Team</button>
      </div>
    `
  }
}

export const TeamPreview = () => {
  return`
    <tsa-team-preview data-title="[FPO] Salvation Army World Service Office Team"></tsa-team-preview>
  `;
}