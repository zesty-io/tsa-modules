import './button.css';

export interface ButtonProps {
  color?: 'primary' | 'success' | 'danger' | 'info' | 'warning' | 'dark';
  variant?: 'fill' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fillWidth?: boolean;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({
  color = 'primary',
  variant = 'fill',
  size = 'medium',
  label,
  onClick,
  disabled = false,
  fillWidth
}: ButtonProps) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  if (onClick) {
    btn.addEventListener('click', onClick);
  }

  btn.className = [
    'btn',
    `btn--${size}`,
    `btn--${color}--${variant}`,
    `${fillWidth ? 'btn--fillWidth' : ''}`
  ].join(' ');

  btn.disabled = disabled;

  return btn;
};
