import './title.css';

export class TSATitleComponent extends HTMLHeadingElement {
  constructor() {
    super();
    this.classList.add('tsa-title');
  }
}

export interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return `
        <h1 is="tsa-title">${title}</h1>
    `;
};
