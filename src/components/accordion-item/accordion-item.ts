const accordionItemTemplate = document.createElement("template");

const accordionItemCss = new CSSStyleSheet();

accordionItemCss.replaceSync(`
  .accordion-item {
    border: 1px solid #ddd;
    width: auto;
  }

  .accordion-header {
    background-color: transparent;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    width: auto;
    position: relative;
  }
  .accordion-content {
    max-height: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: all .3s ease-in-out;
  }

  .accordion-content div {
    padding: 1.5rem;
  }
  
  :host .accordion-content {
    visibility: visible;
  }

  .accordion-toggle {
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    right: 1.5rem;
    transform: translate(-50%, -50%);
  }
  .accordion-header .accordion-toggle .line-2  {
    opacity: 1;
    transition: opacity 0.5 ease;
  }

  .accordion-header.show .accordion-toggle .line-2 {
    opacity: 0;
  }

  .line-1 {
    width: 100%;
    height: 1px;
    background: #000;
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .line-2 {
    width: 1px;
    height: 100%;
    background: #000;
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

`);

export class AccordionItemComponent extends HTMLElement {
	private header: string | null;
	private isOpen: boolean | null;
	private subtext: string | null;
	constructor() {
		super();

		this.attachShadow({ mode: "open" });

		this.header = this.getAttribute("title");
		this.isOpen = false;
		this.subtext = this.getAttribute("subtext");

		accordionItemTemplate.innerHTML = `
      <div class="accordion-item">
        <div class="accordion-header">
          <div>
            <h4>${this.header}</h4>
            <span>${this.subtext ? this.subtext : ''}</span>
          </div>
          <div class="accordion-toggle">
            <span class="line-1"></span>
            <span class="line-2"></span>
          </div> 
        </div>
        <div class="accordion-content">
          <div>
            <slot></slot>
          </div>
        </div>
      </div>
    `;
	}

	connectedCallback() {
		if (this.shadowRoot) {
			const root = this.shadowRoot as ShadowRoot;

			this.shadowRoot.adoptedStyleSheets = [accordionItemCss];
			this.shadowRoot.appendChild(
				accordionItemTemplate.content.cloneNode(true),
			);
			const headerToggle = root.querySelector(".accordion-header");
			headerToggle?.addEventListener("click", () =>
				this.toggleContent(headerToggle),
			);
		}
	}

	toggleContent(headerEl: Element) {
		const content = this.shadowRoot?.querySelector(".accordion-content");
		if (content && content instanceof HTMLElement) {
			if (content.style.maxHeight) {
				content.style.maxHeight = ""; // Close the accordion
				headerEl.classList.toggle("show");
			} else {
				content.style.maxHeight = `${content.scrollHeight}px`; // Open the accordion
				headerEl.classList.toggle("show");
			}
			//
			this.isOpen = !this.isOpen;
		}
	}
}

export interface AccordionItemProps {
	header?: string;
	subtext?: string;
}

export const AccordionItem = ({ header, subtext }: AccordionItemProps) => {
	return `
  <accordion-item title="${header}" subtext="${subtext}">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </accordion-item>
  `;
};
