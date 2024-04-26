import './text.css';

export interface TextProps {
  content: string;
}

export const Text = ({ content }: TextProps) => {
  return `
        <p class="tsa-text">${content}</p>
    `;
};
