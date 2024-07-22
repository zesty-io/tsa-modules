import "./switch.css";

export class SwitchComponent extends HTMLElement {
	connectedCallback() {
		const labels = this.getAttribute("labels");

		const labelsArr = labels?.split(",") ?? [];

		this.innerHTML = `
        <button class="tsa-switch">
            <div class="tsa-switch__thumb">${labelsArr[0] ?? ""}</div>
            <div class="tsa-switch__label">
                <span>${labelsArr[0] ?? ""}</span>
                <span>${labelsArr[1] ?? ""}</span>
            </div>
            <input type="checkbox">
        </button>

    `;

		const toggleButton = this.querySelector(".tsa-switch");

		const toggleThumb = this.querySelector(".tsa-switch__thumb");

		toggleButton?.addEventListener("click", () => {
			toggleButton.toggleAttribute("toggled");

			if (toggleButton.hasAttribute("toggled")) {
				if (toggleThumb) toggleThumb.textContent = labelsArr[1];
			} else {
				if (toggleThumb) toggleThumb.textContent = labelsArr[0];
			}
		});
	}
}

export interface SwitchProps {
	labels: string;
}

export const Switch = ({ labels }: SwitchProps) => {
	return `<tsa-switch labels="${labels}"></tsa-switch>`;
};
