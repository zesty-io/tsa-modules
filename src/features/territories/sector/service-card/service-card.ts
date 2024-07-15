export class ServiceCardModule extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <div class="shadow pb-8">
            <div class="mb-6">
                <img src="${this.getAttribute("data-image-src")}" alt="${this.getAttribute("data-image-alt")}"/>
            </div>
            <div class="d-flex align-items-center justify-content-center flex-column gap-6">
                <h1 class="fw-semibold fs-2">${this.getAttribute("data-title")}</h1>
                <button class="btn btn--small btn--dark--outline">Learn More</button>
            </div>
        </div>`;
	}
}

// Todo Add url link for each service
export const ServiceCard = () => {
	return `
    <tsa-service-card data-title="Health & HIV" data-image-src="https://placehold.co/370x200">

    </tsa-service-card>
    `;
};
