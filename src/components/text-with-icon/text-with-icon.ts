import './text-with-icon.css';

export class TSATextWithIconComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log(this.getAttribute('title'));
    this.innerHTML = `
      <div class="text-with-icon">
        <i class="bi bi-${this.getAttribute('bootstrapIcon')}"></i>
        <h6>${this.getAttribute('title')}</h6>
      </div>
      `;
  }
}

export interface TextWithIconProps {
  icon: string;
  title: string;
}

export const TextWithIcon = ({ icon, title }: TextWithIconProps) => {
  return `
    <tsa-text-with-icon bootstrapIcon="${icon}" title="${title}"></tsa-text-with-icon>
    `;
};
