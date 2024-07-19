import '../card/card.css';

export interface CardProps {
  content: string;
}

export const Card = ({ content }: CardProps) => {
  return `
      <div class="tsa-card">
        ${content}
      </div>
    `;
};
