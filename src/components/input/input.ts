import './input.css';

export interface InputProps {
  name: string;
  size?: 'small' | 'medium' | 'large';
  type: 'email' | 'text' | 'password' | 'number';
  value: string;
  placeholder: string;
  disabled?: boolean;
  label?: string;
}

export const Input = ({
  name,
  size = 'medium',
  type = 'text',
  value = '',
  placeholder,
  disabled = false,
  label
}: InputProps) => {
  return `
    <label class="input">
        <span>${label}</span>
        <input class="input--${size}" name="${name}" value="${value}" placeholder="${placeholder}" type="${type}" ${disabled && 'disabled'}/>
    </label>
  `;
};
