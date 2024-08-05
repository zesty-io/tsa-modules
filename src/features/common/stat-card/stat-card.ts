export class StatCardComponent extends HTMLElement {
	connectedCallback() {
		const content = this.querySelector("p");

		this.innerHTML = /*HTML */ `
            <div class="tsa-card gap-3 d-flex flex-column align-items-center justify-content-center" style="max-width:384px">
                <h1 style="font-size: 80px">${this.getAttribute("data-title")}</h1>
            </div>
        `;

		const container = this.querySelector(".tsa-card");

		if (content) container?.appendChild(content);
	}
}

export const StatCard = () => {
	return /*HTML */ `
    <tsa-stat-card data-title="1 in 30">
        <p class="text-center">Every year, 1 out of 30 children experiences homelessness.</p>
    </tsa-stat-card>
    `;
};
