import "./button.css";

export interface ButtonProps {
	color?:
		| "primary"
		| "success"
		| "danger"
		| "info"
		| "warning"
		| "dark"
		| "light"
		| "secondary";
	outline?: boolean;
	size?: "sm" | "lg";
	block?: boolean;
	label: string;
	onClick?: () => void;
	disabled?: boolean;
}

export const Button = ({
	color = "primary",
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
	].join(" ");

	btn.disabled = disabled;

	return btn;
};
