export class PartnershipOpportunitiesHeaderModule extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <div>
            <h1 class="tsa-title mb-6">${this.getAttribute("data-title")}</h1>
            <p class="tsa-text text-center">${this.getAttribute("data-desc")}</p>
        </div>
        `;
	}
}

export const PartnershipOpportunities = () => {
	return `<tsa-partnership data-title="[FPO] PARTNERSHIP OPPORTUNITIES" data-desc="Lorem ipsum dolor sit amet, consectur adipscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.">
       </tsa-partnership>`;
};
