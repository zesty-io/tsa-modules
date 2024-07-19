import "./team-card.scss";

export class TeamCardModule extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <div class="tsa-card team-card">
            <div class="mb-8">
                <img src="${this.getAttribute("data-image-src")}" alt="${this.getAttribute("data-image-alt")}"/>
            </div>

            <div class="d-flex flex-column gap-4 mb-8">
                <h1 class="fw-semibold fs-4">${this.getAttribute("data-name") || "Name"}</h1>
                <span class="fs-5">${this.getAttribute("data-position") || "Position"}</span>
                <p class="lh-lg fs-5">${this.getAttribute("data-desc") || "Description"}</p>
            </div>

            <div class="d-flex w-100">
                <button class="ms-auto">Read more -></button>
            </div>
            
        </div>
        `;
	}
}

export const TeamCard = () => {
	return `
    <tsa-team-card data-image-src="https://placehold.co/350x200" data-desc="Brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua."></tsa-team-card>
    `;
};
