import './search-bar-module.css';

export class SearchBarModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    
  }
}

export interface SearchBarProps {
  name: string;
  size?: 'small' | 'medium' | 'large';
  type: 'email' | 'text' | 'password' | 'number';
  value: string;
  placeholder: string;
  disabled?: boolean;
  label?: string;
  buttonText? : string;
  onClick?: () => void;
}

export const SearchBar = ({
  name,
  size = 'medium',
  type = 'text',
  value = '',
  placeholder,
  disabled = false,
  buttonText,
  label,
  onClick}: SearchBarProps) => {
    return`
      <search-bar>
        <div class="search-bar__container">
        <span class="placeholder">${label}</span>
        <div class="search-bar__form">
            <input class="input--${size}" type="${type}" name="${name}" placeholder="${placeholder}" value="${value}" disabled="${disabled}"/>
            <button type="button" class="btn btn--small btn--dark--fill" onclick="${onClick}">${buttonText}</button>
        </div>
        </div>
      </search-bar>
    `
};