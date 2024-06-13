const eventSingleContent = document.createElement('template');

const eventSingleStyle = new CSSStyleSheet();

eventSingleStyle.replaceSync(`
  ::slotted(p) {
    font-size: 1.5rem !important;
    margin-bottom: 1.2rem !important;
    line-height: 28px !important;
  }
  .event-single-content h3 {
    font-size: 2rem;
  }
`)

export class EventSingleContentModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    if(this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [eventSingleStyle];
      this.shadowRoot.innerHTML = `
        <div class="event-single-content">
          <h3>About the Event</h3>
          <slot></slot>
        </div>
      `
    }
  }
}

export interface EventSingleContentProps {

}

export const EventSingleContent = () => {
  return`
    <tsa-event-single-content>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Ultricies mi eget mauris pharetra et ultrices neque ornare. Dui vivamus arcu felis bibendum ut tristique et egestas. Nec ullamcorper sit amet risus nullam. Nulla facilisi morbi tempus iaculis. Vivamus at augue eget arcu dictum. Quis auctor elit sed vulputate mi sit amet mauris commodo. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Magna sit amet purus gravida quis. Id interdum velit laoreet id donec ultrices tincidunt arcu non.</p>
      <p>Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Est sit amet facilisis magna etiam tempor orci. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Morbi quis commodo odio aenean. Vivamus at augue eget arcu dictum varius duis. Ac turpis egestas maecenas pharetra convallis posuere. Sagittis vitae et leo duis ut diam quam nulla. Purus semper eget duis at tellus at urna. Adipiscing elit duis tristique sollicitudin nibh sit amet. Consequat ac felis donec et odio pellentesque. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Turpis egestas sed tempus urna et pharetra pharetra massa. Tellus mauris a diam maecenas sed enim ut sem viverra. Ligula ullamcorper malesuada proin libero. Mollis nunc sed id semper. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Cursus in hac habitasse platea dictumst quisque.</p>
    </tsa-event-single-content>
  `
}