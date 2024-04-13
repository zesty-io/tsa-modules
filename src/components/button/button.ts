import './button.css';

export interface ButtonProps {
  variant?: 'primary' | 'success' | 'danger' | 'info' | 'warning' | 'dark' | 'light';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  onClick,
  disabled = false
}: ButtonProps) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  if (onClick) {
    btn.addEventListener('click', onClick);
  }

  btn.className = ['btn', `btn--${variant} btn--${size}`].join(' ');

  if (backgroundColor) {
    btn.style.backgroundColor = backgroundColor;
  }

  btn.disabled = disabled;

  return btn;
};
