import './lightbox-module.css';

const styles = new CSSStyleSheet();

styles.replaceSync(`
    .lightbox{
        position: relative;
        border: none;

        & #close-btn{
            border: none;
            background-color: #fff;
            border-radius: 100%;
            color: #FFF;
            cursor: pointer;
            position: absolute;
            top: -1.3rem;
            right: -1.8rem;
            padding: 0rem;
            display:  flex;
            align-items: center;
            justify-content: center;
            // font-size: 1rem;
        }

        & .lightbox__header{

            & h1{
                font-family: "Cinzel", serif;
                font-size: 4.8rem;
                text-align: center;
                line-height: 5.76rem;
            }
        }

        & .lightbox__content{
            display: flex;
            align-items: center;
            justify-content: center;
        }

    }
`);

export class LightboxModule extends HTMLElement {
  static observedAttributes = ['open'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    const title = this.getAttribute('title');
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [styles];

      this.shadowRoot.innerHTML = `
        <dialog class="lightbox">
            <button id="close-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#000" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
            </svg>
            </button>

            <div class="lightbox__header">
                <h1>${title}</h1>
            </div>

            <div class="lightbox__content">
                <slot></slot>
            </div>
        </dialog>
        `;

      const dialog = this.shadowRoot.querySelector('dialog');

      const closeBtn = this.shadowRoot.getElementById('close-btn');

      closeBtn!.onclick = () => {
        dialog?.removeAttribute('open');
      };
    }
  }

  attributeChangedCallback(name: string, _oldValue: string, _newValue: string) {
    // console.log(`Attribute ${name} has changed from ${oldValue} to ${newValue}.`);

    const root = this.shadowRoot;
    const dialog = root?.querySelector('dialog');

    if (name === 'open') dialog?.setAttribute('open', '');
  }
}

export interface LightboxProps {
  title: string;
  imageUrl: string;
}

export const Lightbox = ({ title }: LightboxProps) => {
  return `
  <button id="open" type="button" class="btn btn--small btn--success--fill">Open</button>
        <lightbox-module title="${title}">
            <div class="content">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <div class="content__cta">
                    <button type="button" class="btn btn--small btn--dark--fill btn--fillWidth">[FPO Give Once]</button>
                    <button type="button" class="btn btn--small btn--dark--outline btn--fillWidth">[FPO Give Monthly]</button>
                </div>
            </div>
        </lightbox-module>

        <script>    
            document.getElementById("open").onclick = () =>{
              document.querySelector("lightbox-module").toggleAttribute('open');
            }
        </script>
    `;
};
