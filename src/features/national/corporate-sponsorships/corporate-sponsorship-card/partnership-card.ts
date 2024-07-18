import "./partnership-card.scss";

export class PartnershipOpportunitiesCardModule extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <div class="partnership-card-container">
            <img class="partnership-card-image" src="${this.getAttribute("data-image-src")}" alt="${this.getAttribute("data-image-alt")}"/>
            <div class="partnership-card-content">
                <h1>${this.getAttribute("data-title")}</h1>
                <p>${this.getAttribute("data-desc")}</p>
            </div>
        </div>
        `;
	}
}

export const PartnershipOpportunitiesCard = () => {
	return `<tsa-partnership-card data-image-src="https://placehold.co/430x200" data-title="SEASONAL" data-desc="1-3 sentences explaining what this means">
    </tsa-partnership-card>`;
};
