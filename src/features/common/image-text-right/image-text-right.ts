import type { ImageTextProps } from "../image-text/image-text";
import "./image-text-right.scss";

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
    }

    .content-container {
        margin-bottom: 40px;
    }

    @media(min-width: 1280px){
        .container{
            flex-direction: row;
            align-items: flex-start;

            &  .content-container{
                margin-right: 80px;
                margin-bottom: 0rem;    
            }
        }

       
    }
`);

export class TSAImageTextRightModule extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		if (this.shadowRoot) {
			this.shadowRoot.adoptedStyleSheets = [styles];
			this.shadowRoot.innerHTML = `
        <div class="container">
            <div class="content-container">
            <slot></slot>
            </div>
            <div part="image-container" class="image-container">
                <img part="image" src="${this.getAttribute("image")}" alt="${this.getAttribute("alt")}"/>
            </div>
        </div>
      `;
		}
	}
}

export const ImageTextRight = ({ image, alt }: ImageTextProps) => {
	return `
    <tsa-image-text-right-module image="${image}" alt="${alt}">
        <div class="tsa-image-text-content text-center text-xl-start">
            <h1 class="tsa-title mb-4">Volunteer as a Bell Ringer</h1>
            <p class="tsa-text mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.
            </p>
            <button class="btn btn-dark">Register to Ring</button>
        </div>
    </tsa-image-text-right-module>
  `;
};
