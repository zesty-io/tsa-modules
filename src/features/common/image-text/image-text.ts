import "./image-text.scss";

const styles = new CSSStyleSheet();

styles.replaceSync(`
    .container{
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .image-container {
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
    }

    @media(min-width: 1280px){
        .container{
            flex-direction: row;
            align-items: flex-start;

            &  .image-container{
                margin-right: 80px;
                margin-bottom: 0rem;    
            }
        }

       
    }
`);

export class TSAImageTextModule extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		if (this.shadowRoot) {
			this.shadowRoot.adoptedStyleSheets = [styles];
			this.shadowRoot.innerHTML = /*HTML*/ `
        <div class="container">
            <div part="image-container" class="image-container">
                <img part="image" src="${this.getAttribute("image")}" alt="${this.getAttribute("alt")}"/>
            </div>
            <div class="content-container">
              <slot></slot>
            </div>
        </div>
      `;
		}
	}
}

export interface ImageTextProps {
	image: string;
	alt: string;
}

export const ImageText = ({ image, alt }: ImageTextProps) => {
	return `
    <tsa-image-text-module imagePosition="right" image="${image}" alt="${alt}">
        <div class="tsa-image-text-content text-center text-xl-start">
            <h1 class="tsa-title mb-4">Volunteer as a Bell Ringer</h1>
            <p class="tsa-text mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.
            </p>
            <button class="btn btn-dark">Register to Ring</button>
        </div>
    </tsa-image-text-module>
  `;
};
