type colors =
	| "primary"
	| "primary-light"
	| "primary-lighter"
	| "blue"
	| "blue-light"
	| "blue-dark"
	| "success"
	| "danger"
	| "info"
	| "warning"
	| "green"
	| "gray"
	| "gray-dark"
	| "gray-medium"
	| "gray-light"
	| "gray-lighter"
	| "dark"
	| "light"
	| "secondary-lighter";

export interface ButtonProps {
	color?: colors;
	textColor: colors;
	outline?: boolean;
	size?: "sm" | "lg";
	block?: boolean;
	label: string;
	onClick?: () => void;
	disabled?: boolean;
}

export const Button = ({
	color = "primary",
	textColor = "light",
	outline,
	size = "sm",
	block = false,
	label,
	onClick,
	disabled = false,
}: ButtonProps) => {
	const btn = document.createElement("button");
	btn.type = "button";
	btn.innerText = label;
	if (onClick) {
		btn.addEventListener("click", onClick);
	}

	btn.className = [
		"btn",
		`btn-${size}`,
		`btn-${block ? "block" : ""}`,
		`btn${outline ? "-outline" : ""}-${color}`,
		`text-${textColor}`,
	].join(" ");

	btn.disabled = disabled;

	return btn;
};
