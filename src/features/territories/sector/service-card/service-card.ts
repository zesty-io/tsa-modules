import "./service-card.scss";

export class ServiceCardModule extends HTMLElement {
	connectedCallback() {
		this.innerHTML = /*HTML */ `
        <div class="service-card shadow pb-8 d-none d-lg-inline-block">
            <div class="w-100">
                <img class="w-100" src="${this.getAttribute("data-image-src")}" alt="${this.getAttribute("data-image-alt")}"/>
            </div>
            <div class="d-flex align-items-center justify-content-center flex-column gap-6 p-6">
                <h1 class="fw-semibold fs-5 text-center">${this.getAttribute("data-title")}</h1>
                <button class="btn border-dark">
                    <a class="text-dark text-light-hover text-decoration-none" href="${this.getAttribute("data-link")}">Learn More</a>
                </button>
            </div>
        </div>
        
        <div class="d-flex d-lg-none gap-4 border-bottom pb-4">
            <div class="w-100">
                <img class="w-100" src="${this.getAttribute("data-image-src")}" alt="${this.getAttribute("data-image-alt")}"/>
            </div>
            <div class="d-flex align-items-start justify-content-center flex-column w-100">
                <h1 class="fw-semibold fs-6">${this.getAttribute("data-title")}</h1>
                <a class="text-dark fs-6" href="${this.getAttribute("data-link")}">Learn More</a>
            </div>
        </div>`;
	}
}

export const ServiceCard = () => {
	return `
    <tsa-service-card data-title="Health & HIV" data-image-src="/image-card.png">
    </tsa-service-card>
    `;
};
