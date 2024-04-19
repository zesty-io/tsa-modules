import './title.css';

export interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return `
        <h1 class="title">${title}</h1>
    `;
};
