import './search-bar-module.css';
import '../../components/button/button.css';

 
const template = document.createElement('template');

const styles = new CSSStyleSheet();

styles.replaceSync(`
.input {
  display: flex;
  flex-direction: column;

  & input {
      border-radius: .6rem;
      border: 1px solid var(--color-gray-medium);
      font-size: 1.6rem;
  }

  & input:focus {
      outline-color: var(--color-primary);
      outline-width: thin;
      box-shadow: 0px 0px 0px 3px rgba(237, 28, 43, 0.15);
  }

  & input:disabled {
      background: var(--color-gray);
  }

  & span {
      margin-bottom: .5rem;
      font-weight: 500;
      font-size: 1.6rem;
  }
}

.input--small {
  padding: .5rem 1.2rem;
}

.input--medium {
  padding: .9rem 1.6rem;
}

.input--large {
  padding: 1.4rem 1.6rem;
}
.search-bar__container {
  display: flex;
  width: 100%;
  flex-direction: column;

  & span {
    display: inline-block;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 1.2rem;
  }
}
.search-bar__form {
  display: flex;

  & button {
    margin-left: 10px;
  }
}
.btn {
  font-family: "Montserrat", serif;
  border: none;
  border-radius: .6rem;
  cursor: pointer;
  color: var(--color-base-light);
  transition: all .3s ease-out;
  font-size: 1.6rem;
}

.btn:disabled {
  opacity: 55%;
  pointer-events: none;
}

/* **** Colors **** */

.btn--primary--fill {
  background-color: var(--color-primary);
}

.btn--primary--fill:hover {
  background-color: var(--color-primary-light);
}

.btn--success--fill {
  background-color: var(--color-status-success);
}

.btn--success--fill:hover {
  background-color: var(--color-status-success-dark);
}

.btn--danger--fill {
  background-color: var(--color-status-danger);
}

.btn--danger--fill:hover {
  background-color: var(--color-status-danger-dark);
}

.btn--info--fill {
  background-color: var(--color-status-info);
}

.btn--info--fill:hover {
  background-color: var(--color-status-info-dark);
}

.btn--warning--fill {
  background-color: var(--color-status-warning);
  color: var(--color-base-dark);
}

.btn--warning--fill:hover {
  background-color: var(--color-status-warning-dark);
  color: var(--color-base-light);

}

.btn--dark--fill {
  background-color: var(--color-base-dark);
}

.btn--dark--fill:hover {
  background-color: var(--color-gray);
}

.btn--dark--fill:disabled {
  background-color: var(--color-secondary-blue-dark);
}

/* **** Variants **** */
.btn--primary--outline {
  background-color: var(--color-base-light);
  border: 1px solid var(--color-primary);
  color: var(--color-base-dark);
}

.btn--primary--outline:hover {
  background-color: var(--color-primary-light);
  color: var(--color-base-light);
}

.btn--success--outline {
  background-color: var(--color-base-light);
  border: 1px solid var(--color-status-success);
  color: var(--color-status-success);
}

.btn--success--outline:hover {
  background-color: var(--color-status-success-dark);
  border-color: transparent;
  color: var(--color-base-light);
}

.btn--danger--outline {
  background-color: var(--color-base-light);
  border: 1px solid var(--color-status-danger);
  color: var(--color-status-danger);
}

.btn--danger--outline:hover {
  background-color: var(--color-status-danger-dark);
  border-color: transparent;
  color: var(--color-base-light);
}

.btn--info--outline {
  background-color: var(--color-base-light);
  border: 1px solid var(--color-status-info);
  color: var(--color-status-info);
}

.btn--info--outline:hover {
  background-color: var(--color-status-info-dark);
  border-color: transparent;
  color: var(--color-base-light);
}

.btn--warning--outline {
  background-color: var(--color-base-light);
  border: 1px solid var(--color-status-warning);
  color: var(--color-status-warning);
}

.btn--warning--outline:hover {
  background-color: var(--color-status-warning-dark);
  border-color: transparent;
  color: var(--color-base-light);
}

.btn--dark--outline {
  background-color: var(--color-base-light);
  border: 1px solid var(--color-base-dark);
  color: var(--color-base-dark);
}

.btn--dark--outline:hover {
  background-color: var(--color-gray);
  border-color: var(--color-secondary-blue);
}

.btn--dark--outline:disabled {
  border-color: var(--color-secondary-blue-dark);
  color: var(--color-base-dark);
}


/* **** Sizes **** */

.btn--small {
  padding: 1.2rem 1.4rem;
}

.btn--medium {
  padding: 1.6rem 1.8rem;
}

.btn--large {
  padding: 2rem 2.2rem;
}

.btn--fillWidth {
  width: 100%;
}`);

export class SearchBarModule extends HTMLElement {
  private size: string | null;
  private type: string | null;
  private name: string | null;
  private placeholder: string | null;
  private value: string | null;
  private disabled: boolean;
  private buttonText: string | null;
  private label: string | null;
  private onClick!: Function | null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.size = this.getAttribute('size');
    this.type = this.getAttribute('type');
    this.name = this.getAttribute('name');
    this.placeholder = this.getAttribute('placeholder') || '';
    this.value = this.getAttribute('value') || '';
    this.disabled = this.hasAttribute('disabled');
    this.buttonText = this.getAttribute('buttonText');
    this.label = this.getAttribute('label');
    const onClickAttributeValue = this.getAttribute('onClick');
    console.log(onClickAttributeValue);
    // Convert the string representation to a function if the attribute exists
    if (onClickAttributeValue !== null) {
      this.onClick = new Function(onClickAttributeValue);
    }

    // Create the template
    template.innerHTML = `<div class="search-bar__container">
    <span class="placeholder">${this.label}</span>
    <div class="search-bar__form">
        <input class="input--${this.size}" type="${this.type}" name="${this.name}" placeholder="${this.placeholder}" value="${this.value}" disabled="${this.disabled}"/>
        <button type="button" class="btn btn--small btn--dark--fill" onclick="${this.onClick}">${this.buttonText}</button>
    </div>
    </div>`;

      
  }

  static get observedAttributes() {
    return ['value'];
  }

  attributeChangeCallback(name: string, oldVal: any, newVal: any) {
    console.log(name, oldVal, newVal);
  }

  connectedCallback() {
    if(this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [styles];
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

export interface SearchBarProps {
  name: string;
  size?: 'small' | 'medium' | 'large';
  type: 'email' | 'text' | 'password' | 'number';
  value: string;
  placeholder: string;
  disabled?: boolean;
  buttonText?: string;
  label?: string;
  onClick?: () => void;
}

export const SearchBar = ({
  name,
  size = 'medium',
  type = 'text',
  value = '',
  placeholder,
  disabled = false,
  buttonText = '',
  label,
  onClick,
}: SearchBarProps) => {
  return `
    <search-bar 
      name="${name}"
      size="${size}"
      type="${type}"
      value="${value}"
      placeholder="${placeholder}"
      disabled="${disabled}"
      buttonText="${buttonText}"
      label="${label}"
      onClick="${onClick ? 'onClick' : ''}"
    >
    </search-bar>
  `;
};
