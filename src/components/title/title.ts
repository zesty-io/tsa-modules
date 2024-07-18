import './title.css';

export interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return `
        <h1 class="tsa-title">${title}</h1>
    `;
};
