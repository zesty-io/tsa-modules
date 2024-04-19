import './textarea.css';

export interface TextareaProps {
  name: string;
  size?: 'small' | 'medium' | 'large';
  type: 'email' | 'text' | 'password' | 'number';
  value: string;
  placeholder: string;
  disabled?: boolean;
  label?: string;
}

export const Textarea = ({
  name,
  size = 'medium',
  type = 'text',
  value = '',
  placeholder,
  disabled = false,
  label
}: TextareaProps) => {
  return `
    <label class="textarea">
        <span class="placeholder">${label}</span>
        <textarea class="textarea--${size}" name="${name}" placeholder="${placeholder}" type="${type}" ${disabled && 'disabled'}>${value}</textarea>
    </label>
  `;
};
